import { ShopContext } from "../context/ShoppingContext";
import Cart from "../pages/cart/Cart";
import "./panier.css";

import React, { useContext } from "react";

function Panier() {
  const { getTotalItems, cardItems } = useContext(ShopContext);
  return (
    <>
      <div className="panier">
        <h1>Mon panier</h1>
        <Cart />
      </div>
    </>
  );
}

export default Panier;
