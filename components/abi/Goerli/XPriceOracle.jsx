export const XPriceOracle_ABI = [
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
  inputs: [{ indexed: false, internalType: "uint256[]", name: "prices", type: "uint256[]" }],
  name: "RentPriceChanged",
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
  name: "UPGRADE_INTERFACE_VERSION",
  outputs: [{ internalType: "string", name: "", type: "string" }],
  stateMutability: "view",
  type: "function",
 },
 {
  inputs: [
   { internalType: "contract AggregatorInterface", name: "_usdOracle", type: "address" },
   { internalType: "uint256[]", name: "_Prices", type: "uint256[]" },
  ],
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
  inputs: [{ internalType: "string", name: "name", type: "string" }],
  name: "price",
  outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
  stateMutability: "view",
  type: "function",
 },
 {
  inputs: [],
  name: "price3Letter",
  outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
  stateMutability: "view",
  type: "function",
 },
 {
  inputs: [],
  name: "price4Letter",
  outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
  stateMutability: "view",
  type: "function",
 },
 {
  inputs: [],
  name: "price5Letter",
  outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
  stateMutability: "view",
  type: "function",
 },
 {
  inputs: [],
  name: "price6Letter",
  outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
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
  inputs: [{ internalType: "bytes4", name: "interfaceID", type: "bytes4" }],
  name: "supportsInterface",
  outputs: [{ internalType: "bool", name: "", type: "bool" }],
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
 {
  inputs: [],
  name: "usdOracle",
  outputs: [{ internalType: "contract AggregatorInterface", name: "", type: "address" }],
  stateMutability: "view",
  type: "function",
 },
]
