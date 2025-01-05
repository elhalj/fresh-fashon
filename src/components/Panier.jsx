

import './panier.css'

import React from 'react'

function Panier() {
    return (
        <>
            <div className="panier">
                <h1>Mon panier</h1>
                <div className="panier__content">
                    <div className="panier__item">
                        <div className="panier__item__img">
                            <img src="https://via.placeholder.com/150" alt="item" />
                        </div>
                        <div className="panier__item__info">
                            <h4>item name</h4>
                            <p>item price</p>
                            <p>item quantity</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Panier
