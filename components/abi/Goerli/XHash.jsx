export const XHash_ABI = [
 {
  inputs: [],
  name: "ADDR_REVERSE_NODE",
  outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
  stateMutability: "view",
  type: "function",
 },
 {
  inputs: [{ internalType: "bytes32", name: "_label", type: "bytes32" }],
  name: "getNodeA",
  outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
  stateMutability: "pure",
  type: "function",
 },
 {
  inputs: [
   { internalType: "bytes32", name: "_node", type: "bytes32" },
   { internalType: "bytes32", name: "_label", type: "bytes32" },
  ],
  name: "getNodeB",
  outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
  stateMutability: "pure",
  type: "function",
 },
 {
  inputs: [{ internalType: "string", name: "name", type: "string" }],
  name: "namehash",
  outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
  stateMutability: "pure",
  type: "function",
 },
 {
  inputs: [{ internalType: "address", name: "_addr", type: "address" }],
  name: "sha3HexAddress",
  outputs: [{ internalType: "bytes32", name: "ret", type: "bytes32" }],
  stateMutability: "pure",
  type: "function",
 },
]
