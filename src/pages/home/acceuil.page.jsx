import { Link, NavLink, Outlet } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { FaBasketShopping } from "react-icons/fa6";
import Footer from "../footer/foot";
import { useContext, useState } from "react";
import logo from "./images.jpeg";
import { ShopContext } from "../../context/ShoppingContext";
// import { useState } from "react";
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

function Acceuil() {
    // const [rechercher, setRechercher] = useState([]);
    // const recherche = (x) => {

    //     setRechercher(recherche)
    // }
    const { product } = useContext(ShopContext);
    const [filterProduct, setFilterProduct] = useState([]);
    const [isActive, setIsActive] = useState(""); // HOME, CATALOGUE, SHOP, CONTACT
    // filterCate

    const handleSearch = (e) => {
        // e.preventdefault()
        const filterProduct = product.filter((curEl) => {
            return curEl.name.toLowerCase().includes(e.target.value.toLowerCase());

        });
        setFilterProduct(filterProduct);
    };

    return (
        <>
            <header className="NavLink">
                <nav>
                    <div className="Lien">
                        <div className="Logo">
                            <a href="/">
                                <img src={logo} alt="fresh" />
                            </a>
                        </div>
                        <ul>
                            {/* <li><NavLink to='/home'>Home</NavLink></li> */}
                            <li>
                                <Link
                                    to="/"
                                    onClick={() => setIsActive("HOME")}
                                    className={isActive === "HOME" ? "active-link" : ""}
                                >
                                    HOME
                                </Link>
                            </li>
                            <li>
                                <NavLink
                                    to="/catalogue"
                                    onClick={() => setIsActive("CATALOGUE")}
                                    className={isActive === "CATALOGUE" ? "active-link" : ""}
                                >
                                    CATALOGUE
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="#"
                                    onClick={() => setIsActive("SHOP")}
                                    className={isActive === "SHOP" ? "active-link" : ""}
                                >
                                    SHOP
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="#"
                                    onClick={() => setIsActive("CONTACT")}
                                    className={isActive === "CONTACT" ? "active-link" : ""}
                                >
                                    CONTACT
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="Search">
                        <form action="">
                            <input
                                type="text"
                                placeholder="recherche article"
                                onChange={handleSearch}
                            />

                            <div className="ser">
                                <CiSearch />
                            </div>
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
                            <Link to="/panier">
                                <FaBasketShopping />
                            </Link>
                        </div>
                        {/* logo panier */}
                    </div>
                </nav>
                {filterProduct.length > 0 ? (<div style={{ position: "fixed", top: "130px", zIndex: "20", width: "100%", background: "aliceblue" }}>
                    {filterProduct.map((e) => {
                        return (
                            <div
                                key={e.id}
                                style={{
                                    display: "flex",
                                    justifyContent: "space-around",
                                }}
                            >
                                <p>{e.name}</p>
                                <div>
                                    <img
                                        src={e.image}
                                        alt=""
                                        style={{
                                            height: "30px",
                                            width: "30px",
                                            objectFit: "contain",
                                        }}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>) : ("")}
                
            </header>
            {/* <HomePage/> */}
            {/* <Footer /> */}
            <Outlet />
            <Footer />
        </>
    );
}

export default Acceuil;
