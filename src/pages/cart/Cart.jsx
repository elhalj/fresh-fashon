import React, { useContext } from "react";
import { ShopContext } from "../../context/ShoppingContext";
import { FaTrashCan } from "react-icons/fa6";

function Cart() {
  const { cardItems, product, removeToCard, getTotalItems } = useContext(ShopContext);
  return (
    <>
      <div>
      {product.map((p) => {
        if (cardItems[p.id] > 0) {
          return (
            <div key={p.id}>
              <div className="panier__content">
                <div key={p.id} className="panier__item">
                  <div className="panier__item__img">
                    <img src={p.image} alt="" />
                  </div>
                  <div className="panier__item__info">
                    <h4>{p.name}</h4>
                    <p>{cardItems[p.id]}</p>
                    <p>{p.price * cardItems[p.id]} FCFA</p>
                    <div><FaTrashCan className="sup" onClick={() => removeToCard(p.id)}/></div>
                  </div>
                  
                </div>
              </div>
            </div>
          );
        }
        return null;
      })}
    </div>


    <div className="total">
        <h1>Compte total</h1>
            <p>{getTotalItems()} FCFA</p>
            <h2>Payement</h2>
      </div>
    </>
    
  );
}

export default Cart;
