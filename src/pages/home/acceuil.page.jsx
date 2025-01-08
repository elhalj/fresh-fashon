import { Link, NavLink, Outlet } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { FaBasketShopping } from "react-icons/fa6";
import Footer from "../footer/foot";
import { useState } from "react";
import Homeproducts from "../../utils/img";
import Header from "../../components/Header";
import logo from './images.jpeg';
// import { useState } from "react";
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';


function Acceuil() {
    // const [rechercher, setRechercher] = useState([]);
    // const recherche = (x) => {

    //     setRechercher(recherche)
    // }
    const [trending, setTrending] = useState(Homeproducts);
    const [isActive, setIsActive] = useState("HOME");// HOME, CATALOGUE, SHOP, CONTACT
    // filterCate

    const filterCate = (e) => {
        // e.preventdefault()
        const filterProduct = Homeproducts.filter(curEl => {
            return curEl.type === e
        })
        setTrending(filterProduct);
    }

    return (
        <>

            
            <header className="NavLink">
                <nav>
                    <div className='Lien'>
                        <div className='Logo'><a href="/"><img src={logo} alt="fresh" /></a></div>
                        <ul>
                            {/* <li><NavLink to='/home'>Home</NavLink></li> */}
                            <li><Link to='/' onClick={() => setIsActive("HOME")} className={isActive ==="HOME" ? "active-link" : ""}>HOME</Link></li>
                            <li><NavLink to='/catalogue' onClick={() => setIsActive("CATALOGUE")} className={isActive ==="CATALOGUE" ? "active-link" : ""}>CATALOGUE</NavLink></li>
                            <li><NavLink to='#' onClick={() => setIsActive("SHOP")} className={isActive ==="SHOP" ? "active-link" : ""}>SHOP</NavLink></li>
                            <li><NavLink to='#' onClick={() => setIsActive("CONTACT")} className={isActive ==="CONTACT" ? "active-link" : ""}>CONTACT</NavLink></li>
                        </ul>
                    </div>
                    <div className="Search">
                        <form action="">
                            <input type="text" placeholder='recherche article' onChange={(e) => filterCate(e)}/>

                            <div className="ser"><CiSearch /></div>
                        </form>
                        {/* logo connexion */}
                        <div className="log-con">
                            <Link to="/login">
                                <FaUser />
                                Login
                            </Link>
                        </div>
                        {/* logo connexion */}

                        {/* logo panier */}
                        <div className="pan">
                            <Link to="/panier"><FaBasketShopping /></Link>
                        </div>
                        {/* logo panier */}
                    </div>
                </nav>
            </header>
            {/* <HomePage/> */}
            {/* <Footer /> */}
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}

export default Acceuil;