"use client"

import { useEffect } from "react"
import Header from "@/components/ui/header"
import AOS from "aos"
import "aos/dist/aos.css"

export default function DefaultLayout({ children }) {
 useEffect(() => {
  AOS.init({
   once: true,
   disable: "phone",
   duration: 700,
   easing: "ease-out-cubic",
  })
 })

 return (
  <>
   <Header />
   <main className="grow">{children}</main>
  </>
 )
}
