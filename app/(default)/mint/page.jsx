// "use client"
// import { useState, useEffect, useRef } from "react"
// import RegisterForm from "@/components/RegisterForm"
// import DomainSearch from "@/components/DomainSearch"
// import InfoBox from "@/components/InfoBox"
// import ReserveBox from "@/components/ReserveBox"
// import StarsCanvas from "@/components/canvas/Stars"
// import { useSearchParams } from "next/navigation"
// import { useContractRead } from "wagmi"
// import {
//  XRegistry_Contract,
//  XRegistrarController_Contract,
//  XReserveDomain_Contract,
//  XHash_Contract,
// } from "../../../components/contract-config/Polygon"
// import XImagesPhone from "@/public/images/XimagesPhone.png"
// import XImagesPc from "@/public/images/XimagesPc.png"
// import Image from "next/image"
// import Link from "next/link"

// /**
//  * Register
//  * @returns
//  */
// export default function Register() {
//  const [Name, setName] = useState("")
//  const [isMobile, setIsMobile] = useState(false)
//  const [code, setCode] = useState("")
//  const searchParams = useSearchParams()
//  const search = searchParams.get("search")
//  const domainSearchRef = useRef(null)
//  const handleValid = (data) => {
//   console.log("Data from child:", data)
//   setName(data)
//  }

//  useEffect(() => {
//   console.log("jjjjjjjjjjjjjj")
//   console.log(window.location.hash.substring(1))
//   console.log("jjjjjjjjjjjjjj")
//   setCode(window.location.hash.substring(1))
//   if (search) {
//    setName(search)
//    if (domainSearchRef.current) domainSearchRef.current.setSearchVal(search)
//   }
//   const handleResize = () => {
//    setIsMobile(window.innerWidth <= 768)
//   }
//   handleResize()
//   window.addEventListener("resize", handleResize)
//   return () => {
//    window.removeEventListener("resize", handleResize)
//   }
//  }, [])

//  const {
//   data: namehash,
//   isError_Hash,
//   isLoading_Hash,
//  } = useContractRead({
//   ...XHash_Contract,
//   functionName: "namehash",
//   args: [Name],
//   enabled: Boolean(Name),
//  })

//  // 检测域名输入是否合法
//  const {
//   data: validName,
//   isError,
//   isLoading,
//  } = useContractRead({
//   ...XRegistrarController_Contract,
//   functionName: "valid",
//   args: [Name],
//   enabled: Boolean(Name),
//  })

//  // 检测是否为保留域

//  const {
//   data: reserveName,
//   isError_Reserve,
//   isLoading_Reserve,
//  } = useContractRead({
//   ...XReserveDomain_Contract,
//   functionName: "isReserve",
//   args: [Name],
//   enabled: Boolean(Name),
//  })

//  // 检测是否为存在域
//  const {
//   data: existName,
//   isError_Exist,
//   isLoading_Exist,
//  } = useContractRead({
//   ...XRegistry_Contract,
//   functionName: "recordExists",
//   args: [namehash],
//   enabled: Boolean(namehash),
//  })
//  console.log("UUUUUUUUU")
//  console.log(namehash)
//  console.log(existName)
//  console.log("UUUUUUUUU")
//  return (
//   <main className="mx-auto flex h-auto max-w-7xl flex-col items-center justify-center">
//    {/* <DomainSearch ref={domainSearchRef} btnShow={false} name={handleValid} /> */}
//    {/* <RegisterForm name={Name} /> */}
//    {/* {!existName && !reserveName && validName && <RegisterForm name={Name} />}
//    {Name !== "" && existName && <InfoBox name={Name} />}
//    {(reserveName || Name.length <= 3) && <ReserveBox name={Name} />} */}
//    <DomainSearch ref={domainSearchRef} btnShow={false} name={handleValid} />
//    {/* <RegisterForm name={Name} /> */}
//    {!existName && !reserveName && validName && <RegisterForm name={Name} code={code} />}
//    {Name !== "" && existName && <InfoBox name={Name} />}
//    {(reserveName || Name.length <= 3) && <ReserveBox name={Name} />}
//    {/* <div
//     className="relative"
//     style={{
//      height: "auto",
//      width: "100vw",
//     }}
//    >
//     <div
//      style={{
//       zIndex: "100",
//       width: isMobile ? "80%" : "auto",
//       margin: isMobile ? "100px 10% 0% 10%" : "150px 20% 0% 20%",
//       backgroundColor: "#fff5",
//       fontSize: isMobile ? "16px" : "26px",
//       textAlign: "center",
//       justifyContent: "center",
//       padding: "5%",
//       alignItems: "center",
//      }}
//     >
//      <div style={{ color: "red" }}>
//       The first round of airdrops has started, please go to claim your x domain
//      </div>
//      <Link href="/airdrop">
//       <button className="purple-btn m-auto mb-2 px-3 py-1" style={{ margin: "2% 0 2% 0" }}>
//        Airdrop
//       </button>
//      </Link>
//      <div style={{ display: "flex", justifyContent: "center" }}>
//       {isMobile && <Image src={XImagesPhone} alt="" />}
//       {!isMobile && <Image src={XImagesPc} alt="" />}
//      </div>
//     </div>
//     <div style={{ zIndex: "99", height: "50vh", width: "100vw" }}>
//      <StarsCanvas />
//     </div>
//    </div> */}
//   </main>
//  )
// }
