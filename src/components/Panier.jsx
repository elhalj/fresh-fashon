import { Link } from "react-router-dom";
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
      <div className="total">
        <h1>Compte total</h1>
        <p>{getTotalItems()} FCFA</p>
        <h2>
          {!getTotalItems() ? <Link to="catalogue">Rien dans le panier</Link> : <Link to="verify">Commander</Link>}
        </h2>
      </div>
    </>
  );
}

export default Panier;
