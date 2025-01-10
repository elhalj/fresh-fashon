import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShoppingContext'



function Cart() {
  const {cardItems} = useContext(ShopContext)
  return (
    <div>
      <h1>{cardItems}</h1>
    </div>
  )
}

export default Cart
