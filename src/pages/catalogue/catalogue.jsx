


import React, { useState } from 'react'
import Banier from '../banniere/banier'
import Footer from '../footer/foot'
import Homeproducts from '../../utils/img';
import Filtr from '../../utils/filtre';

export default function Catalogue() {
    
    return (

        <div>
            <Banier fil={<Filtr />} />
            <Footer />
        </div>
    )
}
