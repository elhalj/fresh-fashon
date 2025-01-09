import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../../context/ShoppingContext";
import Produit from "./Produit";

const CatalogueId = () => {
  const { product } = useContext(ShopContext);
  const { productId } = useParams();
  console.log(productId);

  const produit = () => {
    try {
      const res = product.find((e) => e.id === productId);
      if(!res){
        console.log("rien trouver")
      }
      console.log(res);
    } catch (error) {
      console.log(error.message)
    }
  }
  if (!produit()) {
    return <div style={{marginTop:"100px", textAlign:"center", fontSize:"60px"}}>Product not found</div>;
  }
  
  // const { Homeproducts } = useContext(ShopContext);
  
  // let { id } = useParams();
  // console.log(id)

  return (
    <div>
      <h1>Produit</h1>

      <Produit  />
    </div>
  );
};

export default CatalogueId;
