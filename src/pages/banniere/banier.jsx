import Homeproducts from '../../utils/img';
import './banier.css'


import React, { useState } from 'react'

export default function Banier({fil}) {

    const [trending, setTrending] = useState(Homeproducts);

    // filterCate

    const filterCate = (x) => {
        const filterProduct = Homeproducts.filter(curEl => {
            return curEl.type === x
        })
        setTrending(filterProduct);
    }

    

    const allTrending = () => {
        setTrending(Homeproducts)
    }
    return (
        <div className="trending">
            <div className="container">
                <div className="box-left">
                    <div className="box">
                        <div className="navi">
                            <h1>trending</h1>
                            <div className="navi-trending">
                                <p onClick={() => filterCate("top")}>top</p>
                                <p onClick={() => filterCate("new")}>new</p>
                                <p onClick={() => filterCate("feature")}>feature</p>
                                <p onClick={() => allTrending()}>allCategorie</p>
                            </div>
                        </div>
                        <div className="cat">
                            {trending.map(curEl => {
                                return (
                                    <div key={curEl.id} className="content" >
                                        <div>
                                            <div className="im">
                                                <img src={curEl.image} alt={curEl.nom} />
                                            </div>
                                            <div className="text">
                                                <h2>{curEl.nom}</h2>
                                                <p>{curEl.type}</p>
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
