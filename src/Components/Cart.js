import React from 'react'
import { useSelector } from 'react-redux'

function Cart() {
    const cartItems = useSelector((store)=>store.cart.items)
  return (
    <div className='font-bold text-3xl'>Cart Items-{cartItems.length}</div>
  )
}

export default Cart