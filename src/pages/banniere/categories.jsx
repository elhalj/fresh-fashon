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
            <div className="container">
                <div className="box-left">
                    <div className="box">
                        <div className="navi">
                            <h1>trending</h1>
                            <div className="navi-trending">
                                <p onClick={() => filterCate("Chaussure")}>Chaussure</p>
                                <p onClick={() => filterCate("TeeShirt")}>TeeShirt</p>
                                <p onClick={() => filterCate("Television")}>Televison</p>
                                <p onClick={() => filterCate("Pantalon")}>Pantalon</p>
                                <p onClick={() => filterCate("Casque")}>Casque</p>
                                <p onClick={() => filterCate("Ordinateur")}>Ordinateur</p>
                                <p onClick={() => filterCate("Jouets")}>Jouet</p>
                                <p onClick={() => filterCate("Portable")}>Portable</p>
                                <p onClick={() => allTrending()}>allCategorie</p>
                            </div>
                        </div>
                        <div id='categorie' className="cat">
                            {trending.map(curEl => {
                                return (
                                    <div id={curEl.id} key={curEl.id} className="content" >
                                        <div>
                                            <div className="im">
                                                <img src={curEl.image} alt={curEl.nom} />
                                            </div>
                                            <div className="text">
                                                <h2>{curEl.category}</h2>
                                                <button type='submit'>VOIR</button>
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
