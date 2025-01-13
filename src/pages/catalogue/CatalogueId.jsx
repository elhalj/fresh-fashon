import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../../context/ShoppingContext";
import Produit from "./Produit";

const CatalogueId = () => {
  const { product } = useContext(ShopContext);
  const { id } = useParams();
  // console.log(id);

  const produit = product.find((e) => e.id === parseInt(id));
  console.log(produit)
      
  if (!produit) {
    return <div style={{marginTop:"100px", textAlign:"center", fontSize:"60px"}}>Product not found</div>;
  }
  
  // const { Homeproducts } = useContext(ShopContext);
  
  // let { id } = useParams();
  // console.log(id)

  return (
    <div style={{marginTop:"100px", marginBottom:"100px"}}>
      <h1 style={{textAlign:"center",boxShadow:"1px 2px 1px black"}}>Produit</h1>
      
      <Produit prod={produit} />
    </div>
  );
};

export default CatalogueId;
