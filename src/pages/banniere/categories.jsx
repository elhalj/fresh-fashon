import { Link } from 'react-router-dom';
import { ShopContext } from '../../context/ShoppingContext';
import './categories.css'


import React, { useContext, useState } from 'react'

export default function Categorie() {

    const {category} = useContext(ShopContext);

    const [trending, setTrending] = useState(category);

    // filterCate

    const filterCate = (x) => {
        const filterProduct = category.filter(curEl => {
            return curEl.category === x
        })
        setTrending(filterProduct);
    }

    

    const allTrending = () => {
        setTrending(category)
    }
    return (
        <div className="trending">
            <div className="container-fluid">
                <div className="box-left">
                    <div className="box">
                        <div className="navi">
                            <h1>trending</h1>
                           
                        </div>
                        <div id='categorie' className="cat">
                            {trending.map(curEl => {
                                return (
                                    <div id={curEl.id} key={curEl.category} className="content" >
                                        <div>
                                            <div className="im">
                                                <img src={curEl.image} alt={curEl.nom} />
                                            </div>
                                            <div className="text">
                                                <h2>{curEl.category}</h2>
                                                <button type='submit'><Link to='catalogue'>VOIR</Link></button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>



    )
}
