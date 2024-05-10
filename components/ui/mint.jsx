"use client"
import { useState } from "react"
import { beginCell, Address } from "@ton/ton"
import { useTonAddress, useTonConnectUI } from "@tonconnect/ui-react"

export default function Mint() {
 const walletAddr = useTonAddress()
 const [tonConnectUI, setOptions] = useTonConnectUI()
 const [airdropAddr, setAirdropAddr] = useState("")

 const MintBySelf = () => {
  const body = beginCell().storeUint(0, 32).storeStringTail("Mint").endCell()
  const mintMessage = [
   {
    address: "EQByEfh2nHqInBWd3T9Bty5PL_RUYcaNKwNfhRkUCaK6lG6s",
    amount: "150000000",
    bounce: true,
    payload: body.toBoc().toString("base64"),
   },
  ]
  tonConnectUI.sendTransaction({
   validUntil: Math.floor(Date.now() / 1000) + 360,
   messages: mintMessage,
  })
 }

 const AirdropForOthers = () => {
  const body = beginCell()
   .storeUint(0x58cf5a67, 32)
   .storeUint(0, 64)
   .storeAddress(Address.parse(airdropAddr))
   .endCell()
  const mintMessage = [
   {
    address: "EQByEfh2nHqInBWd3T9Bty5PL_RUYcaNKwNfhRkUCaK6lG6s",
    amount: "150000000",
    bounce: true,
    payload: body.toBoc().toString("base64"),
   },
  ]
  tonConnectUI.sendTransaction({
   validUntil: Math.floor(Date.now() / 1000) + 360,
   messages: mintMessage,
  })
 }

 return (
  <>
   <div className="flex w-[60%] flex-col items-center md:mx-auto md:mt-[120px]">
    <h2 style={{ color: "#fff" }}>为自己铸造SBT(任何用户都有操作权限)</h2>
    <div
     className="purple-btn mt-2 flex w-[60%] flex-col items-center px-10 py-2"
     style={{ textAlign: "center" }}
     onClick={MintBySelf}
     disabled={!walletAddr}
    >
     {!walletAddr && <span>Please Connect Wallet First</span>}
     {walletAddr && <span>Mint 0xFar777-SBT</span>}
    </div>
   </div>
   <div className="flex w-[60%] flex-col items-center md:mx-auto md:mt-[50px]">
    <h2 style={{ color: "#fff" }}>为他人空投SBT(仅项目方有权限)</h2>
    <input
     type="text"
     placeholder="Please input receiver"
     value={airdropAddr}
     onChange={(e) => setAirdropAddr(e.target.value)}
     className="mt-2 rounded-md border border-gray-300 px-4 py-2"
     style={{ width: "100%" }}
    />
    <div
     className="purple-btn mt-2 flex w-[60%] flex-col items-center px-10 py-2"
     style={{ textAlign: "center" }}
     onClick={AirdropForOthers}
     disabled={!walletAddr}
    >
     {!walletAddr && <span>Please Connect Wallet First</span>}
     {walletAddr && <span>Airdrop 0xFar777-SBT</span>}
    </div>
   </div>
  </>
 )
}
