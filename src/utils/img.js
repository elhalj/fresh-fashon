// import { type } from "@testing-library/user-event/dist/type";
// product
import garcon1 from "./assets/image/g1.jpg"
import garcon2 from "./assets/image/g2.avif"
import garcon3 from "./assets/image/g3.jpg"
import garcon4 from "./assets/image/g4.jpg"
import garcon5 from "./assets/image/g5.png"
import fille1 from "./assets/image/f1.jpg"
import fille2 from "./assets/image/f2.png"
import fille3 from "./assets/image/f3.jpg"
import fille4 from "./assets/image/f4.png"
import fille5 from "./assets/image/f5.png"
import fille6 from "./assets/image/f6.png"
import fille7 from "./assets/image/f7.jpg"

// category
import Chaussure from "./assets/image/chaussures.jpg"
import Pantalon from "./assets/image/pentl1.jpeg"
import TeeShirt from "./assets/image/teshirt.avif"
import Television from "./assets/image/tele.jpg"
import Casque from "./assets/image/premium_photo-1679513691474-73102089c117.jpeg"
import Ordinateur from "./assets/image/ordiPortable.webp"
import Jouets from "./assets/image/jouet.jpeg"
import Portable from "./assets/image/port.webp"

const category = [
    {
        category:"Chaussure",
        image:Chaussure
    },
    {
        category:"Pantalon",
        image:Pantalon
    },
    {
        category:"TeeShirt",
        image:TeeShirt
    },
    {
        category:"Television",
        image:Television
    },
    {
        category:"Casque",
        image:Casque
    },
    {
        category:"Ordinateur",
        image:Ordinateur
    },
    {
        category:"Jouets",
        image:Jouets
    },
    {
        category:"Portable",
        image:Portable
    },
]


export const product = [
    {
        id:1,
        name:"pull et short",
        image:garcon1,
        price:3000,
        category:"TeeShirt",
        description:"pull et short pour garcon",
        stock:10,
    },
    {
        id:2,
        name:"complet short et t-shirt",
        image:garcon2,
        price:2500,
        category:"TeeShirt",
        description:"complet short et t-shirt pour garcon",
        stock:10,
    },
    {
        id:3,
        name:"complet jacket et pantalon",
        image:garcon3,
        price:4000,
        category:"Pantalon",
        description:"complet jacket et pantalon pour garcon",
        stock:10,
    },
    {
        id:4,
        name:"complet ",
        image:garcon4,
        price:2000,
        category:"TeeShirt",
        description:"complet pour garcon",
        stock:10,
    },
    {
        id:5,
        name:"complet short et haut",
        image:garcon5,
        price:5000,
        category:"Pantalon",
        description:"complet short et haut pour garcon",
        stock:10,
    },
    {
        id:6,
        name:"protege corps",
        image:fille1,
        price:3000,
        category:"TeeShirt",
        description:"protege corps pour fille",
        stock:10,
    },
    {
        id:7,
        name:"mini jupe",
        image:fille2,
        price:1000,
        category:"Pantalon",
        description:"mini jupe pour fille",
        stock:10,
    },
    {
        id:8,
        name:"pijama",
        image:fille3,
        price:1600,
        category:"TeeShirt",
        description:"pijama pour fille",
        stock:10,
    },
    {
        id:9,
        name:"pull tendance",
        image:fille4,
        price:8000,
        category:"TeeShirt",
        description:"pull contre le froid extreme",
        stock:10,
    },
    {
        id:10,
        name:"tendance complet",
        image:fille5,
        price:3000,
        category:"TeeShirt",
        description:"tendance complet pour fille",
        stock:10,
    },
    {
        id:11,
        name:"robe",
        image:fille6,
        price:10000,
        category:"TeeShirt",
        description:"mini robe de couleur rouge pour les sorties",
        stock:10,
    },
    {
        id:12,
        name:"robe",
        image:fille7,
        price:9000,
        category:"TeeShirt",
        description:"mini robe de couleur kaki",
        stock:10,
    },
]

export default category;