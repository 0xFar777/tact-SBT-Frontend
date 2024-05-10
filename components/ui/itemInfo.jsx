"use client"
import { useState, useEffect } from "react"

export default function ItemInfo() {
 const [itemAmount, setItemAmount] = useState(0)
 const [currentPage, setCurrentPage] = useState(0)
 const [tableData, setTableData] = useState([])
 const itemsPerPage = 3
 const totalPages = Math.ceil(itemAmount / itemsPerPage)

 useEffect(() => {
  const fetchItemAmount = async () => {
   try {
    const response = await fetch(`http://localhost:5173/api/itemAmount`)
    if (!response.ok) {
     throw new Error("Network response was not ok")
    }
    const result = await response.json()
    setItemAmount(result)
    setCurrentPage(1)
   } catch (error) {
    console.error("Error:", error)
    throw new Error("Failed to fetch item amount")
   }
  }
  fetchItemAmount()
 }, [])

 useEffect(() => {
  const fetchItemInfo = async () => {
   try {
    if (currentPage === 0) {
     return
    }
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = Math.min(startIndex + itemsPerPage, itemAmount)
    const response = await fetch(
     `http://localhost:5173/api/multiItemInfo?itemFrom=${startIndex}&itemTo=${endIndex - 1}`,
    )
    if (!response.ok) {
     throw new Error("Network response was not ok")
    }
    const result = await response.json()
    setTableData(result)
   } catch (error) {
    console.error("Error:", error)
    throw new Error("Failed to fetch item amount")
   }
  }
  fetchItemInfo()
 }, [currentPage])

 // Function to handle next page button click
 const handleNextPage = () => {
  setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages))
 }

 // Function to handle previous page button click
 const handlePrevPage = () => {
  setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))
 }

 return (
  <div
   className="flex w-[60%] flex-col items-center md:mx-auto md:mt-[50px]"
   style={{ color: "#fff" }}
  >
   <table border="1">
    <thead>
     <tr>
      <td className="p-2">Item Index</td>
      <td className="p-2">Item Owner</td>
     </tr>
    </thead>
    <tbody>
     {tableData.length > 0 &&
      tableData.map((row, rowIndex) => (
       <tr key={rowIndex}>
        <td className="p-2">{row.itemIndex}</td>
        <td className="p-2">{row.itemOwner}</td>
       </tr>
      ))}
    </tbody>
   </table>
   <div className="p-2">
    <button onClick={handlePrevPage} disabled={currentPage === 1}>
     Prev
    </button>{" "}
    <span>{`${currentPage} of ${totalPages}`}</span>{" "}
    <button onClick={handleNextPage} disabled={currentPage === totalPages}>
     Next
    </button>
   </div>
  </div>
 )
}
