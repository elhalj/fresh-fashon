




import React, { createContext, useEffect, useState } from 'react'
import category, { product } from '../utils/img';

export const ShopContext = createContext(null);

const ShoppingContextProvider = (props) => {

    const [cardItems, setCardItems] = useState(() => {
        const storedCardItems = localStorage.getItem('cardItems');
        return storedCardItems ? JSON.parse(storedCardItems) : {};
    });

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
        for(const item in cardItems){
            if(cardItems[item] > 0){
                let infoItem = product.find((e) => e.id === parseInt(item));
                if(infoItem){
                    total += infoItem.price * cardItems[item];
                }
            }
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
        localStorage.setItem('cardItems', JSON.stringify(cardItems));//stocker les donnee dans la memoire de l'appareil de l'utilisateur pour eviter de les perdres lors du rechargement
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
