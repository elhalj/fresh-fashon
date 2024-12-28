import { Link, NavLink, Outlet } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";


function Acceuil() {
    return (
        <>
            <header className="NavLink">
                <nav>
                    <div className='Lien'>
                        <div className='Logo'><a href=""><img src="" alt="fresh" /><span>freshFashon</span></a></div>
                        <ul>
                            <li><NavLink to='/home'>Home</NavLink></li>
                            <li><a href='catalogue'>Catalogue</a></li>
                            <li><NavLink to='#'>Femme</NavLink></li>
                            <li><NavLink to='#'>Enfant</NavLink></li>
                            <li><NavLink to='#'>Autre categorie</NavLink></li>
                        </ul>
                    </div>
                    <div className="Search">
                        <form action="">
                            <input type="text" placeholder='recherche article' />
                            
                            <div className="ser"><CiSearch /></div>
                        </form>
                        {/* logo connexion */}
                        <div className="log-con">
                            <FaUser />
                            Login
                        </div>
                        {/* logo connexion */}

                        {/* logo panier */}

                        {/* logo panier */}
                    </div>
                </nav>
            </header>

            <Outlet />
        </>
    );
}

export default Acceuil;