import React, { useContext } from "react";
import "./catalogueId.css";
import { IoMdAddCircle } from "react-icons/io";
import { FaMinusCircle } from "react-icons/fa";
import { ShopContext } from "../../context/ShoppingContext";

const Produit = ({ prod }) => {
  const { addToCard, removeToCard, cardItems, getTotalItems, totalItem } = useContext(ShopContext);

  const handleAddToCard = () => {
    addToCard(prod);
  }
  
  return (
    <>
      <div id="produit" className="prod" style={{ marginTop: "100px" }}>
        <div className="box">
          <h3>IMAGE</h3>
          <div>
            <img src={prod.image} alt={prod.name} />
          </div>
        </div>
        <div className="box">
          <h3>NOM</h3>
          <div>{prod.name}</div>
        </div>
        <div className="box">
          <h3>CATEGORY</h3>
          <div>{prod.category}</div>
        </div>
        <div className="box">
          <h3>DESCRIPTION</h3>
          <div>{prod.description}</div>
        </div>
        <div className="box">
          <h3>PRIX</h3>
          <div>{prod.price} FCFA</div>
        </div>
        <div className="box">
          <h3>STOCK</h3>
          <div>{prod.stock}</div>
        </div>
        <div className="box">
          <h3>QUANTITE</h3>
          {!cardItems[prod.id] ? (
            <IoMdAddCircle
              className="plus"
              onClick={() => addToCard(prod.id)}
            />
          ) : (
            <div className="qbuttons">
              <div>
                <FaMinusCircle
                  className="moins"
                  onClick={() => removeToCard(prod.id)}
                />
              </div>
              <p>{cardItems[prod.id]}</p>
              <div>
                <IoMdAddCircle
                  className="plus"
                  onClick={() => addToCard(prod.id)}
                />
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="add">
        <button type="submit" onClick={() => handleAddToCard(prod.id)}>Ajouter</button>
        <p>{totalItem(prod.id)}</p>
      </div>
    </>
  );
};

export default Produit;
