
import React from 'react';
import {Card ,Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar2 from '../../../components/NavBar2/NavBar2';
import Footer from '../../../components/Footer/Footer';

const BénéficiaireActuel = () => {
    const beneficiairesActuels = [
        {
          titre: "Projet de Conservation des Tortues Marines",
          description: "Un programme de protection des nids de tortues marines sur les plages menacées.",
          impact: "Augmentation des taux de survie des œufs et des nouveau-nés.",
        },
        {
          titre: "Réhabilitation de la Forêt Amazonienne",
          description: "Soutien financier pour la restauration des zones déboisées dans la forêt amazonienne.",
          impact: "Récupération de la biodiversité et préservation des habitats uniques.",
        },
        {
          titre: "Programme de Recherche sur les Rhinocéros Blancs",
          description: "Financement de la recherche scientifique sur le comportement et la reproduction des rhinocéros blancs.",
          impact: "Informations cruciales pour la gestion et la conservation de l'espèce.",
        },
      ];
    const beneficiairesData = [
        {
          nom: "Association pour la Protection des Oiseaux Rares",
          mission: "Protection des espèces d'oiseaux rares en voie de disparition.",
          siteWeb: "https://www.apor.org/",
        },
        {
          nom: "Fondation pour la Sauvegarde des Mammifères Menacés",
          mission: "Conservation et préservation des mammifères en danger critique d'extinction.",
          siteWeb: "https://www.fsmm.org/",
        },
        {
          nom: "Société de Protection des Reptiles en Péril",
          mission: "Sauvegarde des reptiles menacés et sensibilisation du public à leur importance.",
          siteWeb: "https://www.sprp.org/",
        },
        {
          nom: "Fonds Mondial pour la Protection des Plantes Rares",
          mission: "Préservation la diversité végétale en protégeant les plantes rares et menacées.",
          siteWeb: "https://www.fmppr.org/",
        },
      ];
    
      return (
        <>
        <header className='home-page-header'>
        <NavBar2></NavBar2> 
      </header>
        <Container className="mt-5">
          <h1>Bénéficiaires Actuels de l'Association</h1>
          <Row>
            <h2>Projets et Programmes :</h2>
            {beneficiairesActuels.map((beneficiaire, index) =>(
            <Col key={index} md={6} lg={4} className="mb-4">
                <Card>
                <Card.Body>
                    <Card.Title>{beneficiaire.titre}</Card.Title>
                    <Card.Text>{beneficiaire.description}</Card.Text>
                    <Card.Text><strong>Impact:</strong> {beneficiaire.impact}</Card.Text>
                </Card.Body>
                </Card>
             </Col>
            ))}
          </Row>
          <Row>
            <h2>Associations : </h2>
            {beneficiairesData.map((beneficiaire, index) => (
              <Col key={index} md={6} lg={4} className="mb-4">
                <Card>
                  <Card.Body>
                    <Card.Title>{beneficiaire.nom}</Card.Title>
                    <Card.Text>{beneficiaire.mission}</Card.Text>
                    <Card.Link href={beneficiaire.siteWeb} target="_blank" rel="noopener noreferrer">
                      Visiter le Site Web
                    </Card.Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
         
        </Container>
        <Footer></Footer>
        </>
      );
    };
export default BénéficiaireActuel;
