/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  PayableOverrides,
  BigNumberish,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { P2PIX, P2PIXInterface } from "../../p2pix.sol/P2PIX";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "defaultBlocks",
        type: "uint256",
      },
      {
        internalType: "address[]",
        name: "validSigners",
        type: "address[]",
      },
      {
        internalType: "contract IReputation",
        name: "_reputation",
        type: "address",
      },
      {
        internalType: "address[]",
        name: "tokens",
        type: "address[]",
      },
      {
        internalType: "bool[]",
        name: "tokenStates",
        type: "bool[]",
      },
    ],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "AddressDenied",
    type: "error",
  },
  {
    inputs: [],
    name: "AlreadyReleased",
    type: "error",
  },
  {
    inputs: [],
    name: "AmountNotAllowed",
    type: "error",
  },
  {
    inputs: [],
    name: "DepositAlreadyExists",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidDeposit",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidSigner",
    type: "error",
  },
  {
    inputs: [],
    name: "LengthMismatch",
    type: "error",
  },
  {
    inputs: [],
    name: "LockExpired",
    type: "error",
  },
  {
    inputs: [],
    name: "LoopOverflow",
    type: "error",
  },
  {
    inputs: [],
    name: "NoTokens",
    type: "error",
  },
  {
    inputs: [],
    name: "NotEnoughTokens",
    type: "error",
  },
  {
    inputs: [],
    name: "NotExpired",
    type: "error",
  },
  {
    inputs: [],
    name: "OnlySeller",
    type: "error",
  },
  {
    inputs: [],
    name: "Reentrancy",
    type: "error",
  },
  {
    inputs: [],
    name: "StaticCallFailed",
    type: "error",
  },
  {
    inputs: [],
    name: "TokenDenied",
    type: "error",
  },
  {
    inputs: [],
    name: "TxAlreadyUsed",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: true,
        internalType: "bool",
        name: "state",
        type: "bool",
      },
    ],
    name: "AllowedERC20Updated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "seller",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "depositID",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "DepositAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "seller",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "depositID",
        type: "uint256",
      },
    ],
    name: "DepositClosed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "seller",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "depositID",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "DepositWithdrawn",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "FundsWithdrawn",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "buyer",
        type: "address",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "lockID",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "depositID",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "LockAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "blocks",
        type: "uint256",
      },
    ],
    name: "LockBlocksUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "buyer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "lockId",
        type: "bytes32",
      },
    ],
    name: "LockReleased",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "buyer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "lockId",
        type: "bytes32",
      },
    ],
    name: "LockReturned",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnerUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "reputation",
        type: "address",
      },
    ],
    name: "ReputationUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "seller",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "merkleRoot",
        type: "bytes32",
      },
    ],
    name: "RootUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address[]",
        name: "signers",
        type: "address[]",
      },
    ],
    name: "ValidSignersUpdated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_addr",
        type: "address",
      },
    ],
    name: "_castAddrToKey",
    outputs: [
      {
        internalType: "uint256",
        name: "_key",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ERC20",
        name: "",
        type: "address",
      },
    ],
    name: "allowedERC20s",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "depositID",
        type: "uint256",
      },
    ],
    name: "cancelDeposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "defaultLockBlocks",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_pixTarget",
        type: "string",
      },
      {
        internalType: "bytes32",
        name: "allowlistRoot",
        type: "bytes32",
      },
    ],
    name: "deposit",
    outputs: [
      {
        internalType: "uint256",
        name: "depositID",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "depositCount",
    outputs: [
      {
        internalType: "uint256",
        name: "_val",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_depositID",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_buyerAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_relayerTarget",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_relayerPremium",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "bytes32[]",
        name: "merkleProof",
        type: "bytes32[]",
      },
      {
        internalType: "bytes32[]",
        name: "expiredLocks",
        type: "bytes32[]",
      },
    ],
    name: "lock",
    outputs: [
      {
        internalType: "bytes32",
        name: "lockID",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "mapDeposits",
    outputs: [
      {
        internalType: "uint256",
        name: "remaining",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "pixTarget",
        type: "string",
      },
      {
        internalType: "address",
        name: "seller",
        type: "address",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "bool",
        name: "valid",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "mapLocks",
    outputs: [
      {
        internalType: "uint256",
        name: "depositID",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "relayerPremium",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "expirationBlock",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "buyerAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "relayerTarget",
        type: "address",
      },
      {
        internalType: "address",
        name: "relayerAddress",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "lockID",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "_relayerTarget",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "pixTimestamp",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
    ],
    name: "release",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "reputation",
    outputs: [
      {
        internalType: "contract IReputation",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "sellerAllowList",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_blocks",
        type: "uint256",
      },
    ],
    name: "setDefaultLockBlocks",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "setOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IReputation",
        name: "_reputation",
        type: "address",
      },
    ],
    name: "setReputation",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "merkleroot",
        type: "bytes32",
      },
    ],
    name: "setRoot",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_validSigners",
        type: "address[]",
      },
    ],
    name: "setValidSigners",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_tokens",
        type: "address[]",
      },
      {
        internalType: "bool[]",
        name: "_states",
        type: "bool[]",
      },
    ],
    name: "tokenSettings",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32[]",
        name: "lockIDs",
        type: "bytes32[]",
      },
    ],
    name: "unlockExpired",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "usedTransactions",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "userRecord",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "validBacenSigners",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "depositID",
        type: "uint256",
      },
      {
        internalType: "bytes32[]",
        name: "expiredLocks",
        type: "bytes32[]",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawBalance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x608060405260018055604051620027f8380380620027f88339810160408190526200002a916200049d565b600080546001600160a01b031916339081178255604051909182917f8292fce18fa69edf4db7b94ea2e58241df0ae57f97e0a6c9b29067028bf92d76908290a3506200007685620000a3565b620000818362000133565b6200008c84620001bd565b620000988282620002a1565b505050505062000620565b6000546001600160a01b03163314620000f25760405162461bcd60e51b815260206004820152600c60248201526b15539055551213d49256915160a21b60448201526064015b60405180910390fd5b806004557f70fa43ca70216ad905ade86b9e650a691b2ce5a01980d0a81bdd8324141b8511816040516200012891815260200190565b60405180910390a150565b6000546001600160a01b031633146200017e5760405162461bcd60e51b815260206004820152600c60248201526b15539055551213d49256915160a21b6044820152606401620000e9565b60028190556040516001600160a01b03821681527fe127cf589a3879da0156d4a24f43b44f65cfa3570de594806b0bfa2fcf06884f9060200162000128565b6000546001600160a01b03163314620002085760405162461bcd60e51b815260206004820152600c60248201526b15539055551213d49256915160a21b6044820152606401620000e9565b80516000905b808210156200026e57600062000246848481518110620002325762000232620005bb565b60200260200101516200038760201b60201c565b6000908152600660205260409020805460ff191660019081179091559290920191506200020e565b50507f14a422d2412784a5749d03da98921fe468c98577b767851389a9f58ea5a363d781604051620001289190620005d1565b6000546001600160a01b03163314620002ec5760405162461bcd60e51b815260206004820152600c60248201526b15539055551213d49256915160a21b6044820152606401620000e9565b815180620003025763df9578836000526004601cfd5b81518114620003195763ff633a386000526004601cfd5b60208301602083016020830282015b8083146200037f578251600052600b60205260406000208251815550815183517f5d6e86e5341d57a92c49934296c51542a25015c9b1782a1c2722a940131c3d9a600080a360208301925060208201915062000328565b505050505050565b600c1b611000600160ac1b031690565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f191681016001600160401b0381118282101715620003d857620003d862000397565b604052919050565b60006001600160401b03821115620003fc57620003fc62000397565b5060051b60200190565b6001600160a01b03811681146200041c57600080fd5b50565b600082601f8301126200043157600080fd5b815160206200044a6200044483620003e0565b620003ad565b82815260059290921b840181019181810190868411156200046a57600080fd5b8286015b8481101562000492578051620004848162000406565b83529183019183016200046e565b509695505050505050565b600080600080600060a08688031215620004b657600080fd5b8551602080880151919650906001600160401b0380821115620004d857600080fd5b620004e68a838b016200041f565b965060408901519150620004fa8262000406565b6060890151919550808211156200051057600080fd5b6200051e8a838b016200041f565b945060808901519150808211156200053557600080fd5b508701601f810189136200054857600080fd5b8051620005596200044482620003e0565b81815260059190911b8201830190838101908b8311156200057957600080fd5b928401925b82841015620005a95783518015158114620005995760008081fd5b825292840192908401906200057e565b80955050505050509295509295909350565b634e487b7160e01b600052603260045260246000fd5b6020808252825182820181905260009190848201906040850190845b81811015620006145783516001600160a01b031683529284019291840191600101620005ed565b50909695505050505050565b6121c880620006306000396000f3fe60806040526004361061019a5760003560e01c806372fada5c116100e15780638e2749d61161008a57806398a268711161006457806398a2687114610544578063c52164c614610574578063d6e8b97314610594578063f7d0e04b146105b457600080fd5b80638e2749d6146104dd5780638e2a3d36146104fd5780639872dbfe1461052e57600080fd5b80637f94f65d116100bb5780637f94f65d146104655780638652b37e146104855780638da5cb5b146104a557600080fd5b806372fada5c146103f8578063758d77d41461041857806377cd38a41461043857600080fd5b80633631797211610143578063574983c81161011d578063574983c8146103935780635fd8c710146103b357806369cc6af4146103c857600080fd5b80633631797214610308578063461f3120146103285780634b2ae9801461036857600080fd5b806316d722401161017457806316d722401461022857806329cc7d10146102d15780632dfdf0b5146102f157600080fd5b806304937320146101a65780630d2a2d44146101e657806313af40351461020857600080fd5b366101a157005b600080fd5b3480156101b257600080fd5b506101d36101c1366004611ac4565b60056020526000908152604090205481565b6040519081526020015b60405180910390f35b3480156101f257600080fd5b50610206610201366004611bd1565b6105d4565b005b34801561021457600080fd5b50610206610223366004611c0e565b6106c5565b34801561023457600080fd5b5061028d610243366004611ac4565b600860205260009081526040902080546001820154600283015460038401546004850154600586015460069096015494959394929391926001600160a01b03918216928216911687565b6040805197885260208801969096529486019390935260608501919091526001600160a01b03908116608085015290811660a08401521660c082015260e0016101dd565b3480156102dd57600080fd5b506101d36102ec366004611c2b565b610766565b3480156102fd57600080fd5b506003546101d39081565b34801561031457600080fd5b50610206610323366004611d08565b610951565b34801561033457600080fd5b50610358610343366004611ac4565b60096020526000908152604090205460ff1681565b60405190151581526020016101dd565b34801561037457600080fd5b506101d3610383366004611c0e565b600c1b611000600160ac1b031690565b34801561039f57600080fd5b506102066103ae366004611ac4565b610a11565b3480156103bf57600080fd5b50610206610a8f565b3480156103d457600080fd5b506103586103e3366004611c0e565b600b6020526000908152604090205460ff1681565b34801561040457600080fd5b50610206610413366004611ac4565b610b19565b34801561042457600080fd5b50610206610433366004611d54565b610ba1565b34801561044457600080fd5b506101d3610453366004611ac4565b600a6020526000908152604090205481565b34801561047157600080fd5b50610206610480366004611db8565b610f77565b34801561049157600080fd5b506101d36104a0366004611de4565b61100a565b3480156104b157600080fd5b506000546104c5906001600160a01b031681565b6040516001600160a01b0390911681526020016101dd565b3480156104e957600080fd5b506102066104f8366004611e98565b6111b9565b34801561050957600080fd5b5061051d610518366004611ac4565b611311565b6040516101dd959493929190611eda565b34801561053a57600080fd5b506101d360045481565b34801561055057600080fd5b5061035861055f366004611ac4565b60066020526000908152604090205460ff1681565b34801561058057600080fd5b506002546104c5906001600160a01b031681565b3480156105a057600080fd5b506102066105af366004611f67565b6113db565b3480156105c057600080fd5b506102066105cf366004611c0e565b6114b3565b6000546001600160a01b031633146106225760405162461bcd60e51b815260206004820152600c60248201526b15539055551213d49256915160a21b60448201526064015b60405180910390fd5b80516000905b8082101561068957600061066284848151811061064757610647612031565b6020026020010151611000600160ac1b03600c9190911b1690565b6000908152600660205260409020805460ff19166001908117909155929092019150610628565b50507f14a422d2412784a5749d03da98921fe468c98577b767851389a9f58ea5a363d7816040516106ba9190612047565b60405180910390a150565b6000546001600160a01b0316331461070e5760405162461bcd60e51b815260206004820152600c60248201526b15539055551213d49256915160a21b6044820152606401610619565b6000805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0383169081178255604051909133917f8292fce18fa69edf4db7b94ea2e58241df0ae57f97e0a6c9b29067028bf92d769190a350565b6001600160a01b0385166000908152600b6020526040812054869060ff166107a157604051630abc194760e11b815260040160405180910390fd5b6107a961153a565b915060006040518060a0016040528088815260200187878080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152505050908252503360208201526001600160a01b038a1660408201526001606090910152905061081e61154a565b831561082e5761082e3385610f77565b600083815260076020908152604090912082518155818301518051849361085c926001850192910190611a2b565b5060408201516002820180546001600160a01b0392831673ffffffffffffffffffffffffffffffffffffffff199091161790556060830151600392830180546080909501511515600160a01b027fffffffffffffffffffffff0000000000000000000000000000000000000000009095169190921617929092179091556108e69080546001019055565b6108f28233308a611575565b6108fb60018055565b604080518481526001600160a01b038a16602082015290810188905233907f25ac57b911b0f66b64c294827f539545fbc3ddd002cafab117776274f3241e4c9060600160405180910390a2505095945050505050565b61095961154a565b6109628361160c565b61096c82826111b9565b60008381526007602052604090206003810154600160a01b900460ff1615156001141561099c5761099c84610b19565b600381015481546000835560028301546001600160a01b03928316926109c59184911683611649565b604080518781526020810183905233917f7719804546c0185709e60c90d164447ff251a5ba29af0216faa921350f6bebf7910160405180910390a2505050610a0c60018055565b505050565b6000546001600160a01b03163314610a5a5760405162461bcd60e51b815260206004820152600c60248201526b15539055551213d49256915160a21b6044820152606401610619565b806004557f70fa43ca70216ad905ade86b9e650a691b2ce5a01980d0a81bdd8324141b8511816040516106ba91815260200190565b6000546001600160a01b03163314610ad85760405162461bcd60e51b815260206004820152600c60248201526b15539055551213d49256915160a21b6044820152606401610619565b47610ae333826116d5565b60408051338152602081018390527feaff4b37086828766ad3268786972c0cd24259d4c87a80f9d3963a3c3d999b0d91016106ba565b610b228161160c565b6000818152600760209081526040918290206003810180547fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff1690556002015491518381526001600160a01b03909216917fb4d98b272597e828d9b172c0d44390d5b267040e918088eac8a0a0fadcb81c70910160405180910390a250565b610ba961154a565b60008681526008602052604090206002810154610bd9576040516331da482760e11b815260040160405180910390fd5b4381600301541015610bfe576040516307b7d7dd60e51b815260040160405180910390fd5b8054600090815260076020908152604080832060028501549151909392610c2e92600186019290918b91016120cf565b604051602081830303815290604052805190602001209050600081604051602001610c8591907f19457468657265756d205369676e6564204d6573736167653a0a3332000000008152601c810191909152603c0190565b60408051601f1981840301815291815281516020928301206000858152600990935291205490915060ff16151560011415610cd357604051637a48537560e11b815260040160405180910390fd5b6040805160008082526020820180845284905260ff8816928201929092526060810189905260808101889052610d479060019060a0016020604051602081039080840390855afa158015610d2b573d6000803e3d6000fd5b5050604051601f190151600c1b611000600160ac1b0316919050565b60008181526006602052604090205490915060ff16610d7957604051632057875960e21b815260040160405180910390fd5b6003840154600286015460018701546001600160a01b0390921691600090610da1908361218c565b600060028a0181905560038a01819055878152600960205260409020805460ff191660011790556006890154909150336001600160a01b0390911614610e52576001880154611000600160ac1b0333600c1b1660009081526005602052604081208054909190610e129084906121a3565b90915550506006880154600c1b611000600160ac1b031660009081526005602052604081208054849290610e479084906121a3565b90915550610e949050565b818860010154610e6291906121a3565b611000600160ac1b0333600c1b1660009081526005602052604081208054909190610e8e9084906121a3565b90915550505b6004880154610eae9084906001600160a01b031683611649565b600188015415610f1a5760058801546001600160a01b038e8116911614610f0b5760058801546001808a0154610ef39286926001600160a01b0390911691901c611649565b610f06838e60018b60010154901c611649565b610f1a565b610f1a838e8a60010154611649565b60048801546040518f81526001600160a01b03909116907f5e420822d2f7281fdc4b763c62c8b7874bf22108a35efe93144d79296aacc67d9060200160405180910390a25050505050505050610f6f60018055565b505050505050565b6001600160a01b038216331415610ff157611000600160ac1b03600c83901b166000908152600a602090815260409182902083905581516001600160a01b038516815290810183905281517f0b294da292f26e55fd442b5c0164fbb9013036ff00c5cfdde0efd01c1baaf632929181900390910190a15050565b6040516342e8fb9360e11b815260040160405180910390fd5b600061101461154a565b61101e83836111b9565b60008a81526007602052604090206003810154600160a01b900460ff1661105857604051635972996f60e11b815260040160405180910390fd5b805487111561107a576040516308aeed0f60e21b815260040160405180910390fd5b6110858b888c611730565b915060006040518060e001604052808d81526020018a8152602001898152602001600454436110b491906121a3565b81526001600160a01b03808e1660208301528c166040820152336060909101529050851561111d576002820154600c1b611000600160ac1b03166000908152600a602052604090205461110b9088908890336117b4565b6111168382846117e6565b50506111a3565b6064816040015111611134576111168382846117e6565b611000600160ac1b0333600c1b166000908152600560205260408120549061115b826118e4565b905080836040015111806111755750620f42408360400151115b1561119357604051630e0c7c2360e11b815260040160405180910390fd5b61119e8584866117e6565b505050505b6111ac60018055565b9998505050505050505050565b6000815b808210156112f5576000600860008686868181106111dd576111dd612031565b90506020020135815260200190815260200160002090506111fd816119a0565b60028101548154600090815260076020526040812080549091906112229084906121a3565b90915550506000600282018190556006820154600c1b611000600160ac1b031660008181526005602052604090205490915060011c6064811161127657600082815260056020526040902060649055611288565b60008281526005602052604090208190555b60048301546001600160a01b03167f67e089478e21dd12c98e69331c4152f6c9b2038b91e0f28268ffa01558c0b4ff8888888181106112c9576112c9612031565b905060200201356040516112df91815260200190565b60405180910390a28460010194505050506111bd565b8082101561130b5763dfb035c96000526004601cfd5b50505050565b6007602052600090815260409020805460018201805491929161133390612094565b80601f016020809104026020016040519081016040528092919081815260200182805461135f90612094565b80156113ac5780601f10611381576101008083540402835291602001916113ac565b820191906000526020600020905b81548152906001019060200180831161138f57829003601f168201915b50505050600283015460039093015491926001600160a01b03908116929081169150600160a01b900460ff1685565b6000546001600160a01b031633146114245760405162461bcd60e51b815260206004820152600c60248201526b15539055551213d49256915160a21b6044820152606401610619565b8151806114395763df9578836000526004601cfd5b8151811461144f5763ff633a386000526004601cfd5b60208301602083016020830282015b808314610f6f578251600052600b60205260406000208251815550815183517f5d6e86e5341d57a92c49934296c51542a25015c9b1782a1c2722a940131c3d9a600080a360208301925060208201915061145e565b6000546001600160a01b031633146114fc5760405162461bcd60e51b815260206004820152600c60248201526b15539055551213d49256915160a21b6044820152606401610619565b60028190556040516001600160a01b03821681527fe127cf589a3879da0156d4a24f43b44f65cfa3570de594806b0bfa2fcf06884f906020016106ba565b600061154560035490565b905090565b6001546002141561156e5760405163558a1e0360e11b815260040160405180910390fd5b6002600155565b60006040516323b872dd60e01b6000528460045283602452826044526020600060646000808a5af13d15601f3d11600160005114161716915060006060528060405250806116055760405162461bcd60e51b815260206004820152601460248201527f5452414e534645525f46524f4d5f4641494c45440000000000000000000000006044820152606401610619565b5050505050565b6000818152600760205260409020600201546001600160a01b03163314611646576040516342e8fb9360e11b815260040160405180910390fd5b50565b600060405163a9059cbb60e01b6000528360045282602452602060006044600080895af13d15601f3d116001600051141617169150600060605280604052508061130b5760405162461bcd60e51b815260206004820152600f60248201527f5452414e534645525f4641494c454400000000000000000000000000000000006044820152606401610619565b600080600080600085875af1905080610a0c5760405162461bcd60e51b815260206004820152601360248201527f4554485f5452414e534645525f4641494c4544000000000000000000000000006044820152606401610619565b6040805160208101859052908101839052606082811b6bffffffffffffffffffffffff191690820152600090607401604051602081830303815290604052805190602001209050436008600083815260200190815260200160002060030154106117ad5760405163d0404f8560e01b815260040160405180910390fd5b9392505050565b6117c98484846001600160a01b0385166119e7565b61130b57604051631dc23a5f60e11b815260040160405180910390fd5b600083815260086020908152604080832085518155918501516001830155840151600282018190556060850151600383015560808501516004830180546001600160a01b0392831673ffffffffffffffffffffffffffffffffffffffff199182161790915560a087015160058501805491841691831691909117905560c0870151600690940180549490921693169290921790915582549091839161188c90849061218c565b9091555050608082015182516040808501518151928352602083015285926001600160a01b0316917f2a28b2ae47b0bd4b104e7cd29b1dfa72846af8c4cfdc009da2ae29db68cb67ea910160405180910390a3505050565b600080634d2b179160e01b8360405160240161190291815260200190565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050509050600080600060206000855160208701600254617530fa92503d91506000519050809450826119975763e10bf1cc6000526004601cfd5b50505050919050565b43816003015411156119c55760405163d0404f8560e01b815260040160405180910390fd5b6002810154611646576040516331da482760e11b815260040160405180910390fd5b60008315611a23578360051b8501855b803580851160051b94855260209485185260406000209301818110611a1b57611a20565b6119f7565b50505b501492915050565b828054611a3790612094565b90600052602060002090601f016020900481019282611a595760008555611a9f565b82601f10611a7257805160ff1916838001178555611a9f565b82800160010185558215611a9f579182015b82811115611a9f578251825591602001919060010190611a84565b50611aab929150611aaf565b5090565b5b80821115611aab5760008155600101611ab0565b600060208284031215611ad657600080fd5b5035919050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff81118282101715611b1c57611b1c611add565b604052919050565b600067ffffffffffffffff821115611b3e57611b3e611add565b5060051b60200190565b6001600160a01b038116811461164657600080fd5b600082601f830112611b6e57600080fd5b81356020611b83611b7e83611b24565b611af3565b82815260059290921b84018101918181019086841115611ba257600080fd5b8286015b84811015611bc6578035611bb981611b48565b8352918301918301611ba6565b509695505050505050565b600060208284031215611be357600080fd5b813567ffffffffffffffff811115611bfa57600080fd5b611c0684828501611b5d565b949350505050565b600060208284031215611c2057600080fd5b81356117ad81611b48565b600080600080600060808688031215611c4357600080fd5b8535611c4e81611b48565b945060208601359350604086013567ffffffffffffffff80821115611c7257600080fd5b818801915088601f830112611c8657600080fd5b813581811115611c9557600080fd5b896020828501011115611ca757600080fd5b96999598505060200195606001359392505050565b60008083601f840112611cce57600080fd5b50813567ffffffffffffffff811115611ce657600080fd5b6020830191508360208260051b8501011115611d0157600080fd5b9250929050565b600080600060408486031215611d1d57600080fd5b83359250602084013567ffffffffffffffff811115611d3b57600080fd5b611d4786828701611cbc565b9497909650939450505050565b60008060008060008060c08789031215611d6d57600080fd5b863595506020870135611d7f81611b48565b945060408701359350606087013592506080870135915060a087013560ff81168114611daa57600080fd5b809150509295509295509295565b60008060408385031215611dcb57600080fd5b8235611dd681611b48565b946020939093013593505050565b600080600080600080600080600060e08a8c031215611e0257600080fd5b8935985060208a0135611e1481611b48565b975060408a0135611e2481611b48565b965060608a0135955060808a0135945060a08a013567ffffffffffffffff80821115611e4f57600080fd5b611e5b8d838e01611cbc565b909650945060c08c0135915080821115611e7457600080fd5b50611e818c828d01611cbc565b915080935050809150509295985092959850929598565b60008060208385031215611eab57600080fd5b823567ffffffffffffffff811115611ec257600080fd5b611ece85828601611cbc565b90969095509350505050565b8581526000602060a08184015286518060a085015260005b81811015611f0e5788810183015185820160c001528201611ef2565b81811115611f2057600060c083870101525b50601f01601f1916830160c0019150611f46905060408301866001600160a01b03169052565b6001600160a01b038416606083015282151560808301529695505050505050565b60008060408385031215611f7a57600080fd5b823567ffffffffffffffff80821115611f9257600080fd5b611f9e86838701611b5d565b9350602091508185013581811115611fb557600080fd5b85019050601f81018613611fc857600080fd5b8035611fd6611b7e82611b24565b81815260059190911b82018301908381019088831115611ff557600080fd5b928401925b8284101561202257833580151581146120135760008081fd5b82529284019290840190611ffa565b80955050505050509250929050565b634e487b7160e01b600052603260045260246000fd5b6020808252825182820181905260009190848201906040850190845b818110156120885783516001600160a01b031683529284019291840191600101612063565b50909695505050505050565b600181811c908216806120a857607f821691505b602082108114156120c957634e487b7160e01b600052602260045260246000fd5b50919050565b600080855481600182811c9150808316806120eb57607f831692505b602080841082141561210b57634e487b7160e01b86526022600452602486fd5b81801561211f57600181146121305761215d565b60ff1986168952848901965061215d565b60008c81526020902060005b868110156121555781548b82015290850190830161213c565b505084890196505b5098855250505050938401929092525050604001919050565b634e487b7160e01b600052601160045260246000fd5b60008282101561219e5761219e612176565b500390565b600082198211156121b6576121b6612176565b50019056fea164736f6c6343000809000a";

type P2PIXConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: P2PIXConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class P2PIX__factory extends ContractFactory {
  constructor(...args: P2PIXConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    defaultBlocks: PromiseOrValue<BigNumberish>,
    validSigners: PromiseOrValue<string>[],
    _reputation: PromiseOrValue<string>,
    tokens: PromiseOrValue<string>[],
    tokenStates: PromiseOrValue<boolean>[],
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<P2PIX> {
    return super.deploy(
      defaultBlocks,
      validSigners,
      _reputation,
      tokens,
      tokenStates,
      overrides || {}
    ) as Promise<P2PIX>;
  }
  override getDeployTransaction(
    defaultBlocks: PromiseOrValue<BigNumberish>,
    validSigners: PromiseOrValue<string>[],
    _reputation: PromiseOrValue<string>,
    tokens: PromiseOrValue<string>[],
    tokenStates: PromiseOrValue<boolean>[],
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      defaultBlocks,
      validSigners,
      _reputation,
      tokens,
      tokenStates,
      overrides || {}
    );
  }
  override attach(address: string): P2PIX {
    return super.attach(address) as P2PIX;
  }
  override connect(signer: Signer): P2PIX__factory {
    return super.connect(signer) as P2PIX__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): P2PIXInterface {
    return new utils.Interface(_abi) as P2PIXInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): P2PIX {
    return new Contract(address, _abi, signerOrProvider) as P2PIX;
  }
}
