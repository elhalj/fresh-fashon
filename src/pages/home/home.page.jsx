import ControlledCarousel from '../../components/carrousel';
import Homeproducts from '../../utils/img';
import Categorie from '../banniere/categories';
import './home.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function HomePage() {
    return (
        <>

            

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
                    <h1>donner une carte</h1>
                    <div>
                        <a href="">obtenir maintenant</a>
                    </div>
                </div>
                {/* carte du jour */}

                {/* Tendance */}
                <div className="TendanceCard">
                    <div className="TendanceText">
                        <p>Tendance Tops</p>
                    </div>
                    <div className="Tcards" style={{display:"flex",justifyContent:"space-around"}}>
                        <div className="Tcard1" style={{textAlign:"center", alignContent:"center"}}><a href=""><img src="https://www.loding.fr/cdn/shop/files/pull-col-v-laine-merinos-vert-pour-homme.jpg?v=1702574494" alt="" style={{height:"400px", width:"400px"}}/></a></div>
                        <div className="Tcard2" style={{textAlign:"center", alignContent:"center"}}><a href=""><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrqDkiR7NF6j5nFXNni4-zqai1lKN8KiRcVv_qaQhc85687I8RezB1j0ak6_cRr4Mb3HQ&usqp=CAU" alt="" style={{height:"400px", width:"400px"}}/></a></div>
                        <div className="Tcard3" style={{textAlign:"center", alignContent:"center"}}><a href=""><img src="https://i.pinimg.com/550x/cf/27/af/cf27afb1f43f254d10d6b73874685d38.jpg" alt="" style={{height:"400px", width:"400px"}}/></a></div>
                        <div className="Tcard3" style={{textAlign:"center", alignContent:"center"}}><a href=""><img src="https://thumbs.dreamstime.com/b/mod%C3%A8le-caucasien-s-r-de-forme-physique-dans-des-mains-debout-de-v%C3%AAtements-de-sport-noirs-sur-des-hanches-regardant-l-appareil-93312216.jpg" alt="" style={{height:"400px", width:"400px"}}/></a></div>
                    </div>
                </div>
                <Categorie   />
            </main>
        </>
    );
}

export default HomePage;