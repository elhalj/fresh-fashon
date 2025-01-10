




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
            let infodItem = product.find((e) => e.id === item);
            total += infodItem.prix * cardItems[item];
        }
        return total;
    }

    const totalItem  = () => {
        let total = 0;
        for (const id in cardItems) {
        total += cardItems[id];
        }
        return total;
      }

    useEffect(() => {
        console.log(cardItems)
    }, [cardItems])

    const contextValue = { category, product, cardItems, setCardItems, addToCard, removeToCard, getTotalItems, totalItem }

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShoppingContextProvider
