"use client"

import { useCartStore } from "@/store/zustand"

export default function CartShow({ model }) {
 const { cart, add: handleAddToCart } = useCartStore()

 return (
  <div>{model ? <button onClick={handleAddToCart}>Add To Cart</button> : <div>{cart}</div>}</div>
 )
}
