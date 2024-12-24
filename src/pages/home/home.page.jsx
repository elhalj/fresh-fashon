import ControlledCarousel from '../components/carrousel';
import './home.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function HomePage() {
    return (
        <>
            <header className="NavLink">
                <nav>
                    <div className='Lien'>
                        <div className='Logo'><a href=""><img src="" alt="fresh" /><span>freshFashon</span></a></div>
                        <ul>
                            <li><a href='#'>Homme</a></li>
                            <li><a href='#'>Femme</a></li>
                            <li><a href='#'>Enfant</a></li>
                            <li><a href='#'>Autre categorie</a></li>
                        </ul>
                    </div>
                    <div className="Search">
                        <form action="">
                            <input type="text" placeholder='recherche article' />
                        </form>
                        {/* logo connexion */}

                        {/* logo connexion */}

                        {/* logo panier */}

                        {/* logo panier */}
                    </div>
                </nav>
            </header>

            {/* carroussel */}
            <section>
                <ControlledCarousel />
            </section>
            {/* carroussel */}


            {/* content homePage */}

            <main>
                {/* petite presentation */}
                <div className="FirstDiv">
                    <div className="F1">
                        <h3>Etihage, flex, conquete</h3>
                        <h1>tenue pour <br />toute la journee</h1>
                        <button type='submit'>acheter maintenant</button>
                    </div>
                    <div className="F2">
                        <h3>Le confort repond a la confiance</h3>
                        <h1>tenu pour <br />toute occasion</h1>
                        <button type='submit'>acheter maintenant</button>
                    </div>
                </div>
                {/* petite presentation */}

                {/* carte du jour */}
                <div className="GiftCard">
                    <h3>obternir carte simple</h3>
                    <h2>donner une carte</h2>
                    <div>
                        <a href="">obtenir maintenant</a>
                    </div>
                </div>
                {/* carte du jour */}
            </main>
        </>
    );
}

export default HomePage;