// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract P2PIX {

    event DepositAdded(address indexed seller, bytes32 depositID, address token, uint256 price, uint256 amount);
    event DepositClosed(address indexed seller, bytes32 depositID);
    event DepositWithdrawn(address indexed seller, bytes32 depositID, uint256 amount);
    event DepositPriceChanged(bytes32 indexed depositID, uint256 price);
    event LockAdded(address indexed buyer, bytes32 indexed lockID, bytes32 depositID, uint256 amount, uint256 locked);
    event LockReleased(address indexed buyer, bytes32 lockId);
    event LockReturned(address indexed buyer, bytes32 lockId);

    struct Deposit {
        address seller;
        address token;          // ERC20 stable token address
        uint256 remaining;      // Remaining tokens available
        uint256 price;          // Price in R$ per token
        bool valid;             // Could be invalidated by the seller
        string pixTarget;       // The PIX account for the seller receive transactions
    }

    struct Lock {
        bytes32 depositID;
        address targetAddress;          // Where goes the tokens when validated
        address relayerAddress;         // Relayer address that facilitated this transaction
        uint256 relayerPremium;         // Amount to be paid for relayer
        uint256 amount;                 // Amount to be tranfered via PIX
        uint256 locked;                 // Amount locked in tokens from deposit
        uint256 expirationBlock;        // If not paid at this block will be expired
    }

    // Default blocks that lock will hold tokens
    uint256 public defaultLockBlocks;
    // List of valid Bacen signature addresses
    mapping(address => bool) public validBacenSigners;

    // Seller list of deposits
    mapping(bytes32 => Deposit) mapDeposits;
    // List of Locks
    mapping(bytes32 => Lock) mapLocks;
    // List of Pix transactions already signed
    mapping(bytes32 => bool) usedTransactions;

    modifier onlySeller(bytes32 depositID) {
        require(mapDeposits[depositID].seller == msg.sender, "P2PIX: Only seller could call this function.");
        _;
    }

    constructor (uint256 defaultBlocks, address[] memory validSigners) {
        defaultLockBlocks = defaultBlocks;
        for (uint8 i = 0; i < validSigners.length; i++){
            validBacenSigners[validSigners[i]] = true;
        }
    }

    // Vendedor precisa mandar token para o smart contract + chave PIX destino. Retorna um DepositID.
    function deposit(
        address token,
        uint256 amount,
        uint256 price,
        string calldata pixTarget
    ) public returns (bytes32 depositID){
        depositID = keccak256(abi.encodePacked(pixTarget, amount));
        require(!mapDeposits[depositID].valid, 'P2PIX: Deposit already exist and it is still valid');
        IERC20 t = IERC20(token);
        t.transferFrom(msg.sender, address(this), amount);
        Deposit memory d = Deposit(msg.sender, token, amount, price, true, pixTarget);
        mapDeposits[depositID] = d;
        emit DepositAdded(msg.sender, depositID, token, price, amount);
    }

    // Vendedor pode invalidar da ordem de venda impedindo novos locks na mesma (isso não afeta nenhum lock que esteja ativo).
    function cancelDeposit(bytes32 depositID) public onlySeller(depositID) {
        mapDeposits[depositID].valid = false;
        emit DepositClosed(mapDeposits[depositID].seller, depositID);
    }

    // Relayer interaje adicionando um “lock” na ordem de venda.
    // O lock precisa incluir address do comprador + address do relayer + reembolso/premio relayer + valor.
    // **Só poder ter um lock em aberto para cada (ordem de venda, valor)**.
    // Só pode fazer lock de ordens que não estão invalidadas(Passo 5).
    // Essa etapa pode ser feita pelo vendedor conjuntamente com a parte 1.
    // Retorna um LockID.
    function lock(
        bytes32 depositID,
        address targetAddress,
        address relayerAddress,
        uint256 relayerPremium,
        uint256 amount,
        bytes32[] calldata expiredLocks
    ) public returns (bytes32 lockID){
        unlockExpired(expiredLocks);
        Deposit storage d = mapDeposits[depositID];
        require(d.valid, "P2PIX: Deposit not valid anymore");
        uint256 toLock = (amount * 1 ether) / d.price;
        require(d.remaining >= toLock, "P2PIX: Not enough token remaining on deposit");
        lockID = keccak256(abi.encodePacked(depositID, amount, targetAddress));
        require(
            mapLocks[lockID].expirationBlock < block.number,
            "P2PIX: Another lock with same ID is not expired yet"
        );
        Lock memory l = Lock(
            depositID,
            targetAddress,
            relayerAddress,
            relayerPremium,
            amount,
            toLock,
            block.number+defaultLockBlocks
        );
        mapLocks[lockID] = l;
        d.remaining -= toLock;
        emit LockAdded(targetAddress, lockID, depositID, amount, toLock);
    }

    // Relayer interage com o smart contract, colocando no calldata o comprovante do PIX realizado.
    // Smart contract valida o comprovante, manda os tokens para o endereço do pagador, e reembolsa o custo do gás para o endereço do relayer especificado na parte (2).
    function release(
        bytes32 lockID,
        uint256 pixTimestamp,
        bytes32 r,
        bytes32 s,
        uint8 v
    ) public {
        // TODO **Prevenir que um Pix não relacionado ao APP seja usado pois tem o mesmo destino
        Lock storage l = mapLocks[lockID];
        require(l.expirationBlock > block.number && l.locked > 0, "P2PIX: Lock already released or returned");
        Deposit storage d = mapDeposits[l.depositID];
        bytes32 message = keccak256(abi.encodePacked(
            mapDeposits[l.depositID].pixTarget,
            l.amount,
            pixTimestamp
        ));
        bytes32 messageDigest = keccak256(abi.encodePacked("\x19Ethereum Signed Message:\n32", message));
        require(!usedTransactions[message], "P2PIX: Transaction already used to unlock payment");
        address signer = ecrecover(messageDigest, v, r, s);
        require(validBacenSigners[signer], "P2PIX: Signer is not a valid signer");
        IERC20 t = IERC20(d.token);
        t.transfer(l.targetAddress, l.locked-l.relayerPremium);
        if (l.relayerPremium > 0) t.transfer(l.relayerAddress, l.relayerPremium);
        l.locked = 0;
        l.expirationBlock = 0;
        usedTransactions[message] = true;
        emit LockReleased(l.targetAddress, lockID);
    }

    // Change price for deposit amount
    function changeDepositPrice(bytes32 depositID, uint256 price) public onlySeller(depositID) {
        Deposit storage d = mapDeposits[depositID];
        d.price = price;
        emit DepositPriceChanged(depositID, price);
    }

    // Unlock expired locks
    function unlockExpired(bytes32[] calldata lockIDs) public {
        uint256 locksSize = lockIDs.length;
        for (uint16 i = 0; i < locksSize; i++){
            Lock storage l = mapLocks[lockIDs[i]];
            require(l.expirationBlock < block.number && l.locked > 0, "P2PIX: Lock not expired or already released");
            mapDeposits[l.depositID].remaining += l.locked;
            l.locked = 0;
            emit LockReturned(l.targetAddress, lockIDs[i]);
        }
    }

    // Após os locks expirarem, vendedor pode interagir c/ o contrato e recuperar os tokens de um depósito específico.
    function withdraw(
        bytes32 depositID,
        bytes32[] calldata expiredLocks
    ) public onlySeller(depositID) {
        unlockExpired(expiredLocks);
        Deposit storage d = mapDeposits[depositID];
        if (d.valid) cancelDeposit(depositID);
        IERC20 token = IERC20(d.token);
        // Withdraw remaining tokens from mapDeposit[depositID]
        token.transfer(d.seller, d.remaining);
        uint256 amount = d.remaining;
        d.remaining = 0;
        emit DepositWithdrawn(msg.sender, depositID, amount);
    }

}