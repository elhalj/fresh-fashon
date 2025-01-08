import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../../context/ShoppingContext";
import Produit from "./Produit";

const CatalogueId = () => {
  const { Homeproducts } = useContext(ShopContext);
  const { productId } = useParams();
  console.log(productId);

  const produit = Homeproducts.find((product) => product.id === productId);
  if (!produit) {
    return <div>Product not found</div>;
    }
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
