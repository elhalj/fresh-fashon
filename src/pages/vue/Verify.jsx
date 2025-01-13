



import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShoppingContext'

function Verify() {

  const { cardItems } = useContext(ShopContext);
  return (
    <>
      <div className="verify">
        <h2>Verify your order</h2>
        <div className="address">
          <input type="text" name="" id="" />
          <input type="text" name="" id="" />
          <input type="text" name="" id="" />
          <input type="text" name="" id="" />
          <input type="text" name="" id="" />
        </div>
      </div>
    </>
  )
}

export default Verify
