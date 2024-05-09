export const XAirdrop_ABI = [
 {
  inputs: [{ internalType: "address", name: "target", type: "address" }],
  name: "AddressEmptyCode",
  type: "error",
 },
 {
  inputs: [{ internalType: "address", name: "implementation", type: "address" }],
  name: "ERC1967InvalidImplementation",
  type: "error",
 },
 { inputs: [], name: "ERC1967NonPayable", type: "error" },
 { inputs: [], name: "FailedInnerCall", type: "error" },
 { inputs: [], name: "InvalidInitialization", type: "error" },
 { inputs: [], name: "NotInitializing", type: "error" },
 {
  inputs: [{ internalType: "address", name: "owner", type: "address" }],
  name: "OwnableInvalidOwner",
  type: "error",
 },
 {
  inputs: [{ internalType: "address", name: "account", type: "address" }],
  name: "OwnableUnauthorizedAccount",
  type: "error",
 },
 { inputs: [], name: "UUPSUnauthorizedCallContext", type: "error" },
 {
  inputs: [{ internalType: "bytes32", name: "slot", type: "bytes32" }],
  name: "UUPSUnsupportedProxiableUUID",
  type: "error",
 },
 {
  anonymous: false,
  inputs: [{ indexed: false, internalType: "uint64", name: "version", type: "uint64" }],
  name: "Initialized",
  type: "event",
 },
 {
  anonymous: false,
  inputs: [
   { indexed: true, internalType: "address", name: "previousOwner", type: "address" },
   { indexed: true, internalType: "address", name: "newOwner", type: "address" },
  ],
  name: "OwnershipTransferred",
  type: "event",
 },
 {
  anonymous: false,
  inputs: [{ indexed: true, internalType: "address", name: "implementation", type: "address" }],
  name: "Upgraded",
  type: "event",
 },
 {
  inputs: [],
  name: "RC",
  outputs: [{ internalType: "contract IRegisterController", name: "", type: "address" }],
  stateMutability: "view",
  type: "function",
 },
 {
  inputs: [],
  name: "UPGRADE_INTERFACE_VERSION",
  outputs: [{ internalType: "string", name: "", type: "string" }],
  stateMutability: "view",
  type: "function",
 },
 {
  inputs: [
   { internalType: "string", name: "name", type: "string" },
   { internalType: "address", name: "owner", type: "address" },
   { internalType: "bytes32", name: "secret", type: "bytes32" },
   { internalType: "address", name: "resolver", type: "address" },
   { internalType: "bytes[]", name: "data", type: "bytes[]" },
   { internalType: "bool", name: "reverseRecord", type: "bool" },
   { internalType: "uint16", name: "ownerControlledFuses", type: "uint16" },
   { internalType: "string", name: "URI", type: "string" },
  ],
  name: "claimAirdrop",
  outputs: [],
  stateMutability: "nonpayable",
  type: "function",
 },
 {
  inputs: [
   { internalType: "address", name: "", type: "address" },
   { internalType: "uint256", name: "", type: "uint256" },
  ],
  name: "infoByState",
  outputs: [
   { internalType: "uint256", name: "len_3", type: "uint256" },
   { internalType: "uint256", name: "len_4", type: "uint256" },
   { internalType: "uint256", name: "len_5", type: "uint256" },
   { internalType: "uint256", name: "len_6", type: "uint256" },
  ],
  stateMutability: "view",
  type: "function",
 },
 {
  inputs: [{ internalType: "uint256", name: "_lock_", type: "uint256" }],
  name: "initialize",
  outputs: [],
  stateMutability: "nonpayable",
  type: "function",
 },
 {
  inputs: [],
  name: "owner",
  outputs: [{ internalType: "address", name: "", type: "address" }],
  stateMutability: "view",
  type: "function",
 },
 {
  inputs: [],
  name: "proxiableUUID",
  outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
  stateMutability: "view",
  type: "function",
 },
 {
  inputs: [],
  name: "renounceOwnership",
  outputs: [],
  stateMutability: "nonpayable",
  type: "function",
 },
 {
  inputs: [],
  name: "round",
  outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
  stateMutability: "view",
  type: "function",
 },
 {
  inputs: [
   { internalType: "address", name: "_addr", type: "address" },
   { internalType: "uint256", name: "_round", type: "uint256" },
   { internalType: "uint256", name: "_len", type: "uint256" },
  ],
  name: "setAirdropInfo",
  outputs: [],
  stateMutability: "nonpayable",
  type: "function",
 },
 {
  inputs: [
   { internalType: "address[]", name: "_addr", type: "address[]" },
   { internalType: "uint256", name: "_round", type: "uint256" },
   { internalType: "uint256", name: "_len", type: "uint256" },
  ],
  name: "setMultiAirdropInfo",
  outputs: [],
  stateMutability: "nonpayable",
  type: "function",
 },
 {
  inputs: [{ internalType: "uint256", name: "_round", type: "uint256" }],
  name: "setRound",
  outputs: [],
  stateMutability: "nonpayable",
  type: "function",
 },
 {
  inputs: [
   { internalType: "uint256", name: "_round", type: "uint256" },
   { internalType: "uint256", name: "_start", type: "uint256" },
  ],
  name: "setStartTime",
  outputs: [],
  stateMutability: "nonpayable",
  type: "function",
 },
 {
  inputs: [{ internalType: "contract IRegisterController", name: "addr", type: "address" }],
  name: "setTrustedRegisterController",
  outputs: [],
  stateMutability: "nonpayable",
  type: "function",
 },
 {
  inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
  name: "startAirdrop",
  outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
  stateMutability: "view",
  type: "function",
 },
 {
  inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
  name: "transferOwnership",
  outputs: [],
  stateMutability: "nonpayable",
  type: "function",
 },
 {
  inputs: [
   { internalType: "address", name: "newImplementation", type: "address" },
   { internalType: "bytes", name: "data", type: "bytes" },
  ],
  name: "upgradeToAndCall",
  outputs: [],
  stateMutability: "payable",
  type: "function",
 },
]
