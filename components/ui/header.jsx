"use client"

import { useState, useEffect } from "react"
import { TonConnectButton } from "@tonconnect/ui-react"
import Link from "next/link"

export default function Header() {
 const [top, setTop] = useState(true)

 const scrollHandler = () => {
  window.pageYOffset > 10 ? setTop(false) : setTop(true)
 }
    
 useEffect(() => {
  scrollHandler()
  window.addEventListener("scroll", scrollHandler)
  return () => window.removeEventListener("scroll", scrollHandler)
 }, [top])

 return (
  <header
   className={`fixed z-30 w-full transition duration-300 ease-in-out md:bg-opacity-90 ${
    !top ? "bg-black shadow-md shadow-gray-600 backdrop-blur-sm" : ""
   }`}
  >
   <div className="mx-auto max-w-7xl px-5 sm:px-6">
    <div className="flex h-16 items-center justify-between md:h-20">
     <Link href="/" className="mr-2 flex shrink-0 items-center" aria-label="Cruip">
      <div className="px-5 text-lg font-bold text-white">TON | SBT</div>
     </Link>
     <nav className="hidden grow items-center justify-end md:flex md:grow">
      <ul className="flex flex-wrap items-center justify-end">
       <li>
        <Link
         href="/register"
         className="flex items-center px-5 py-3 font-medium text-white transition duration-150 ease-in-out hover:text-gray-200"
        >
         mint
        </Link>
       </li>
      </ul>
     </nav>
     <TonConnectButton />
    </div>
   </div>
  </header>
 )
}
