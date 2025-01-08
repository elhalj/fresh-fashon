import "./catalogue.css";

import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ShopContext } from "../../context/ShoppingContext";
import { IoMdAddCircle } from "react-icons/io";
import { FaMinusCircle } from "react-icons/fa";

export default function Catalogue() {
    const { product, cardItems, addToCard, removeToCard } = useContext(ShopContext);
    const [produits, setProduits] = useState();

    // filtrer les produits par nom
    const filter = (nom) => {
        const filteredProducts = product.filter(
            (products) => products.nom === nom
        );
        setProduits(filteredProducts);
    };
    // filtrer les produits par categorie
    const allProducts = () => {
        setProduits(product);
    };

    return (
        <>
            <div className="contenu">
                <div className="barniereGauche">
                    <div className="contenant">
                        <div className="all">
                            <h3>All</h3>
                            <input onClick={() => allProducts()} type="checkbox" name="all" />
                        </div>
                        <div className="all">
                            <h3>tee-shirt</h3>
                            <input
                                onClick={() => filter("tee-shirt")}
                                type="checkbox"
                                name="tee-shirt"
                            />
                        </div>
                        <div className="all">
                            <h3>chaussures</h3>
                            <input
                                onClick={() => filter("chaussure")}
                                type="checkbox"
                                name="chaussure"
                            />
                        </div>
                    </div>
                </div>
                <div className="barniereDroit">
                    <div id="allProdcut" className="contenant">
                        {product.map((produits) => (
                            <div key={produits.id} className="content">
                                <Link to={`/product/${produits.id}`}>
                                    <img src={produits.image} alt={produits.name} />
                                </Link>

                                <h2>{produits.name}</h2>
                                <p>{produits.category}</p>

                                <div>
                                    {!cardItems[produits.id] ? (
                                        <IoMdAddCircle onClick={() => addToCard(produits.id)} />
                                    ) : (
                                        <div>
                                            <FaMinusCircle onClick={() => removeToCard(produits.id)} />
                                            <p>{cardItems[produits.id]}</p>
                                            <IoMdAddCircle onClick={() => addToCard(produits.id)} />
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
