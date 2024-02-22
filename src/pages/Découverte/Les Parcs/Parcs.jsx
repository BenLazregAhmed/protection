import React from 'react';
import './Parcs.css'
import NavBar from '../../../components/NavBar/NavBar';


const Parcs = () => {
     
  return (
    <>
  <NavBar/>
    <div className='c'>
    <h1 className='headingStyle' >
    La liste des parcs
    </h1>
    </div>
    <section class="parcs">
    <div className='parc'>
    <div className='parc1'>
        <div className='contenu'>
        <p className='pt'>Parc national de Ichkeul</p>
        <a href='https://fr.wikipedia.org/wiki/Parc_national_de_l%27Ichkeul'>Explorer +</a>
        </div>
    </div>
    </div>
    <div className='parc'>
    <div className='parc2'>
        <div className='contenu'>
        <p className='pt'>Le Parc national de Jbil</p>
        <a href='https://guide-voyage-tunisie.com/le-parc-national-de-jbil/'>Explorer +</a>
        </div>
    </div>
    </div>
    <div className='parc'>
    <div className='parc3'>
        <div className='contenu'>
        <p className='pt'>Le parc national Boukornine</p>
        <a href='https://guide-voyage-tunisie.com/le-parc-national-boukornine/'>Explorer +</a>
        </div>
    </div>
    </div>
    <div className='parc'>
    <div className='parc4'>
        <div className='contenu'>
           <p className='pt'>Le parc national de Jebel Zaghouan</p>
           <a href='https://fr.wikipedia.org/wiki/Parc_national_de_Jebel_Zaghouan'>Explorer +</a>
        </div>
    </div>
    </div>
    <div className='parc'>
    <div className='parc5'>
        <div className='contenu'>
           <p className='pt'>Le parc national Jebel Chitana Cap Négro</p>
           <a href='https://fr.wikipedia.org/wiki/Parc_national_de_Jebel_Chitana-Cap_N%C3%A9gro'>Explorer +</a>
        </div>
    </div>
    </div>
    {/* <div className='parc'>
    <div className='parc6'>
        <div className='contenu'>
           <p className='pt'>Parc national de Bouhedma</p>
           <a href='https://fr.wikipedia.org/wiki/Parc_national_de_Bouhedma'>Explorer +</a>
        </div>
    </div>
    </div> */}
   </section>
    </>
    )
}

export default Parcs

