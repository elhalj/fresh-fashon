import { Link, NavLink, Outlet } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { FaBasketShopping } from "react-icons/fa6";
import HomePage from "./home.page";
import Footer from "../footer/foot";
import { useState } from "react";
import Homeproducts from "../../utils/img";
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

            {/* <Container fluid>
                <Row>
                    <Col></Col>
                </Row>
            </Container> */}
            <header className="NavLink">
                <nav>
                    <div className='Lien'>
                        <div className='Logo'><a href="/"><img src="https://freevector-images.s3.amazonaws.com/uploads/vector/preview/30757/free-vector-globe-logo-concept.jpg" alt="fresh" /></a></div>
                        <ul>
                            {/* <li><NavLink to='/home'>Home</NavLink></li> */}
                            <li><Link to='/catalogue'>Catalogue</Link></li>
                            <li><NavLink to='#'>Femme</NavLink></li>
                            <li><NavLink to='#'>Enfant</NavLink></li>
                            <li><NavLink to='#'>Autre categorie</NavLink></li>
                        </ul>
                    </div>
                    <div className="Search">
                        <form action="">
                            <input type="text" placeholder='recherche article' onChange={(e) => filterCate(e)}/>

                            <div className="ser"><CiSearch /></div>
                        </form>
                        {/* logo connexion */}
                        <div className="log-con">
                            <FaUser />
                            Login
                        </div>
                        {/* logo connexion */}

                        {/* logo panier */}
                        <div className="pan">
                            <FaBasketShopping />
                        </div>
                        {/* logo panier */}
                    </div>
                </nav>
            </header>
            {/* <HomePage/> */}
            {/* <Footer /> */}
            <Outlet />
        </>
    );
}

export default Acceuil;