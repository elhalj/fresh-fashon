import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../../context/ShoppingContext";
import Produit from "./Produit";

const CatalogueId = () => {
  const { product } = useContext(ShopContext);
  const { productId } = useParams();
  console.log(productId);

  const produit = product.find((e) => e.id === productId);
  if (!produit) {
    return <div>Product not found</div>;
    }
    console.log(produit)
  // const { Homeproducts } = useContext(ShopContext);
  
  // let { id } = useParams();
  // console.log(id)
  
  return (
    <div>
      <h1>Produit</h1>

      <Produit product={produit} />
    </div>
  );
};

export default CatalogueId;
