"use client"

import PosterAirdrop from "@/public/images/poster-airdrop.png"
import Image from "next/image"
import Link from "next/link"
import Introduce from "@/components/ui/Introduce"

export default function Home() {
 return (
  <>
   <div className="mt-6 flex max-w-7xl flex-col px-4 sm:px-6 sm:pt-8 md:mx-auto md:mb-[45px] md:flex-row md:pt-10">
    <Link
     //  href="/group"
     href="/airdrop"
     className="green-pink-gradient shadow-card mt-10 rounded-2xl p-2"
    >
     <div className="min-h-50 flex flex flex-row flex-col items-center justify-center justify-evenly rounded-2xl bg-black px-1 py-1">
      <Image src={PosterAirdrop} alt="web-development" className="object-contain" />
     </div>
    </Link>
   </div>
   <Introduce />
  </>
 )
}
