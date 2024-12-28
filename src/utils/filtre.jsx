

import React, { useState } from 'react'
import Homeproducts from './img';

export default function Filtr() {
    const [trending, setTrending] = useState(Homeproducts);

    // filterCate

    const filterCate = (e) => {
        // e.preventdefault()
        const filterProduct = Homeproducts.filter(curEl => {
            return curEl.type === e
        })
        setTrending(filterProduct);
    }
  return (
    <div>
      
      {trending && filterCate.map((curEl) => {
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
  )
}
