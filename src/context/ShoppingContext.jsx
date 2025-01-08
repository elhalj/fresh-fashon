




import React, { createContext, useEffect, useState } from 'react'
import category, { product } from '../utils/img';

export const ShopContext = createContext(null);

const ShoppingContextProvider = (props) => {

    const [cardItems, setCardItems] = useState({});
    const addToCard = (itemId) => {
        if (!cardItems[itemId]) {
            setCardItems((prev) => ({ ...prev, [itemId]: 1 }))
        } else {
            setCardItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        }
    }
    const removeToCard = (itemId) => {
        setCardItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1}))
    }

    const getTotalItems = () => {
        let  total = 0;
        for(const item of cardItems){
            let infodItem = product.find((product) => product.id === item);
            total += infodItem.prix * cardItems[item];
        }
        return total;
    }

    useEffect(() => {
        console.log(cardItems)
    }, [cardItems])

    const contextValue = { category, product, cardItems, setCardItems, addToCard, removeToCard, getTotalItems }

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShoppingContextProvider
