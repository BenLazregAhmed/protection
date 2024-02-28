import React, { useState } from 'react';
import './DevenirBénéficaire.css'
import NavBar2 from '../../../components/NavBar2/NavBar2'
import Footer from '../../../../src/components/Footer/Footer';
function DevenirBénéficaire() {
  
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [raison, setRaison] = useState('');

 
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulaire soumis avec les données :', { nom, prenom, email, raison });
    setNom('');
    setPrenom('');
    setEmail('');
    setRaison('');
  };

  return (
    <>
    <header className='home-page-header'>
        <NavBar2></NavBar2> 
      </header>
    <div className='formStyle'>
      <h1 className='BénéfTitle'>Devenir Bénéficiaire</h1>
      <form onSubmit={handleSubmit}>
        <label className='champsLabel'>
         <p> Nom </p>
          <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} required />
        </label>
        <br></br>
        <label className='champsLabel'>
          <p>Prénom </p>
          <input type="text" value={prenom} onChange={(e) => setPrenom(e.target.value)} required />
        </label>
        <br></br>
        <label className='champsLabel'>
          <p> Email </p>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <br></br>
        <label className='champsLabel'>
          <p>Raison pour devenir bénéficiaire </p>
          <textarea value={raison} onChange={(e) => setRaison(e.target.value)} required />
        </label>
       <br></br>
        <button type="submit" className='btnValider'>Valider</button>
        
      </form>
    </div>
    <Footer></Footer>
    </>
  );
}

export default DevenirBénéficaire;
