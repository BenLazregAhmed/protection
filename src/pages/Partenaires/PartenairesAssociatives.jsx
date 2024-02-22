import React from 'react';
import './Partenaires.css'
import NavBar2 from '../../components/NavBar2/NavBar2';
import './PartenairesAssociatives.css'
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
        <img src="./images/greenpeace-logo.png" className='img-style'/>
        <div className='content'>
        <p>Greenpeace international</p>
        <a href='https://www.greenpeace.org/international/'>Visit Website</a>
        </div>
    </div>
    <div className='partenaire'>
        <img src="./images/Logo World Wildlife Fund.JPG" className='img-style'/>
        <div className='content'>
        <p>World Wildlife Fund (WWF)</p>
        <a href='https://www.worldwildlife.org/'>Visit Website</a>
        </div>
    </div>
    <div className='partenaire'>
        <img src="./images/OC.png"  className='img-style'/>
        <div className='content'>
        <p>Ocean Conservancy(OC)</p>
        <a href='https://oceanconservancy.org/'>Visit Website</a>
        </div>
    </div>
    
    <div className='partenaire'>
        <img src="./images/partenaire1.jpg" className='img-style' />
        <div className='content'>
        <p>Association Tunisienne de Défense de la Nature et de l'Environnement (ATDNE)</p>
        <a href='https://www.iucn.org/our-union/members/iucn-members/association-tunisienne-pour-la-protection-de-la-nature-et-de'>Visit Website</a>
        </div>
    </div>
    <div className='partenaire'>
        <img src="./images/logo-associaton-stephane-florange.png"  className='img-style'/>
        <div className='content'>
        <p>Association Stéphane Florange:Association Tunisienne de Sauvegarde de la Faune et de la Flore Marine (ATSF)
        </p>
        <a href='https://www.asso-stephaneflorange-ch.org/2021/08/23/faune-et-flore-unique-la-tunisie/'>Visit Website</a>
        </div>
    </div>
    <div className='partenaire'>
        <img src="./images/logoB.png" className='img-style'/>
        <div className='content'>
        <p>Association pour la Protection de l’Environnement et le Développement Durable de Bizerte (APEDDUB)</p>
        <a href='https://www.ppioscan.org/organisations/association-pour-la-protection-de-lenvironnement-et-le-developpement-durable-de-bizerte-apeddub/'>Visit Website</a>
        </div>
    </div>
    
   </section>
    </>
    )
}

export default Partenaires

