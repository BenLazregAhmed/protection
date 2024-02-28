
import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Signalement.css'
import NavBar2 from '../../../components/NavBar2/NavBar2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from '../../../components/Footer/Footer';


const Signalement = () => {
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Vous pouvez ajouter ici la logique pour envoyer le signalement, par exemple à une API.
    console.log('Signalement envoyé:', { description, location });
    // Réinitialisez les champs après l'envoi du signalement
    setDescription('');
    setLocation('');
  };

  return (
    <>
    <header className='home-page-header'>
        <NavBar2></NavBar2> 
      </header>
    <Container className="contenuSignal">
    {/* <FontAwesomeIcon icon="fa-solid fa-triangle-exclamation" /> */}
      <h1 className='titreSD'>Signaler un Dépassement !</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formDescription">
          <Form.Label className='st'>Description du Dépassement : </Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formLocation">
          <Form.Label className='st'>Emplacement du Dépassement : </Form.Label>
          <Form.Control
            type="text"
            placeholder="Entrez l'emplacement"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </Form.Group>
        <br></br>
        <br></br>
        <Button variant="primary" type="submit" className='signaler'>
          Envoyer le Signalement
        </Button>
      </Form>
    </Container>
    <Footer></Footer>
    </>
  );
};

export default Signalement;
