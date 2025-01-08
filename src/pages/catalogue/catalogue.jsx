import "./catalogue.css";

import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ShopContext } from "../../context/ShoppingContext";
import { IoMdAddCircle } from "react-icons/io";
import { FaMinusCircle } from "react-icons/fa";

export default function Catalogue() {
    const { Homeproducts, cardItems, addToCard, removeToCard } = useContext(ShopContext);
    const [products, setProducts] = useState();

    // filtrer les produits par nom
    const filter = (nom) => {
        const filteredProducts = Homeproducts.filter(
            (product) => product.nom === nom
        );
        setProducts(filteredProducts);
    };
    // filtrer les produits par categorie
    const allProducts = () => {
        setProducts(Homeproducts);
    };

    const {product} = useParams();

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
                        {Homeproducts.map((product) => (
                            <div key={product.id} className="content">
                                <Link to={`/product/${product.id}`}>
                                    <img src={product.image} alt={product.nom} />
                                </Link>

                                <h2>{product.nom}</h2>
                                <p>{product.type}</p>

                                <div>
                                    {!cardItems[product.id] ? (
                                        <IoMdAddCircle onClick={() => addToCard(product.id)} />
                                    ) : (
                                        <div>
                                            <FaMinusCircle onClick={() => removeToCard(product.id)} />
                                            <p>{cardItems[product.id]}</p>
                                            <IoMdAddCircle onClick={() => addToCard(product.id)} />
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
