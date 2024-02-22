import React from 'react';
import './Partenaires.css'
import NavBar2 from '../../components/NavBar2/NavBar2';

const PartenaireEntreprise = () => {
     
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
        <img src="./images/green-yellow.png" className='img-style'/>
        <div className='content'>
        <p>Green Yellow</p>
        <a href='https://fr.greenyellow.com/fr'>Visit Website</a>
        </div>
    </div>
    <div className='partenaire'>
        <img src="./images/R.png" className='img-style'/>
        <div className='content'>
        <p> Banque Zitouna </p>
        <a href='https://www.banquezitouna.com/fr'>Visit Website</a>
        </div>
    </div>
    <div className='partenaire'>
        <img src="./images/OIP (15).jpg" className='img-style'/>
        <div className='content'>
        <p>Biofire </p>
        <a href='https://www.biofire.tn/?fbclid=IwAR0CwAmWL_nvu4IAelLIfxtfOn-NiG94Ed20XlYMl1oxsZA6fKH-EYP7hiM'>Visit Website</a>
        </div>
    </div>
    <div className='partenaire'>
        <img src="./images/2864680_th1.jpg" className='img-style'/>
        <div className='content'>
        <p>MONSAPO Tunisie</p>
        <a href='https://monsapo.com/'>Visit Website</a>
        </div>
    </div>
   </section>
    </>
    )
}

export default PartenaireEntreprise;

