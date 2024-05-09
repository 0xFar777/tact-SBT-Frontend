// "use client"

// import React, { useState, useEffect, useRef } from "react"
// import { NFTStorage, File } from "nft.storage"
// import { ethers } from "ethers"
// import html2canvas from "html2canvas"
// import Overview1 from "@/public/images/Overview1.png"
// import Overview2 from "@/public/images/Overview2.png"
// import Image from "next/image"
// import Modal from "@/components/modal"
// import CloseIcon from "@/components/ui/closeIcon"
// import PolygonIcon from "@/public/images/polygonIcon.png"
// import Discord from "@/public/images/Discord.png"
// import DNS from "@/public/images/DNS.png"
// import Website from "@/public/images/Website.png"
// import Github from "@/public/images/Github.png"
// import Instagram from "@/public/images/Instagram.png"
// import IPFS from "@/public/images/IPFS.png"
// import Email from "@/public/images/Email.png"
// import Telegram from "@/public/images/Telegram.png"
// import X from "@/public/images/X.png"
// import YouTube from "@/public/images/YouTube.png"
// import { useAccount, useContractRead, useContractWrite } from "wagmi"
// import { XBGs, XImages } from "./assets"
// import { XTextColor } from "@/components/constant/textcolor"
// import { NFTAPI } from "@/components/constant/NFTStorageAPI"
// import {
//  XRegistrarController_Contract,
//  XNormalRegister_Contract,
//  XAirdrop_Contract,
//  XPublicResolver_Contract,
//  XHash_Contract,
//  XPriceOracle_Contract,
// } from "./contract-config/Polygon"
// import { XRegistrarController_ABI } from "./abi/Polygon/XRegistrarController"
// import { XNormalRegister_ABI } from "./abi/Polygon/XNormalRegister"
// import "@/components/ui/style-pc.css"
// import "@/components/ui/style-phone.css"

// const totalStep = ["Step 1", "Step 2", "Step 3"]
// export default function AirdropForm(props) {
//  const { name = "", code = "" } = props
//  const public_contract = new ethers.Contract(
//   XPublicResolver_Contract.address,
//   XPublicResolver_Contract.abi,
//   "https://polygon-mainnet.g.alchemy.com/v2/8TCsymEGtRVCwPKv6SfGPqscyUJvDHS2",
//   // "https://polygon-mainnet.infura.io/v3/9e5ab41069d14e0a9a1edf92239cc4ad",
//  )
//  const providerURL = "https://polygon-mainnet.g.alchemy.com/v2/UFGhnqafFSFMgJHGje5FSw3vGs_OhuCN"
//  //  const providerURL = "https://polygon-mainnet.infura.io/v3/9e5ab41069d14e0a9a1edf92239cc4ad"
//  const provider = new ethers.JsonRpcProvider(providerURL)
//  const XRegistrarController = new ethers.Contract(
//   "0x7fBc655e451B4F22479D188Ac59BAD6de584472B",
//   XRegistrarController_ABI,
//   provider,
//  )
//  const XNormalRegister = new ethers.Contract(
//   "0x461130E514BfaDcbCf5755790e51D95C9C3F0368",
//   XNormalRegister_ABI,
//   provider,
//  )
//  const { address } = useAccount()
//  const [infoModal, setInfoModal] = useState(false)
//  const [saveModal, setSaveModal] = useState(false)
//  const [hasParent, setHasParent] = useState("")
//  const [inviteCode, setInviteCode] = useState(code)
//  const [curSaveStep, setCurSaveStep] = useState(0)
//  const [socialInfoLs, setSocialInfoLs] = useState([
//   { name: "Address", image: PolygonIcon, input: address },
//  ])
//  const [socialInfo, setSocialInfo] = useState([
//   { name: "Discord", image: Discord, selected: false },
//   { name: "Website", image: Website, selected: false },
//   { name: "Github", image: Github, selected: false },
//   { name: "Instagram", image: Instagram, selected: false },
//   { name: "Email", image: Email, selected: false },
//   { name: "Telegram", image: Telegram, selected: false },
//   { name: "Twitter", image: X, selected: false },
//   { name: "YouTube", image: YouTube, selected: false },
//  ])
//  const [selectedBGImage, setSelectedBGImage] = useState(null)
//  const [selectedXImage, setSelectedXImage] = useState(null)
//  const [selectedXColor, setSelectedXColor] = useState(null)
//  const [isSubmit, setIsSubmit] = useState(false)
//  const [dataHash, setDataHash] = useState([])
//  const [ipfshash, setIpfsHash] = useState("")
//  const secret = "0x9923eb9400000003280c78907906c8ee7d8269d6bd4f9d157e2b26cbe3e7f78f"
//  const maxGenerate = 2
//  const [GenerateTime, setGenerateTime] = useState(0)
//  const [GenerateLoading, setGenerateLoading] = useState(false)
//  const [commitSeconds, setCommitSeconds] = useState(60)
//  const [registerSeconds, setRegisterSeconds] = useState(15)
//  const [isCommitRunning, setIsCommitRunning] = useState(false)
//  const [isRegisterRunning, setIsRegisterRunning] = useState(false)
//  const [registerParams, setRegisterParams] = useState([])
//  const [commitExist, setCommitExist] = useState(false)
//  const [isCommitSuccess, setIsCommitSuccess] = useState(false)
//  const [isRegisterSuccess, setIsRegisterSuccess] = useState(false)
//  const [isMobile, setIsMobile] = useState(false)

//  useEffect(() => {
//   const handleResize = () => {
//    setIsMobile(window.innerWidth <= 768)
//   }
//   handleResize()
//   window.addEventListener("resize", handleResize)
//   return () => {
//    window.removeEventListener("resize", handleResize)
//   }
//  }, [])

//  useEffect(() => {
//   const fetchParent = async () => {
//    const parentAddr = await XNormalRegister.getParent(address)
//    if (
//     parentAddr !== "0x0000000000000000000000000000000000000000" &&
//     parentAddr !== XNormalRegister_Contract.address
//    ) {
//     const existCode = await XNormalRegister.getCode(parentAddr)
//     setInviteCode(existCode)
//    }
//    setHasParent(parentAddr)
//   }
//   if (address) {
//    setInviteCode(code)
//    fetchParent()
//   }
//  }, [address, name])

//  useEffect(() => {
//   let interval
//   if (isCommitRunning && commitSeconds > 0) {
//    interval = setInterval(() => {
//     setCommitSeconds((prevSeconds) => prevSeconds - 1)
//    }, 1000)
//   } else if (commitSeconds === 0) {
//    clearInterval(interval)
//    setIsCommitRunning(false)
//   }
//   return () => clearInterval(interval)
//  }, [isCommitRunning, commitSeconds])

//  useEffect(() => {
//   let interval
//   if (isRegisterRunning && registerSeconds > 0) {
//    interval = setInterval(() => {
//     setRegisterSeconds((prevSeconds) => prevSeconds - 1)
//    }, 1000)
//   } else if (registerSeconds === 0) {
//    clearInterval(interval)
//    setIsRegisterRunning(false)
//   }
//   return () => clearInterval(interval)
//  }, [isRegisterRunning, registerSeconds])

//  useEffect(() => {
//   const updatedSocialInfoLs = socialInfoLs.map((item) => {
//    if (item.name === "Address") {
//     return { ...item, input: address }
//    } else {
//     return item
//    }
//   })
//   setSocialInfoLs(updatedSocialInfoLs)
//  }, [address])

//  useEffect(() => {
//   setGenerateTime(0)
//   setGenerateLoading(false)
//  }, [address, name])

//  useEffect(() => {
//   // 初始化
//   selectRandomBGImage()
//   selectRandomXImage()
//   selectTextColor()
//  }, [])

//  useEffect(() => {
//   if (!isSubmit) {
//    return
//   }
//   // console.log("aaaaaaaaaaaa")
//   // console.log(public_contract)
//   // console.log(socialInfoLs)
//   // console.log(namehash)
//   // console.log("aaaaaaaaaaaa")
//   const callsAddr = {
//    name: socialInfoLs[0].name,
//    callData: public_contract.interface.encodeFunctionData("setAddr(bytes32, address)", [
//     namehash,
//     `${socialInfoLs[0].input}`,
//    ]),
//   }
//   const callsText = socialInfoLs.slice(1).map((item) => {
//    return {
//     name: item.name,
//     callData: public_contract.interface.encodeFunctionData("setText", [
//      namehash,
//      `${item.name}`,
//      `${item.input}`,
//     ]),
//    }
//   })
//   const concatenatedCallDataAddr = callsAddr.callData
//   const concatenatedResult = [concatenatedCallDataAddr, ...callsText.map((item) => item.callData)]
//   // console.log("hhhhhhhhhhhhhhhhhhhhhh")
//   // console.log(concatenatedResult)
//   // console.log("hhhhhhhhhhhhhhhhhhhhhh")
//   setDataHash(concatenatedResult)
//  }, [isSubmit])

//  const selectRandomBGImage = () => {
//   const randomIndex = Math.floor(Math.random() * XBGs.length)
//   setSelectedBGImage(XBGs[randomIndex])
//  }

//  const selectRandomXImage = () => {
//   const randomIndex = Math.floor(Math.random() * XImages.length)
//   setSelectedXImage(XImages[randomIndex])
//  }

//  const selectTextColor = () => {
//   // console.log("xxxxxxxxx")
//   // console.log(XTextColor.length)
//   // console.log("xxxxxxxxx")
//   const randomIndex = Math.floor(Math.random() * XTextColor.length)
//   setSelectedXColor(XTextColor[randomIndex])
//  }

//  const handleInfoModalClose = () => {
//   setInfoModal(false)
//  }

//  const shortenAddress = (address) => {
//   const prefix = address.substring(0, 12)
//   const suffix = address.substring(address.length - 12)
//   return prefix + "..." + suffix
//  }

//  const addSocialInfo = (idx) => {
//   const tempSocialInfoLs = [...socialInfoLs]
//   let socialName = ""
//   let socialImage = ""
//   switch (idx) {
//    case 0:
//     socialName = "Discord"
//     socialImage = Discord
//     break
//    case 1:
//     socialName = "Website"
//     socialImage = Website
//     break
//    case 2:
//     socialName = "Github"
//     socialImage = Github
//     break
//    case 3:
//     socialName = "Instagram"
//     socialImage = Instagram
//     break
//    case 4:
//     socialName = "Email"
//     socialImage = Email
//     break
//    case 5:
//     socialName = "Telegram"
//     socialImage = Telegram
//     break
//    case 6:
//     socialName = "Twitter"
//     socialImage = X
//     break
//    case 7:
//     socialName = "YouTube"
//     socialImage = YouTube
//     break
//    default:
//     break
//   }

//   if (!tempSocialInfoLs.some((item) => item.name === socialName)) {
//    tempSocialInfoLs.push({ name: socialName, image: socialImage, input: "" })
//   }

//   const updatedSocialInfo = socialInfo.map((item, index) =>
//    index === idx ? { ...item, selected: true } : item,
//   )

//   setSocialInfo(updatedSocialInfo)
//   setInfoModal(false)
//   setSocialInfoLs(tempSocialInfoLs)
//  }

//  const deleteSocialInfo = (nameToRemove) => {
//   if (nameToRemove == "Address") {
//    return
//   }
//   const updatedSocialInfoLs = socialInfoLs.filter((item) => item.name !== nameToRemove)
//   setSocialInfoLs(updatedSocialInfoLs)
//   const updatedSocialInfo = socialInfo.map((item, index) =>
//    item.name === nameToRemove ? { ...item, selected: false } : item,
//   )
//   setSocialInfo(updatedSocialInfo)
//  }

//  const infoInput = (str, idx) => {
//   const tempSocialInfoLs = [...socialInfoLs]
//   tempSocialInfoLs[idx].input = str
//   setSocialInfoLs(tempSocialInfoLs)
//  }

//  const handleSaveModalClose = () => {
//   if (!isSubmit) {
//    setSaveModal(false)
//    setCurSaveStep(0)
//    setGenerateTime(0)
//    setIpfsHash("")
//    setIsCommitRunning(false)
//    setIsRegisterRunning(false)
//    setCommitSeconds(60)
//    setRegisterSeconds(15)
//    setIsSubmit(false)
//   }
//  }

//  useEffect(() => {
//   if (registerSeconds == 0) {
//    handleSaveModalClose()
//    window.location.reload()
//   }
//  }, [registerSeconds])

//  const nextStep = () => {
//   if (curSaveStep === totalStep.length - 1) {
//    setSaveModal(false)
//   } else {
//    if (curSaveStep === 1) {
//     setIsSubmit(true)
//    }
//    setCurSaveStep(curSaveStep + 1)
//   }
//  }

//  const canvasRef = useRef(null)
//  useEffect(() => {
//   drawCanvas()
//  }, [selectedBGImage, selectedXImage, name, selectedXColor])

//  const drawCanvas = async () => {
//   if (selectedBGImage && selectedXImage && selectedXColor) {
//    const elem = canvasRef.current
//    const canvas = elem.getContext("2d")
//    const selectBg = await loadImg(selectedBGImage)
//    elem.height = selectBg.height
//    elem.width = selectBg.width
//    canvas.drawImage(selectBg, 0, 0, selectBg.width, selectBg.height)
//    const selectedX = await loadImg(selectedXImage)
//    canvas.drawImage(selectedX, 0, 0, selectBg.width, selectBg.height)

//    let namex = name + ".x"
//    if (namex.length > 26) {
//     namex = namex.slice(0, 23) + "..." + namex.slice(-3)
//    }

//    let lines = [namex]
//    // 超过13个字符，分成两行
//    if (namex.length > 13) {
//     const middleIndex = Math.ceil(namex.length / 2)
//     let firstHalf, secondHalf
//     if (namex.length % 2 === 0) {
//      firstHalf = namex.slice(0, middleIndex)
//      secondHalf = namex.slice(middleIndex)
//     } else {
//      firstHalf = namex.slice(0, middleIndex - 1)
//      secondHalf = namex.slice(middleIndex - 1)
//     }
//     lines = [firstHalf, secondHalf]
//    }

//    // 计算适合的字体大小
//    let fontSize = calculateFontSize(selectBg.width, selectBg.height, lines)

//    canvas.font = `bold ${fontSize}px sans-serif`
//    canvas.textAlign = "center"
//    canvas.fillStyle = selectedXColor

//    // 绘制文字
//    const lineHeight = fontSize * 1.2 // 假设行高为字体大小的1.2倍
//    let centerY
//    if (lines.length == 1) {
//     centerY = selectBg.height * 0.88
//    } else {
//     centerY = selectBg.height * 0.88 - lineHeight / 2 // 居中
//    }
//    lines.forEach((line, index) => {
//     const y = centerY + index * lineHeight
//     canvas.fillText(line, selectBg.width / 2, y)
//    })
//   }
//  }

//  function calculateFontSize(bgWidth, bgHeight, lines) {
//   const maxFontSize = Math.floor((bgWidth * 0.92) / 13) // 字号不超过屏幕宽度的88%
//   const lineHeight = maxFontSize * 1.2 // 假设行高为字体大小的1.2倍

//   // 计算两行文字的高度
//   const totalHeight = lineHeight * lines.length
//   // 如果文字高度超过背景图片高度，则重新计算字体大小
//   if (totalHeight > bgHeight * 0.28) {
//    // 假设文字不能超过背景图片高度的28%
//    const newFontSize = Math.floor((bgHeight * 0.28) / lines.length / 1.2) // 计算新的字体大小
//    return Math.min(newFontSize, maxFontSize) // 字号不超过最大字号
//   }
//   return maxFontSize
//  }

//  const loadImg = (imgResource) => {
//   return new Promise((resolve, reject) => {
//    const img = new window.Image()
//    img.src = imgResource.src
//    // 加载背景图片
//    img.onload = () => {
//     resolve(img)
//    }
//   })
//  }

//  const generateImage = async () => {
//   setGenerateLoading(true)
//   const imageDataURL = canvasRef.current.toDataURL("image/png")
//   console.log("imageDataURL===", imageDataURL)

//   // const client = new NFTStorage({ token: NFT_STORAGE_TOKEN })
//   const KEY_INDEX = Math.floor(Math.random() * NFTAPI.length)
//   // console.log("kkkkkkkkkkkkkkk")
//   // console.log(KEY_INDEX)
//   // console.log("kkkkkkkkkkkkkkk")
//   const selectedToken = NFTAPI[KEY_INDEX]

//   // Convert data URL to ArrayBuffer
//   const arrayBuffer = new Uint8Array(
//    atob(imageDataURL.split(",")[1])
//     .split("")
//     .map((char) => char.charCodeAt(0)),
//   ).buffer

//   const imageFile = new File([arrayBuffer], "x.png", {
//    type: "image/png",
//   })

//   // console.log(imageFile)

//   const formData = new FormData()
//   formData.append("file", imageFile)

//   // 设置请求参数
//   const url = "https://api.nft.storage/upload"
//   const headers = {
//    Accept: "application/json",
//    Authorization: selectedToken,
//   }

//   // 发送 POST 请求
//   fetch(url, {
//    method: "POST",
//    headers: headers,
//    body: formData,
//   })
//    .then((response) => response.json())
//    .then((data) => {
//     // 成功后才增加次数
//     const NewGenerateTime = GenerateTime + 1
//     setGenerateTime(NewGenerateTime)
//     console.log(data)
//     console.log("mmmmmmmmmmmmmmmm")
//     console.log("IPFS Hash:", data.value.cid)
//     console.log("mmmmmmmmmmmmmmmm")
//     const metadata = "ipfs://" + data.value.cid
//     setIpfsHash(metadata)
//     setGenerateLoading(false)
//    })
//    .catch((error) => {
//     console.error("Error:", error)
//    })
//  }

//  const {
//   data: validCode,
//   isError_validCode,
//   isLoading_validCode,
//  } = useContractRead({
//   ...XNormalRegister_Contract,
//   functionName: "getNRInfo",
//   args: [inviteCode],
//   enabled: inviteCode !== "",
//  })

//  const {
//   data: domainPrice,
//   isError_domainPrice,
//   isLoading_domainPrice,
//  } = useContractRead({
//   ...XPriceOracle_Contract,
//   functionName: "price",
//   args: [name],
//   enabled: Boolean(name),
//  })

//  const {
//   data: domainPriceWithCode,
//   isError_priceWithCode,
//   isLoading_priceWithCode,
//  } = useContractRead({
//   ...XNormalRegister_Contract,
//   functionName: "getPriceWithCode",
//   args: [address, inviteCode, name],
//   enabled: inviteCode !== "",
//  })

//  const {
//   data: domainPriceWithoutCode,
//   isError_priceWithoutCode,
//   isLoading_priceWithoutCode,
//  } = useContractRead({
//   ...XNormalRegister_Contract,
//   functionName: "getPriceWithoutCode",
//   args: [address, name],
//   enabled: inviteCode === "",
//  })

//  const {
//   data: namehash,
//   isError_Hash,
//   isLoading_Hash,
//  } = useContractRead({
//   ...XHash_Contract,
//   functionName: "namehash",
//   args: [name],
//  })

//  const {
//   data: commitment,
//   isError_commitment,
//   isLoading_commitment,
//  } = useContractRead({
//   ...XRegistrarController_Contract,
//   functionName: "makeCommitment",
//   args: [name, address, secret, XPublicResolver_Contract.address, dataHash, true, 0],
//   enabled: dataHash.length >= 1,
//  })

//  const {
//   write: writeCommit,
//   data: commitData,
//   error: error_commit,
//   isLoading: isLoading_commit,
//   isError: isError_commit,
//  } = useContractWrite({
//   ...XRegistrarController_Contract,
//   functionName: "commit",
//  })

//  useEffect(() => {
//   // 检查 commitData 是否存在以及其 hash 是否有效
//   if (commitData?.hash) {
//    // 使用 setTimeout 来定时获取交易状态
//    const intervalId = setInterval(async () => {
//     try {
//      console.log(commitment)
//      const txGetCommitments = await XRegistrarController.commitments(commitment)
//      if (parseInt(txGetCommitments) != 0) {
//       // console.log("true")
//       // console.log("eeeeeeeeeeeee")
//       setIsCommitSuccess(true)
//       clearInterval(intervalId)
//      } else {
//       // console.log("false")
//       // console.log("eeeeeeeeeeeee")
//      }
//     } catch (error) {
//      console.error(error)
//     }
//    }, 3000)
//    return () => clearInterval(intervalId)
//   }
//  }, [commitData?.hash])

//  const {
//   write: writeNRWithInviter,
//   data: NRWithInviterData,
//   error: error_NRWithInviter,
//   isLoading: isLoading_NRWithInviter,
//   isError: isError_NRWithInviter,
//  } = useContractWrite({
//   ...XNormalRegister_Contract,
//   functionName: "NRWithInviter",
//  })

//  const {
//   write: writeNRWithoutInviter,
//   data: NRWithoutInviterData,
//   error: error_NRWithoutInviter,
//   isLoading: isLoading_NRWithoutInviter,
//   isError: isError_NRWithoutInviter,
//  } = useContractWrite({
//   ...XNormalRegister_Contract,
//   functionName: "NRWithoutInviter",
//  })

//  useEffect(() => {
//   // 检查 NRWithoutInviterData 是否存在以及其 hash 是否有效
//   if (NRWithoutInviterData?.hash) {
//    // 使用 setTimeout 来定时获取交易状态
//    const intervalId = setInterval(async () => {
//     try {
//      const txGetAvailable = await XRegistrarController.available(name)
//      if (!txGetAvailable) {
//       // console.log("true")
//       // console.log("eeeeeeeeeeeee")
//       setIsRegisterSuccess(true)
//       clearInterval(intervalId)
//      } else {
//       // console.log("false")
//       // console.log("eeeeeeeeeeeee")
//      }
//     } catch (error) {
//      console.error(error)
//     }
//    }, 3000)
//    return () => clearInterval(intervalId)
//   }
//  }, [NRWithoutInviterData?.hash])

//  useEffect(() => {
//   // 检查 NRWithInviterData 是否存在以及其 hash 是否有效
//   if (NRWithInviterData?.hash) {
//    // 使用 setTimeout 来定时获取交易状态
//    const intervalId = setInterval(async () => {
//     try {
//      const txGetAvailable = await XRegistrarController.available(name)
//      if (!txGetAvailable) {
//       // console.log("true")
//       // console.log("eeeeeeeeeeeee")
//       setIsRegisterSuccess(true)
//       clearInterval(intervalId)
//      } else {
//       // console.log("false")
//       // console.log("eeeeeeeeeeeee")
//      }
//     } catch (error) {
//      console.error(error)
//     }
//    }, 3000)
//    return () => clearInterval(intervalId)
//   }
//  }, [NRWithInviterData?.hash])

//  useEffect(() => {
//   const fetchCommit = async () => {
//    //  console.log("sssssssssssssssss")
//    //  console.log(commitment)
//    //  console.log("sssssssssssssssss")
//    const commiton = await XRegistrarController.commitments(commitment)
//    const now = parseInt(new Date().getTime() / 1000)
//    //  console.log("cccccccccccccc")
//    //  console.log(now)
//    //  console.log(commiton)
//    //  console.log("cccccccccccccc")
//    if (parseInt(commiton) + 86400 > now) {
//     setCommitSeconds(0)
//     setCommitExist(true)
//    }
//   }
//   if (dataHash.length >= 1) {
//    fetchCommit()
//   }
//  }, [commitment])

//  useEffect(() => {
//   if (isCommitSuccess) {
//    // 在这里启动倒计时
//    setIsCommitRunning(true)
//   }
//  }, [isCommitSuccess])

//  useEffect(() => {
//   if (isRegisterSuccess) {
//    // 在这里启动倒计时
//    setIsRegisterRunning(true)
//   }
//  }, [isRegisterSuccess])

//  useEffect(() => {
//   let params = []
//   if (inviteCode !== "" && validCode[0] !== "0x0000000000000000000000000000000000000000") {
//    params = [
//     name,
//     address,
//     secret,
//     XPublicResolver_Contract.address,
//     dataHash,
//     true,
//     0,
//     ipfshash,
//     inviteCode,
//    ]
//   } else {
//    params = [name, address, secret, XPublicResolver_Contract.address, dataHash, true, 0, ipfshash]
//   }
//   setRegisterParams(params)
//  }, [commitment, commitExist])

//  const [textData, setTextData] = useState({ styles: null, lines: null })
//  const calculateTextStyles = async () => {
//   console.log("aaaaaaaaa")
//   console.log(name)
//   console.log("aaaaaaaaa")
//   const canvasWidth = isMobile ? 118 : 180
//   const canvasHeight = isMobile ? 118 : 180
//   console.log(selectedXColor)
//   console.log("asssssss")
//   if (selectedBGImage && selectedXImage && selectedXColor) {
//    let namex = name + ".x"
//    // 超过26个字符，截取前23个字符并添加省略号
//    if (namex.length > 26) {
//     namex = namex.slice(0, 23) + "..." + namex.slice(-3)
//    }

//    let lines = [namex]
//    // 超过13个字符，分成两行
//    if (namex.length > 13) {
//     const middleIndex = Math.ceil(namex.length / 2)
//     let firstHalf, secondHalf
//     if (namex.length % 2 === 0) {
//      firstHalf = namex.slice(0, middleIndex)
//      secondHalf = namex.slice(middleIndex)
//     } else {
//      firstHalf = namex.slice(0, middleIndex - 1)
//      secondHalf = namex.slice(middleIndex - 1)
//     }
//     lines = [firstHalf, secondHalf]
//    }

//    // 计算适合的字体大小
//    const fontSize = calculateFontSize(canvasWidth, canvasHeight, lines)
//    // 计算行高
//    const lineHeight = fontSize * 1.2
//    // 计算文字位置
//    let centerY
//    if (lines.length === 1) {
//     centerY = 0.8 * canvasHeight // 固定 bottom 位置
//    } else {
//     centerY = 0.8 * canvasHeight - lineHeight / 2 // 居中
//    }

//    // 组装样式对象
//    const textStyles = {
//     fontSize: `${fontSize}px`,
//     lineHeight: `${lineHeight}px`,
//     position: "absolute",
//     top: `${centerY}px`, // 底部位置
//     left: "50%",
//    }

//    // 返回计算出的文字样式和位置信息
//    return { styles: textStyles, lines }
//   }
//   return null // 如果未选择图片或颜色，则返回 null
//  }

//  useEffect(() => {
//   const fetchTextData = async () => {
//    const data = await calculateTextStyles()
//    setTextData(data)
//   }
//   fetchTextData()
//  }, [isMobile, name, address, selectedXColor])

//  console.log("55555555555")
//  console.log(validCode)
//  console.log(hasParent)
//  console.log("55555555555")

//  return (
//   <section
//    className="universal-wrap mb-5 mt-5 flex w-[375px] flex-col items-center justify-center px-3 md:mt-7 md:w-[900px]"
//    style={{ backgroundColor: "#fff", color: "#9b9ba6" }}
//   >
//    <canvas className="fixed left-[-600px] h-[600px] w-[600px]" ref={canvasRef}></canvas>
//    <div className="flex w-full">
//     <div className="top-15% grow text-center text-xl leading-[30px] md:text-3xl md:leading-[65px]">
//      <div style={{ paddingTop: "5%", color: "#000" }}>{name}.x</div>
//     </div>
//    </div>
//    {address && (
//     <div>
//      <div className="flex w-full flex-col items-center justify-center md:p-[20px]">
//       {inviteCode === "" && domainPriceWithoutCode && (
//        <div className="h-[50px] w-full border-b-2 text-center leading-[50px] md:h-[80px] md:w-[560px] md:leading-[80px]">
//         Price :{" "}
//         <span
//          style={{
//           textDecoration: domainPriceWithoutCode < domainPrice ? "line-through" : "none",
//          }}
//         >
//          {((Number(domainPrice) * 1.02) / 1e18).toFixed(3).toString()} Matic
//         </span>
//         {domainPriceWithoutCode < domainPrice && (
//          <span style={{ marginLeft: "1.5%" }}>
//           {((Number(domainPriceWithoutCode) * 1.02) / 1e18).toFixed(3).toString()} Matic
//          </span>
//         )}
//        </div>
//       )}
//       {inviteCode !== "" && domainPriceWithCode && (
//        <div className="h-[50px] w-full border-b-2 text-center leading-[50px] md:h-[80px] md:w-[560px] md:leading-[80px]">
//         Price :{" "}
//         <span
//          style={{
//           textDecoration: domainPriceWithCode < domainPrice ? "line-through" : "none",
//          }}
//         >
//          {((Number(domainPrice) * 1.02) / 1e18).toFixed(3).toString()} Matic
//         </span>
//         {domainPriceWithCode < domainPrice && (
//          <span style={{ marginLeft: "1.5%" }}>
//           {((Number(domainPriceWithCode) * 1.02) / 1e18).toFixed(3).toString()} Matic
//          </span>
//         )}
//        </div>
//       )}
//       <div className="h-[50px] w-full text-center leading-[50px] md:h-[80px] md:w-[560px] md:leading-[80px]">
//        Validity Period : Until the next Cosmic Big Bang
//       </div>
//       {hasParent === "0x0000000000000000000000000000000000000000" && (
//        <div className="mb-3 flex w-[360px] border md:mb-8 md:w-[600px]">
//         <div className="flex w-1/3 items-center justify-center bg-purple-500 text-white md:w-1/4">
//          Invite Code
//         </div>
//         <input
//          className="flex w-2/3 grow bg-[#2d2653] px-1 py-1 md:w-3/4 md:px-4 md:py-3"
//          type="text"
//          value={inviteCode}
//          onChange={(e) => {
//           setInviteCode(e.target.value)
//          }}
//          placeholder={"Enter invite code for 5% off"}
//         />
//        </div>
//       )}

//       {hasParent === XNormalRegister_Contract.address && (
//        <div className="mb-3 flex w-[360px] border md:mb-8 md:w-[600px]">
//         <div className="flex w-1/3 items-center justify-center bg-purple-500 text-white md:w-1/4">
//          Invite Code
//         </div>
//         <div className="flex w-2/3 grow bg-[#2d2653] px-1 py-1 md:w-3/4 md:px-4 md:py-3">
//          You have registered X domain and cannot be invited
//         </div>
//        </div>
//       )}

//       {hasParent !== "0x0000000000000000000000000000000000000000" &&
//        hasParent !== XNormalRegister_Contract.address && (
//         <div className="mb-3 flex w-[360px] border md:mb-8 md:w-[600px]">
//          <div className="flex w-1/3 items-center justify-center bg-purple-500 text-white md:w-1/4">
//           Invite Code
//          </div>
//          <div className="flex w-2/3 grow bg-[#2d2653] px-1 py-1 md:w-3/4 md:px-4 md:py-3">
//           You already have an inviter
//          </div>
//         </div>
//        )}

//       {socialInfoLs.map((item, idx) => (
//        <div key={"socialInfoLs" + idx} className="flex w-[360px] border md:w-[600px]">
//         <Image
//          src={item.image}
//          alt=""
//          style={{ width: "12.5%", height: "auto", padding: "0.66%" }}
//         />
//         {item.name !== "Address" ? (
//          <input
//           className="flex grow bg-[#2d2653] px-1 py-1 md:px-4 md:py-3"
//           type="text"
//           value={item.input}
//           onChange={(e) => {
//            infoInput(e.target.value, idx)
//           }}
//           placeholder={`Please Input ${item.name}`}
//          />
//         ) : (
//          <span className="flex grow items-center bg-[#2d2653] px-1 py-1 md:px-4 md:py-3">
//           {item.input && shortenAddress(item.input)}
//          </span>
//         )}

//         <span
//          className={`flex cursor-pointer items-center justify-center ${item.name == "Address" ? "" : "text-red-500"}`}
//          style={{ cursor: item.name == "Address" ? "not-allowed" : "pointer", width: "12.5%" }}
//          onClick={() => deleteSocialInfo(item.name)}
//         >
//          {isMobile ? <span>Del</span> : <span>Delete</span>}
//         </span>
//        </div>
//       ))}
//       <button
//        className="purple-btn m-auto mb-2 rounded-lg px-3 py-1 md:my-4 md:px-8 md:py-2"
//        style={{
//         marginTop: "4%",
//         cursor:
//          inviteCode.length > 0
//           ? !validCode || validCode[0] === "0x0000000000000000000000000000000000000000"
//             ? "not-allowed"
//             : "pointer"
//           : "pointer",
//         backgroundColor:
//          inviteCode.length > 0
//           ? !validCode || validCode[0] === "0x0000000000000000000000000000000000000000"
//             ? "#888"
//             : ""
//           : "",
//         minWidth: isMobile ? "270px" : "450px",
//        }}
//        onClick={() => setInfoModal(true)}
//       >
//        {inviteCode.length > 0
//         ? !validCode || validCode[0] === "0x0000000000000000000000000000000000000000"
//           ? "Invalid inviter code"
//           : "Add more to profile"
//         : "Add more to profile"}
//       </button>
//       <button
//        className="purple-btn my-2 rounded-lg px-3 py-1 font-medium md:mt-[15px] md:px-8 md:py-2"
//        onClick={() => setSaveModal(true)}
//        style={{
//         cursor:
//          inviteCode.length > 0
//           ? !validCode || validCode[0] === "0x0000000000000000000000000000000000000000"
//             ? "not-allowed"
//             : "pointer"
//           : "pointer",
//         backgroundColor:
//          inviteCode.length > 0
//           ? !validCode || validCode[0] === "0x0000000000000000000000000000000000000000"
//             ? "#888"
//             : ""
//           : "",
//         minWidth: isMobile ? "270px" : "450px",
//        }}
//       >
//        {inviteCode.length > 0
//         ? !validCode || validCode[0] === "0x0000000000000000000000000000000000000000"
//           ? "Invalid inviter code"
//           : `Register ${name}.x`
//         : `Register ${name}.x`}
//       </button>
//      </div>
//     </div>
//    )}

//    {!address && (
//     <div style={{ fontSize: isMobile ? "18px" : "25px" }}>
//      <div className="flex items-center justify-center"> Please Connect Wallet first</div>
//      <div className="mb-[20px] ml-[5px] mt-[5px] w-[333px] shrink-0 text-center md:ml-[10px] md:mt-[10px] md:w-[800px] md:leading-[10px]">
//       {isMobile ? (
//        <Image src={Overview2} alt="Overview" style={{ width: "100%", height: "auto" }} />
//       ) : (
//        <Image src={Overview1} alt="Overview" style={{ width: "100%", height: "auto" }} />
//       )}
//      </div>
//     </div>
//    )}

//    <Modal open={infoModal} onCancel={handleInfoModalClose}>
//     <div
//      className="relative rounded-lg bg-white p-4 text-black"
//      onClick={(e) => e.stopPropagation()}
//     >
//      <CloseIcon close={handleInfoModalClose} />
//      <div className="mb-1 text-center font-medium md:text-3xl">Add profile fields</div>
//      <div className="flex w-[250px] flex-wrap justify-around md:w-[500px]">
//       {socialInfo.map((item, idx) => (
//        <div
//         key={idx + "socialinfo"}
//         className={`mb-1 shrink-0 p-[1px] ${item.selected ? "grayscale-[100%]" : ""}`}
//         onClick={() => {
//          if (!item.selected) {
//           addSocialInfo(idx)
//          }
//         }}
//         style={{
//          filter: item.selected ? "grayscale(100%)" : "none",
//          backgroundColor: item.selected ? "#888" : "white",
//          cursor: item.selected ? "not-allowed" : "pointer",
//         }}
//        >
//         <Image src={item.image} className="h-[80px] w-[80px] md:h-[120px] md:w-[120px]" alt="" />
//         <span style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
//          {item.name}
//         </span>
//        </div>
//       ))}
//      </div>
//     </div>
//    </Modal>

//    <Modal open={saveModal}>
//     <div
//      className="relative w-[400px] rounded-lg bg-white p-2 text-black md:w-[700px]"
//      onClick={(e) => e.stopPropagation()}
//     >
//      <CloseIcon close={handleSaveModalClose} />
//      <div className="mb-2 mt-2 text-center">
//       <span style={{ fontSize: "20px" }}>Register</span>
//      </div>
//      <div>
//       {/*https://tailwindui.com/components/application-ui/navigation/steps#component-ef491b1515ff05e8cc7429f37bc0fae5
//        */}
//       <ol role="list" className="flex rounded-md border border-slate-200">
//        {totalStep.map((item, idx) => (
//         <li key={idx} className="relative flex flex-1 grow">
//          <div href="#" className="flex w-full items-center justify-center">
//           <span className=" flex items-center px-2 py-2 text-sm font-medium  md:px-4 md:py-2">
//            <span
//             className={`flex h-5 w-5  shrink-0 items-center justify-center rounded-full md:h-8 md:w-8 ${curSaveStep > idx ? "bg-indigo-600" : ""} ${curSaveStep === idx ? "border border-indigo-600" : ""} 
//             ${curSaveStep < idx ? "border border-gray-900" : ""} `}
//            >
//             {curSaveStep > idx && (
//              <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 24 24"
//               fill="currentColor"
//               aria-hidden="true"
//               className="h-3 w-3 text-white md:h-6 md:w-6"
//              >
//               <path
//                fill-rule="evenodd"
//                d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
//                clip-rule="evenodd"
//               ></path>
//              </svg>
//             )}
//             {curSaveStep === idx && <span className="text-indigo-600">0{idx + 1}</span>}
//             {curSaveStep < idx && <span className="text-gray-900">0{idx + 1}</span>}
//            </span>
//            <span className="ml-2 text-sm font-medium text-gray-900">{item}</span>
//           </span>
//          </div>
//          {idx !== totalStep.length - 1 && (
//           <div
//            className="absolute right-0 top-0 flex h-full w-3 items-center justify-center text-gray-300"
//            aria-hidden="true"
//           >
//            <svg
//             className="h-5 w-2 md:h-8 md:w-4"
//             viewBox="0 0 22 80"
//             fill="none"
//             preserveAspectRatio="none"
//            >
//             <path
//              d="M0 -2L20 40L0 82"
//              vectorEffect="non-scaling-stroke"
//              stroke="currentcolor"
//              strokeLinejoin="round"
//             ></path>
//            </svg>
//           </div>
//          )}
//         </li>
//        ))}
//       </ol>
//      </div>
//      {curSaveStep === 0 && (
//       <div>
//        <div>
//         <span
//          style={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           margin: "2% 0 2% 0",
//           color: "#9b9ba6",
//          }}
//         >
//          Check Profile
//         </span>
//        </div>
//        <div className="mt-2 flex items-center justify-center">
//         <div>
//          {socialInfoLs.map((item, idx) => (
//           <div key={"socialInfoLs" + idx} className="flex w-[350px] border md:w-[600px]">
//            <div className="w-[80px] border-r py-1 text-center md:w-[120px] md:py-3">
//             {item.name}
//            </div>
//            <div
//             className="flex grow  px-1 py-1 md:px-4 md:py-3"
//             style={{ width: isMobile ? "280px" : "auto", overflow: "hidden" }}
//            >
//             {item.input}
//            </div>
//           </div>
//          ))}
//         </div>
//        </div>
//       </div>
//      )}

//      {curSaveStep === 1 && (
//       <div>
//        <div>
//         <span
//          style={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           margin: "2% 0 2% 0",
//           color: "#9b9ba6",
//          }}
//         >
//          Generate Metadata
//         </span>
//        </div>
//        <div className="mt-2 flex justify-around">
//         <div className="w-[120px] shrink-0 rounded-lg border md:w-[182px]">
//          <div className="border-b text-center">Select BG</div>
//          {selectedBGImage && (
//           <div className="h-[118px] md:h-[180px]">
//            <Image
//             src={selectedBGImage}
//             className="h-[118px] w-[118px] md:h-[180px] md:w-[180px]"
//             alt=""
//            />
//           </div>
//          )}
//          <div
//           className="cursor-pointer border-t text-center"
//           onClick={!GenerateLoading && selectRandomBGImage}
//          >
//           {GenerateLoading ? "Generating..." : "Change One"}
//          </div>
//         </div>
//         <div className="w-[120px] shrink-0 rounded-lg border md:w-[182px]">
//          <div className="border-b text-center">Select X</div>
//          {selectedXImage && (
//           <div className="h-[118px] md:h-[180px]">
//            <Image
//             src={selectedXImage}
//             className="h-[118px] w-[118px] md:h-[180px] md:w-[180px]"
//             alt=""
//            />
//           </div>
//          )}
//          <div
//           className="cursor-pointer border-t text-center"
//           onClick={!GenerateLoading && selectRandomXImage}
//          >
//           {GenerateLoading ? "Generating..." : "Change One"}
//          </div>
//         </div>
//         <div className="relative w-[120px] shrink-0 rounded-lg border md:w-[182px]">
//          <div className="border-b text-center">Image Preview</div>
//          <div className="h-[118px] md:h-[180px]">
//           {selectedBGImage && selectedXImage && (
//            <div className="relative h-[118px] h-full w-[118px] w-full md:h-[180px] md:w-[180px]">
//             <Image src={selectedBGImage} className="absolute inset-0 h-full w-full" alt="" />
//             <Image src={selectedXImage} className="absolute inset-0 h-full w-full" alt="" />
//             <div
//              className="absolute -translate-x-1/2 transform"
//              style={
//               textData && textData.styles
//                ? { ...textData.styles, color: selectedXColor }
//                : { color: selectedXColor }
//              }
//             >
//              {textData &&
//               textData.lines &&
//               textData.lines.map((line, index) => (
//                <p key={index} className="font-bold">
//                 {line}
//                </p>
//               ))}
//             </div>
//            </div>
//           )}
//          </div>
//          <div
//           className="cursor-pointer border-t text-center"
//           onClick={!GenerateLoading && selectTextColor}
//          >
//           {GenerateLoading ? "Generating..." : "Set TextColor"}
//          </div>
//         </div>
//        </div>
//       </div>
//      )}
//      <div className="flex items-center justify-center">
//       {curSaveStep == 0 && (
//        <button
//         className="purple-btn m-auto mb-2 mt-2 rounded-lg px-3 py-1 md:my-4 md:px-8 md:py-2"
//         onClick={nextStep}
//        >
//         Confirm Profile
//        </button>
//       )}

//       {curSaveStep == 1 && (
//        <div>
//         {ipfshash && (
//          <div className="mt-3 block text-center">
//           {ipfshash.slice(0, 41)}
//           <br />
//           {ipfshash.slice(41)}
//           {/* <span>Generate Success</span> */}
//          </div>
//         )}
//         <div
//          style={{
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//          }}
//         >
//          <button
//           className="purple-btn m-auto mt-2 rounded-lg px-3 py-1 md:my-4 md:px-8 md:py-2"
//           onClick={generateImage}
//           style={{
//            cursor: GenerateLoading || GenerateTime >= 2 ? "not-allowed" : "pointer",
//            backgroundColor: GenerateLoading || GenerateTime >= 2 ? "#888" : "",
//           }}
//           disabled={GenerateLoading || GenerateTime >= 2}
//          >
//           {ipfshash == "" && <span>Generate</span>}
//           {ipfshash != "" && <span>Regenerate</span>}
//          </button>
//          <button
//           className={`purple-btn m-auto mt-2 rounded-lg px-3 py-1 md:my-4 md:px-8 md:py-2 ${ipfshash == "" ? "grayscale-[100%]" : ""}`}
//           onClick={nextStep}
//           disabled={ipfshash == ""}
//           style={{
//            cursor: ipfshash == "" ? "not-allowed" : "pointer",
//           }}
//          >
//           Confirm
//          </button>
//         </div>
//         <div className="block text-center">
//          <span style={{ color: "#3de1ad" }}>
//           Tip1 : Please do not click the Generate button until you have selected the image.
//          </span>
//         </div>
//         <div className="mb-1 mt-1 block text-center">
//          <span style={{ color: "#4b5cc4" }}>
//           Tip2 : You have up to two chances to generate an image, current remaining chances :{" "}
//           {maxGenerate - GenerateTime}
//          </span>
//         </div>
//        </div>
//       )}
//       {curSaveStep === 2 && (
//        <div style={{ justifyContent: "center", alignItems: "center", width: "100%" }}>
//         <p
//          style={{
//           fontSize: "2em",
//           textAlign: "center",
//           margin: "0",
//           fontSize: isMobile ? "14px" : "17px",
//          }}
//         >
//          Please don't press the close button during registration
//         </p>
//         <div
//          style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }}
//         >
//          <div style={{ width: "50%" }}>
//           <p style={{ fontSize: "2em", textAlign: "center", margin: "0" }}>{commitSeconds}</p>
//           <button
//            className="purple-btn m-auto mb-2 rounded-lg px-3 py-1 md:my-4 md:px-8 md:py-2"
//            style={{
//             width: isMobile ? "90%" : "60%",
//             justifyContent: "center",
//             fontSize: isMobile ? "16px" : "18px",
//             margin: isMobile ? "0 5% 3% 5%" : "0 20% 3% 20%",
//             cursor: isCommitSuccess || commitExist ? "not-allowed" : "pointer",
//             backgroundColor: isCommitSuccess || commitExist ? "#888" : "",
//            }}
//            onClick={() => writeCommit({ args: [commitment] })}
//            disabled={!commitment || isCommitSuccess || commitExist}
//           >
//            {commitSeconds == 0 ? "Success√√√" : isCommitSuccess ? "Waiting..." : "Upload Inform"}
//           </button>
//          </div>
//          <div style={{ width: "50%" }}>
//           <p style={{ fontSize: "2em", textAlign: "center", margin: "0" }}>{registerSeconds}</p>
//           {inviteCode !== "" && validCode[0] !== "0x0000000000000000000000000000000000000000" && (
//            <button
//             className="purple-btn m-auto mb-2 rounded-lg px-3 py-1 md:my-4 md:px-8 md:py-2"
//             style={{
//              width: isMobile ? "90%" : "60%",
//              justifyContent: "center",
//              fontSize: isMobile ? "16px" : "18px",
//              margin: isMobile ? "0 5% 3% 5%" : "0 20% 3% 20%",
//              cursor: !isRegisterSuccess && commitSeconds == 0 ? "pointer" : "not-allowed",
//              backgroundColor: !isRegisterSuccess && commitSeconds == 0 ? "" : "#888",
//             }}
//             onClick={() => {
//              console.log(registerParams)
//              writeNRWithInviter({
//               args: registerParams,
//               value: (BigInt(domainPriceWithCode) * BigInt(102n)) / BigInt(100n),
//              })
//             }}
//             disabled={isRegisterSuccess || commitSeconds != 0}
//            >
//             {registerSeconds <= 3
//              ? "Success√√√"
//              : isRegisterSuccess
//                ? "Waiting..."
//                : "Register Now"}
//            </button>
//           )}
//           {(inviteCode === "" || validCode[0] === "0x0000000000000000000000000000000000000000") && (
//            <button
//             className="purple-btn m-auto mb-2 rounded-lg px-3 py-1 md:my-4 md:px-8 md:py-2"
//             style={{
//              width: isMobile ? "90%" : "60%",
//              justifyContent: "center",
//              fontSize: isMobile ? "16px" : "18px",
//              margin: isMobile ? "0 5% 3% 5%" : "0 20% 3% 20%",
//              cursor: !isRegisterSuccess && commitSeconds == 0 ? "pointer" : "not-allowed",
//              backgroundColor: !isRegisterSuccess && commitSeconds == 0 ? "" : "#888",
//             }}
//             onClick={() => {
//              console.log(registerParams)
//              writeNRWithoutInviter({
//               args: registerParams,
//               value: (BigInt(domainPriceWithoutCode) * BigInt(102n)) / BigInt(100n),
//              })
//             }}
//             disabled={isRegisterSuccess || commitSeconds != 0}
//            >
//             {registerSeconds <= 3
//              ? "Success√√√"
//              : isRegisterSuccess
//                ? "Waiting..."
//                : "Register Now"}
//            </button>
//           )}
//          </div>
//         </div>
//        </div>
//       )}
//      </div>
//     </div>
//    </Modal>
//   </section>
//  )
// }
