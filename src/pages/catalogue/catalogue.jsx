
import './catalogue.css';

import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Homeproducts from '../../utils/img';
import { IoMdAddCircle } from "react-icons/io";
import { FaMinusCircle } from "react-icons/fa";

export default function Catalogue() {

    const [products, setProducts] = useState(Homeproducts);
    const [quantity, setQuantity] = useState(0);
    const [total, setTotal] = useState(1);


    // filtrer les produits par nom
    const filter = (nom) => {

        const filteredProducts = Homeproducts.filter(product => product.nom === nom);
        setProducts(filteredProducts);
    }
    const allProducts = () => {
        setProducts(Homeproducts);
    }
    const { id, image } = useParams();
    return (

        <>
            <div className="contenu">
                <div className="barniereGauche">
                    <div className="contenant">

                        <div className="all">
                            <h3>All</h3>
                            <input onClick={() => allProducts()} type="checkbox" name='all' />
                        </div>
                        <div className="all">
                            <h3>tee-shirt</h3>
                            <input onClick={() => filter("tee-shirt")} type="checkbox" name='tee-shirt' />
                        </div>
                        <div className="all">
                            <h3>chaussures</h3>
                            <input onClick={() => filter("chaussure")} type="checkbox" name='chaussure' />
                        </div>
                    </div>
                </div>
                <div className="barniereDroit">
                    <div className="contenant">
                        {products.map(product => (
                            <div key={product.id} className="content" >
                                <Link to={product.nom}><img src={product.image} alt={product.nom} />
                                    <h2>{product.nom}</h2>
                                    <p>{product.type}</p>
                                </Link>
                                <div>
                                    <FaMinusCircle style={{ cursor: "pointer" }} onClick={() => setQuantity(prev => prev[product.id] - 1)} /><p>{quantity}</p><IoMdAddCircle style={{ cursor: "pointer" }} onClick={() => setQuantity(prev => prev + 1)} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
