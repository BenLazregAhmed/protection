import React, { useState } from 'react';
import './DevenirBénéficaire.css'
import NavBar2 from '../../../components/NavBar2/NavBar2'
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
    <NavBar2/>
    <div className='formStyle'>
      <h1>Devenir Bénéficiaire</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nom : 
          <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} required />
        </label>
        <br />
        <label>
          Prénom :
          <input type="text" value={prenom} onChange={(e) => setPrenom(e.target.value)} required />
        </label>
        <br />
        <label>
          Email :
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <br />
        <label>
          Raison pour devenir bénéficiaire :
          <textarea value={raison} onChange={(e) => setRaison(e.target.value)} required />
        </label>
        <br />
        <button type="submit">Soumettre</button>
      </form>
    </div>
    </>
  );
}

export default DevenirBénéficaire;
