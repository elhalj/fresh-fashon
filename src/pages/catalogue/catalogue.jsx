
import './catalogue.css';

import React, { useState, useEffect } from 'react';
import Banier from '../banniere/banier'
import Footer from '../footer/foot'
import Homeproducts from '../../utils/img';
import { IoMdAddCircle } from "react-icons/io";
import { FaMinusCircle } from "react-icons/fa";

export default function Catalogue() {

    const [products, setProducts] = useState(Homeproducts);
    const [quantity, setQuantity] = useState(0);
    const [total, setTotal] = useState(1);

    useEffect(() => {
        setProducts(Homeproducts);
    }, []);

    
    const filter = (nom) => {

        const filteredProducts = Homeproducts.filter(product => product.nom === nom);
        setProducts(filteredProducts);
    }
    
    return (

        <>
            <div className="contenu">
            <div className="barniereGauche">
                <div className="contenant">
                    
                    <div className="all">
                        <h3>All</h3>
                        <input type="checkbox" name='all'/>
                    </div>
                    <div className="all">
                        <h3>tee-shirt</h3>
                        <input onClick={() => filter("tee-shirt")} type="checkbox" name='all'/>
                    </div>
                    <div className="all">
                        <h3>chaussures</h3>
                        <input onClick={() => filter("chaussure")} type="checkbox" name='all'/>
                    </div>
                </div>
            </div>
            <div className="barniereDroit">
                <div className="contenant">
                    {products.map(product => (
                        <div key={product.id} className="content" >
                            <img src={product.image} alt={product.nom} />
                            <h2>{product.nom}</h2>
                            <p>{product.type}</p>
                            <div>
                                <FaMinusCircle style={{cursor:"pointer"}} onClick={() => setQuantity(quantity - total)}/><p>{quantity}</p><IoMdAddCircle style={{cursor:"pointer"}} onClick={() => setQuantity(total + quantity)}/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            </div>
            <Footer />
        </>
    )
}
