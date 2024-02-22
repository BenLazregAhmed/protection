import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import './Projects.css'
import Button from 'react-bootstrap/Button';
import NavBar2 from '../../components/NavBar2/NavBar2';

const HorizontalCard = () => {

  return (
    <>
    <NavBar2 />
    
    <div className='title-div'>
    
    <Row className='row-title'><Col><h2>Listes des Projets</h2></Col></Row>
    <Container className='CardContainer'>
      <Row>
        <Col>
          <Card  className='CardHorizontal' >
            <Card.Img variant="top" src="./images/Lancement-du-programme-France-2030-Agroecologie-et-numerique.gif" className='CardHorizontal-Image' />
            <Card.Body className='b'>
              <Card.Title>Lancement du programme France 2030 « Agroecologie et numérique »</Card.Title>
              <Card.Subtitle className="mb-2 text-muted"><p class="CardHorizontal-headerInfosDate">27 octobre 2023</p></Card.Subtitle>
              <Card.Text className='CardHorizontal-intro'>
              Le programme France 2030 « Agroecologie et numérique » a été lancé le 6 janvier 2023 en présence de Sylvie Retailleau, ministre de l’Enseignement supérieur et de la Recherche et de Marc Fesneau, ministre de l’Agriculture et de la Souveraineté alimentaire. Il est piloté par INRAE et l’INRIA pour une durée de 8 ans et un montant global de 65M€.
              </Card.Text>
              {/* <Button  className='more-info' >+</Button> */}
            </Card.Body>
          </Card>
          
        </Col>
        <Col>
        <Card  className='CardHorizontal' >
            <Card.Img variant="top" src="./images/tunisie-allemagne.jpg" className='CardHorizontal-Image' />
            <Card.Body className='b'>
              <Card.Title>Climat : Lancement du projet tuniso-allemande “ProtecT”</Card.Title>
              <Card.Subtitle className="mb-2 text-muted"><p class="CardHorizontal-headerInfosDate">20 Mai 2021</p></Card.Subtitle>
              <Card.Text className='CardHorizontal-intro' >
              Le projet de partenariat tuniso-allemand en faveur du climat “Protection du Climat à travers l’économie circulaire en Tunisie”, baptisé “ProtecT”, a été officiellement lancé jeudi 20 mai 2021 à Gammarth.
              </Card.Text>
              {/* <Button  className='more-info' >+</Button> */}
            </Card.Body>
          </Card>
        </Col>
        <Col>
        <Card  className='CardHorizontal' >
            <Card.Img variant="top" src="./images/labo.jpg" className='CardHorizontal-Image' />
            <Card.Body>
              <Card.Title>La collection du CRB Tournesol au service de la biodiversité</Card.Title>
               <Card.Subtitle className="mb-2 text-muted"><p class="CardHorizontal-headerInfosDate">11 décembre 2023</p></Card.Subtitle> 
              <Card.Text className='CardHorizontal-intro'>
              C’est la première fois qu’un consortium international réunit, autour de la recherche sur le tournesol, les leaders mondiaux dans les domaines de l’écologie, des sciences économiques, de la génétique et la biotechnologie, jusqu’à l’écologie et la sélection du tournesol. Autour du projet Horizon Europe HelEx - Helianthus Extrêmophiles, ce sont 18 partenaires qui vont travailler au développement de nouvelles variétés de tournesols plus résistantes aux températures élevées et à la sécheresse en maintenant la qualité de la production et les services pour la biodiversité.
              </Card.Text>
              {/* <Button  className='more-info' >+</Button> */}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </div>
    </>
  );
};

export default HorizontalCard;
