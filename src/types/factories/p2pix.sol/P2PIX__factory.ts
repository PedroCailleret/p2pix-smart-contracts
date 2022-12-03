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
        internalType: "uint256",
        name: "pixTimestamp",
        type: "uint256",
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
  "0x60806040526001805560405162002814380380620028148339810160408190526200002a916200049d565b600080546001600160a01b031916339081178255604051909182917f8292fce18fa69edf4db7b94ea2e58241df0ae57f97e0a6c9b29067028bf92d76908290a3506200007685620000a3565b620000818362000133565b6200008c84620001bd565b620000988282620002a1565b505050505062000620565b6000546001600160a01b03163314620000f25760405162461bcd60e51b815260206004820152600c60248201526b15539055551213d49256915160a21b60448201526064015b60405180910390fd5b806004557f70fa43ca70216ad905ade86b9e650a691b2ce5a01980d0a81bdd8324141b8511816040516200012891815260200190565b60405180910390a150565b6000546001600160a01b031633146200017e5760405162461bcd60e51b815260206004820152600c60248201526b15539055551213d49256915160a21b6044820152606401620000e9565b60028190556040516001600160a01b03821681527fe127cf589a3879da0156d4a24f43b44f65cfa3570de594806b0bfa2fcf06884f9060200162000128565b6000546001600160a01b03163314620002085760405162461bcd60e51b815260206004820152600c60248201526b15539055551213d49256915160a21b6044820152606401620000e9565b80516000905b808210156200026e57600062000246848481518110620002325762000232620005bb565b60200260200101516200038760201b60201c565b6000908152600660205260409020805460ff191660019081179091559290920191506200020e565b50507f14a422d2412784a5749d03da98921fe468c98577b767851389a9f58ea5a363d781604051620001289190620005d1565b6000546001600160a01b03163314620002ec5760405162461bcd60e51b815260206004820152600c60248201526b15539055551213d49256915160a21b6044820152606401620000e9565b815180620003025763df9578836000526004601cfd5b81518114620003195763ff633a386000526004601cfd5b60208301602083016020830282015b8083146200037f578251600052600b60205260406000208251815550815183517f5d6e86e5341d57a92c49934296c51542a25015c9b1782a1c2722a940131c3d9a600080a360208301925060208201915062000328565b505050505050565b600c1b611000600160ac1b031690565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f191681016001600160401b0381118282101715620003d857620003d862000397565b604052919050565b60006001600160401b03821115620003fc57620003fc62000397565b5060051b60200190565b6001600160a01b03811681146200041c57600080fd5b50565b600082601f8301126200043157600080fd5b815160206200044a6200044483620003e0565b620003ad565b82815260059290921b840181019181810190868411156200046a57600080fd5b8286015b8481101562000492578051620004848162000406565b83529183019183016200046e565b509695505050505050565b600080600080600060a08688031215620004b657600080fd5b8551602080880151919650906001600160401b0380821115620004d857600080fd5b620004e68a838b016200041f565b965060408901519150620004fa8262000406565b6060890151919550808211156200051057600080fd5b6200051e8a838b016200041f565b945060808901519150808211156200053557600080fd5b508701601f810189136200054857600080fd5b8051620005596200044482620003e0565b81815260059190911b8201830190838101908b8311156200057957600080fd5b928401925b82841015620005a95783518015158114620005995760008081fd5b825292840192908401906200057e565b80955050505050509295509295909350565b634e487b7160e01b600052603260045260246000fd5b6020808252825182820181905260009190848201906040850190845b81811015620006145783516001600160a01b031683529284019291840191600101620005ed565b50909695505050505050565b6121e480620006306000396000f3fe60806040526004361061018f5760003560e01c806377cd38a4116100d65780638e2a3d361161007f578063c52164c611610059578063c52164c614610539578063d6e8b97314610559578063f7d0e04b1461057957600080fd5b80638e2a3d36146104c25780639872dbfe146104f357806398a268711461050957600080fd5b80638652b37e116100b05780638652b37e1461044a5780638da5cb5b1461046a5780638e2749d6146104a257600080fd5b806377cd38a4146103dd5780637f94f65d1461040a5780638642b5c31461042a57600080fd5b806336317972116101385780635fd8c710116101125780635fd8c7101461036857806369cc6af41461037d57806372fada5c146103bd57600080fd5b806336317972146102fd5780634b2ae9801461031d578063574983c81461034857600080fd5b806316d722401161016957806316d722401461021d57806329cc7d10146102c65780632dfdf0b5146102e657600080fd5b8063049373201461019b5780630d2a2d44146101db57806313af4035146101fd57600080fd5b3661019657005b600080fd5b3480156101a757600080fd5b506101c86101b6366004611ae0565b60056020526000908152604090205481565b6040519081526020015b60405180910390f35b3480156101e757600080fd5b506101fb6101f6366004611bed565b610599565b005b34801561020957600080fd5b506101fb610218366004611c2a565b61068a565b34801561022957600080fd5b50610282610238366004611ae0565b600860205260009081526040902080546001820154600283015460038401546004850154600586015460069096015494959394929391926001600160a01b03918216928216911687565b6040805197885260208801969096529486019390935260608501919091526001600160a01b03908116608085015290811660a08401521660c082015260e0016101d2565b3480156102d257600080fd5b506101c86102e1366004611c47565b61071e565b3480156102f257600080fd5b506003546101c89081565b34801561030957600080fd5b506101fb610318366004611d24565b6108fc565b34801561032957600080fd5b506101c8610338366004611c2a565b600c1b611000600160ac1b031690565b34801561035457600080fd5b506101fb610363366004611ae0565b6109bc565b34801561037457600080fd5b506101fb610a3a565b34801561038957600080fd5b506103ad610398366004611c2a565b600b6020526000908152604090205460ff1681565b60405190151581526020016101d2565b3480156103c957600080fd5b506101fb6103d8366004611ae0565b610ac4565b3480156103e957600080fd5b506101c86103f8366004611ae0565b600a6020526000908152604090205481565b34801561041657600080fd5b506101fb610425366004611d70565b610b4c565b34801561043657600080fd5b506101fb610445366004611d9c565b610b97565b34801561045657600080fd5b506101c8610465366004611e00565b610f65565b34801561047657600080fd5b5060005461048a906001600160a01b031681565b6040516001600160a01b0390911681526020016101d2565b3480156104ae57600080fd5b506101fb6104bd366004611eb4565b6112a7565b3480156104ce57600080fd5b506104e26104dd366004611ae0565b6113ff565b6040516101d2959493929190611ef6565b3480156104ff57600080fd5b506101c860045481565b34801561051557600080fd5b506103ad610524366004611ae0565b60066020526000908152604090205460ff1681565b34801561054557600080fd5b5060025461048a906001600160a01b031681565b34801561056557600080fd5b506101fb610574366004611f83565b6114c9565b34801561058557600080fd5b506101fb610594366004611c2a565b6115a1565b6000546001600160a01b031633146105e75760405162461bcd60e51b815260206004820152600c60248201526b15539055551213d49256915160a21b60448201526064015b60405180910390fd5b80516000905b8082101561064e57600061062784848151811061060c5761060c61204d565b6020026020010151611000600160ac1b03600c9190911b1690565b6000908152600660205260409020805460ff191660019081179091559290920191506105ed565b50507f14a422d2412784a5749d03da98921fe468c98577b767851389a9f58ea5a363d78160405161067f9190612063565b60405180910390a150565b6000546001600160a01b031633146106d35760405162461bcd60e51b815260206004820152600c60248201526b15539055551213d49256915160a21b60448201526064016105de565b600080546001600160a01b0319166001600160a01b0383169081178255604051909133917f8292fce18fa69edf4db7b94ea2e58241df0ae57f97e0a6c9b29067028bf92d769190a350565b6001600160a01b0385166000908152600b6020526040812054869060ff1661075957604051630abc194760e11b815260040160405180910390fd5b610761611628565b915060006040518060a0016040528088815260200187878080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152505050908252503360208201526001600160a01b038a166040820152600160609091015290506107d6611678565b83156107e6576107e63385610b4c565b6000838152600760209081526040909120825181558183015180518493610814926001850192910190611a47565b5060408201516002820180546001600160a01b039283166001600160a01b03199091161790556060830151600392830180546080909501511515600160a01b027fffffffffffffffffffffff0000000000000000000000000000000000000000009095169190921617929092179091556108919080546001019055565b61089d8233308a6116a3565b6108a660018055565b604080518481526001600160a01b038a16602082015290810188905233907f25ac57b911b0f66b64c294827f539545fbc3ddd002cafab117776274f3241e4c9060600160405180910390a2505095945050505050565b610904611678565b61090d8361173a565b61091782826112a7565b60008381526007602052604090206003810154600160a01b900460ff161515600114156109475761094784610ac4565b600381015481546000835560028301546001600160a01b03928316926109709184911683611777565b604080518781526020810183905233917f7719804546c0185709e60c90d164447ff251a5ba29af0216faa921350f6bebf7910160405180910390a25050506109b760018055565b505050565b6000546001600160a01b03163314610a055760405162461bcd60e51b815260206004820152600c60248201526b15539055551213d49256915160a21b60448201526064016105de565b806004557f70fa43ca70216ad905ade86b9e650a691b2ce5a01980d0a81bdd8324141b85118160405161067f91815260200190565b6000546001600160a01b03163314610a835760405162461bcd60e51b815260206004820152600c60248201526b15539055551213d49256915160a21b60448201526064016105de565b47610a8e3382611803565b60408051338152602081018390527feaff4b37086828766ad3268786972c0cd24259d4c87a80f9d3963a3c3d999b0d910161067f565b610acd8161173a565b6000818152600760209081526040918290206003810180547fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff1690556002015491518381526001600160a01b03909216917fb4d98b272597e828d9b172c0d44390d5b267040e918088eac8a0a0fadcb81c70910160405180910390a250565b6001600160a01b038216331415610b7e57600c9190911b611000600160ac1b03166000908152600a6020526040902055565b6040516342e8fb9360e11b815260040160405180910390fd5b610b9f611678565b6000868152600860205260409020600381015443101580610bc257506002810154155b15610be0576040516331da482760e11b815260040160405180910390fd5b8054600090815260076020908152604080832060028501549151909392610c1092600186019290918b91016120eb565b604051602081830303815290604052805190602001209050600081604051602001610c6791907f19457468657265756d205369676e6564204d6573736167653a0a3332000000008152601c810191909152603c0190565b60408051601f1981840301815291815281516020928301206000858152600990935291205490915060ff16151560011415610cb557604051637a48537560e11b815260040160405180910390fd5b6040805160008082526020820180845284905260ff8816928201929092526060810189905260808101889052610d299060019060a0016020604051602081039080840390855afa158015610d0d573d6000803e3d6000fd5b5050604051601f190151600c1b611000600160ac1b0316919050565b60008181526006602052604090205490915060ff16610d5b57604051632057875960e21b815260040160405180910390fd5b6003840154600186015460028701546001600160a01b0390921691600091610d82916121a8565b60006002890181905560038901819055868152600960205260409020805460ff191660011790556006880154909150336001600160a01b0390911614610e3d576001870154611000600160ac1b0333600c1b1660009081526005602052604081208054909190610df39084906121bf565b909155505060028701546006880154600590600090600c1b611000600160ac1b031681526020019081526020016000206000828254610e3291906121bf565b90915550610e839050565b86600201548760010154610e5191906121bf565b611000600160ac1b0333600c1b1660009081526005602052604081208054909190610e7d9084906121bf565b90915550505b6004870154610e9d9083906001600160a01b031683611777565b600187015415610f095760058701546001600160a01b038d8116911614610efa576005870154600180890154610ee29285926001600160a01b0390911691901c611777565b610ef5828d60018a60010154901c611777565b610f09565b610f09828d8960010154611777565b60048701546040518e81526001600160a01b03909116907f5e420822d2f7281fdc4b763c62c8b7874bf22108a35efe93144d79296aacc67d9060200160405180910390a250505050505050610f5d60018055565b505050505050565b6000610f6f611678565b610f7983836112a7565b60008a81526007602052604090206003810154600160a01b900460ff16610fb357604051635972996f60e11b815260040160405180910390fd5b8054871115610fd5576040516308aeed0f60e21b815260040160405180910390fd5b610fe08b888c61185e565b915060006040518060e001604052808d81526020018a81526020018981526020016004544361100f91906121bf565b81526001600160a01b03808e1660208301528c1660408201523360609091015290508515611150576002820154600c1b611000600160ac1b03166000908152600a60205260409020546110669088908890336118e2565b60008381526008602090815260408083208451815591840151600183015583015160028201556060830151600382015560808301516004820180546001600160a01b039283166001600160a01b03199182161790915560a085015160058401805491841691831691909117905560c0850151600690930180549390921692169190911790558254899184916110fc9084906121a8565b9091555050805160408051918252602082018a905284916001600160a01b038e16917f2a28b2ae47b0bd4b104e7cd29b1dfa72846af8c4cfdc009da2ae29db68cb67ea910160405180910390a35050611291565b611000600160ac1b0333600c1b166000908152600560205260408120549061117782611914565b9050808360400151111561119e57604051630e0c7c2360e11b815260040160405180910390fd5b60008581526008602090815260408083208651815591860151600183015585015160028201556060850151600382015560808501516004820180546001600160a01b039283166001600160a01b03199182161790915560a087015160058401805491841691831691909117905560c08701516006909301805493909216921691909117905584548b9186916112349084906121a8565b92505081905550848d6001600160a01b03167f2a28b2ae47b0bd4b104e7cd29b1dfa72846af8c4cfdc009da2ae29db68cb67ea85600001518d604051611284929190918252602082015260400190565b60405180910390a3505050505b61129a60018055565b9998505050505050505050565b6000815b808210156113e3576000600860008686868181106112cb576112cb61204d565b90506020020135815260200190815260200160002090506112eb816119d0565b60028101548154600090815260076020526040812080549091906113109084906121bf565b90915550506000600282018190556006820154600c1b611000600160ac1b031660008181526005602052604090205490915060011c6064811161136457600082815260056020526040902060649055611376565b60008281526005602052604090208190555b60048301546001600160a01b03167f67e089478e21dd12c98e69331c4152f6c9b2038b91e0f28268ffa01558c0b4ff8888888181106113b7576113b761204d565b905060200201356040516113cd91815260200190565b60405180910390a28460010194505050506112ab565b808210156113f95763dfb035c96000526004601cfd5b50505050565b60076020526000908152604090208054600182018054919291611421906120b0565b80601f016020809104026020016040519081016040528092919081815260200182805461144d906120b0565b801561149a5780601f1061146f5761010080835404028352916020019161149a565b820191906000526020600020905b81548152906001019060200180831161147d57829003601f168201915b50505050600283015460039093015491926001600160a01b03908116929081169150600160a01b900460ff1685565b6000546001600160a01b031633146115125760405162461bcd60e51b815260206004820152600c60248201526b15539055551213d49256915160a21b60448201526064016105de565b8151806115275763df9578836000526004601cfd5b8151811461153d5763ff633a386000526004601cfd5b60208301602083016020830282015b808314610f5d578251600052600b60205260406000208251815550815183517f5d6e86e5341d57a92c49934296c51542a25015c9b1782a1c2722a940131c3d9a600080a360208301925060208201915061154c565b6000546001600160a01b031633146115ea5760405162461bcd60e51b815260206004820152600c60248201526b15539055551213d49256915160a21b60448201526064016105de565b60028190556040516001600160a01b03821681527fe127cf589a3879da0156d4a24f43b44f65cfa3570de594806b0bfa2fcf06884f9060200161067f565b600061163360035490565b600081815260076020526040902060030154909150600160a01b900460ff161515600114156116755760405163c44bd76560e01b815260040160405180910390fd5b90565b6001546002141561169c5760405163558a1e0360e11b815260040160405180910390fd5b6002600155565b60006040516323b872dd60e01b6000528460045283602452826044526020600060646000808a5af13d15601f3d11600160005114161716915060006060528060405250806117335760405162461bcd60e51b815260206004820152601460248201527f5452414e534645525f46524f4d5f4641494c454400000000000000000000000060448201526064016105de565b5050505050565b6000818152600760205260409020600201546001600160a01b03163314611774576040516342e8fb9360e11b815260040160405180910390fd5b50565b600060405163a9059cbb60e01b6000528360045282602452602060006044600080895af13d15601f3d11600160005114161716915060006060528060405250806113f95760405162461bcd60e51b815260206004820152600f60248201527f5452414e534645525f4641494c4544000000000000000000000000000000000060448201526064016105de565b600080600080600085875af19050806109b75760405162461bcd60e51b815260206004820152601360248201527f4554485f5452414e534645525f4641494c45440000000000000000000000000060448201526064016105de565b6040805160208101859052908101839052606082811b6bffffffffffffffffffffffff191690820152600090607401604051602081830303815290604052805190602001209050436008600083815260200190815260200160002060030154106118db5760405163d0404f8560e01b815260040160405180910390fd5b9392505050565b6118f78484846001600160a01b038516611a03565b6113f957604051631dc23a5f60e11b815260040160405180910390fd5b600080634d2b179160e01b8360405160240161193291815260200190565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050509050600080600060206000855160208701600254617530fa92503d91506000519050809450826119c75763e10bf1cc6000526004601cfd5b50505050919050565b4381600301541015806119e557506002810154155b156117745760405163d0404f8560e01b815260040160405180910390fd5b60008315611a3f578360051b8501855b803580851160051b94855260209485185260406000209301818110611a3757611a3c565b611a13565b50505b501492915050565b828054611a53906120b0565b90600052602060002090601f016020900481019282611a755760008555611abb565b82601f10611a8e57805160ff1916838001178555611abb565b82800160010185558215611abb579182015b82811115611abb578251825591602001919060010190611aa0565b50611ac7929150611acb565b5090565b5b80821115611ac75760008155600101611acc565b600060208284031215611af257600080fd5b5035919050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff81118282101715611b3857611b38611af9565b604052919050565b600067ffffffffffffffff821115611b5a57611b5a611af9565b5060051b60200190565b6001600160a01b038116811461177457600080fd5b600082601f830112611b8a57600080fd5b81356020611b9f611b9a83611b40565b611b0f565b82815260059290921b84018101918181019086841115611bbe57600080fd5b8286015b84811015611be2578035611bd581611b64565b8352918301918301611bc2565b509695505050505050565b600060208284031215611bff57600080fd5b813567ffffffffffffffff811115611c1657600080fd5b611c2284828501611b79565b949350505050565b600060208284031215611c3c57600080fd5b81356118db81611b64565b600080600080600060808688031215611c5f57600080fd5b8535611c6a81611b64565b945060208601359350604086013567ffffffffffffffff80821115611c8e57600080fd5b818801915088601f830112611ca257600080fd5b813581811115611cb157600080fd5b896020828501011115611cc357600080fd5b96999598505060200195606001359392505050565b60008083601f840112611cea57600080fd5b50813567ffffffffffffffff811115611d0257600080fd5b6020830191508360208260051b8501011115611d1d57600080fd5b9250929050565b600080600060408486031215611d3957600080fd5b83359250602084013567ffffffffffffffff811115611d5757600080fd5b611d6386828701611cd8565b9497909650939450505050565b60008060408385031215611d8357600080fd5b8235611d8e81611b64565b946020939093013593505050565b60008060008060008060c08789031215611db557600080fd5b863595506020870135611dc781611b64565b945060408701359350606087013592506080870135915060a087013560ff81168114611df257600080fd5b809150509295509295509295565b600080600080600080600080600060e08a8c031215611e1e57600080fd5b8935985060208a0135611e3081611b64565b975060408a0135611e4081611b64565b965060608a0135955060808a0135945060a08a013567ffffffffffffffff80821115611e6b57600080fd5b611e778d838e01611cd8565b909650945060c08c0135915080821115611e9057600080fd5b50611e9d8c828d01611cd8565b915080935050809150509295985092959850929598565b60008060208385031215611ec757600080fd5b823567ffffffffffffffff811115611ede57600080fd5b611eea85828601611cd8565b90969095509350505050565b8581526000602060a08184015286518060a085015260005b81811015611f2a5788810183015185820160c001528201611f0e565b81811115611f3c57600060c083870101525b50601f01601f1916830160c0019150611f62905060408301866001600160a01b03169052565b6001600160a01b038416606083015282151560808301529695505050505050565b60008060408385031215611f9657600080fd5b823567ffffffffffffffff80821115611fae57600080fd5b611fba86838701611b79565b9350602091508185013581811115611fd157600080fd5b85019050601f81018613611fe457600080fd5b8035611ff2611b9a82611b40565b81815260059190911b8201830190838101908883111561201157600080fd5b928401925b8284101561203e578335801515811461202f5760008081fd5b82529284019290840190612016565b80955050505050509250929050565b634e487b7160e01b600052603260045260246000fd5b6020808252825182820181905260009190848201906040850190845b818110156120a45783516001600160a01b03168352928401929184019160010161207f565b50909695505050505050565b600181811c908216806120c457607f821691505b602082108114156120e557634e487b7160e01b600052602260045260246000fd5b50919050565b600080855481600182811c91508083168061210757607f831692505b602080841082141561212757634e487b7160e01b86526022600452602486fd5b81801561213b576001811461214c57612179565b60ff19861689528489019650612179565b60008c81526020902060005b868110156121715781548b820152908501908301612158565b505084890196505b5098855250505050938401929092525050604001919050565b634e487b7160e01b600052601160045260246000fd5b6000828210156121ba576121ba612192565b500390565b600082198211156121d2576121d2612192565b50019056fea164736f6c6343000809000a";

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
