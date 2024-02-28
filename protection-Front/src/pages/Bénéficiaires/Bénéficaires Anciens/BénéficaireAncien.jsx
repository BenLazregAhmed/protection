import React from 'react'
import NavBar2 from '../../../components/NavBar2/NavBar2'
import { Container,Card,Row,Col } from 'react-bootstrap';
import Footer from '../../../components/Footer/Footer';
import '../Bénéficaires Actuels/BénéficiaireActuel.css'
function BénéficaireAncien() {
    const beneficiairesAnciens = [
        {
          titre: "Réintroduction des Loups Gris en Milieu Sauvage",
          description: "Un projet visant à réintroduire des loups gris dans des zones où ils avaient disparu.",
          impact: "Succès de la réintroduction avec une population stable.",
        },
        {
          titre: "Programme de Protection des Oiseaux Migrateurs",
          description: "Ancien programme de suivi des oiseaux migrateurs le long de leurs itinéraires.",
          impact: "Collecte de données cruciales pour les politiques de conservation, mais le projet est maintenant terminé.",
        },
        {
          titre: "Initiative de Conservation des Orchidées Rares",
          description: "Ancien projet de préservation des orchidées rares menacées par la perte d'habitat.",
          impact: "Rétablissement de la population d'orchidées, mais le projet a été clôturé.",
        },

        {
            titre: "Centres de Recherche sur la Faune Sauvage",
            description: "Ancien soutien financier à des centres de recherche spécialisés dans l'étude et la conservation de la faune sauvage.",
            impact: "Avancement des connaissances scientifiques, contribution aux efforts de conservation.",
         },
         {
            titre: "Campagne Médiatique Collaborative",
            description: "Ancienne campagne médiatique impliquant des partenariats avec des médias pour diffuser des messages de conservation.",
            impact: "Sensibilisation du grand public grâce à une couverture médiatique étendue.",
         },
      ];
      

  return (
    <>
      <header className='home-page-header'>
        <NavBar2></NavBar2> 
      </header>
      <Container className="mt-5">
      <h1 className='t'>Bénéficiaires Anciens</h1>
      <Row>
        
      {beneficiairesAnciens.map((beneficiaire, index) => (
      <Col key={index} md={6} lg={4} className="mb-4">
        <Card className='card-beneficiaire'>
          <Card.Body>
            <Card.Title className='card-beneficiaire-title'>{beneficiaire.titre}</Card.Title>
            <Card.Text className='card-beneficiaire-desc' >{beneficiaire.description}</Card.Text>
            <Card.Text  ><p className='card-beneficiaire-title'><strong>Impact:</strong></p> <p className='card-beneficiaire-desc'>{beneficiaire.impact}</p></Card.Text>
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

export default BénéficaireAncien;
