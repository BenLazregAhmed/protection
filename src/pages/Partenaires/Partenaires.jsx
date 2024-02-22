import React from 'react';
import './Partenaires.css'
import NavBar2 from '../../components/NavBar2/NavBar2';

const Partenaires = () => {
     
  return (
    <>
  <NavBar2 />
    <div className='c'>
    <h1 className='headingStyle' >
      Nos partenaires
    </h1>
    </div>
    <section class="partners">
    
    <div className='partenaire'>
        <img src="./images/ministere-de-lenvironnement-et-du-developpement-durable.png" className='img-style'/>
        <div className='content'>
        <p>Ministère de l'Environnement et du développement Durale</p>
        <a href='https://www.environnement.gov.tn/'>Visit Website</a>
        </div>
    </div>
    <div className='partenaire'>
        <img src="./images/OIP.jpg" className='img-style'/>
        <div className='content'>
        <p>Ministère de l'agriculture,des ressources hydrauliques et de la pèche</p>
        <a href='http://www.agriculture.tn/'>Visit Website</a>
        </div>
    </div>
    <div className='partenaire'>
        <img src="./images/R.jpg" className='img-style'/>
        <div className='content'>
        <p>Direction Générale des Forêts (DGF)</p>
        <a href='http://www.dgf.org.dz/fr'>Visit Website</a>
        </div>
    </div>
    <div className='partenaire'>
        <img src="./images/onas.jpg" className='img-style'/>
        <div className='content'>
        <p>Office National de l'Assainissement (ONAS)</p>
        <a href='http://www.onas.nat.tn/Fr/index.php?code=3'>Visit Website</a>
        </div>
    </div>
   </section>
    </>
    )
}

export default Partenaires

