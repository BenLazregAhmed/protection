import React from 'react'
// import MyCard from './cards/MyCard';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Actualite.css';

function Actualite() {
  return (
    <div className='actualite-div'>
    <Container>
    <Row className='row-title'><Col><h2>L'Actualités</h2></Col></Row>
      <Row className='row-card'>
        <Col xs={12} md={6} lg={3} className='col-card'>
        <Card style={{ width: '18rem' }} className='my-card'>
          <Card.Img variant="top"  src='images/parc.jpg'/>
          <Card.Body>
          <Card.Title className='date'>13/0/2023</Card.Title>
                <Card.Text className='textcontent'>
                2013-2023 : 10 ans de déclin de la biodiversité en chiffres
                </Card.Text>
            <Button variant="outline-primary">En savoir +</Button>
          </Card.Body>
        </Card>
        </Col>
        <Col xs={12} md={6} lg={3} className='col-card'>
        <Card style={{ width: '18rem' }} className='my-card'>
          <Card.Img variant="top"  src='images/seche.jpg'/>
          <Card.Body>
                <Card.Title className='date'>07/12/2022</Card.Title>
                <Card.Text className='textcontent'>
                Un nombre record de petits cours d’eau asséchés cet été
                </Card.Text>
            <Button variant="outline-primary">En savoir +</Button>
          </Card.Body>
        </Card>
        </Col>
        <Col xs={12} md={6} lg={3} className='col-card'>
        <Card style={{ width: '18rem' }} className='my-card'>
          <Card.Img variant="top"  src='images/ladybird_spider.jpg'/>
          <Card.Body>
                <Card.Title className='date'>05/04/2023</Card.Title>
                <Card.Text className='textcontent'>
                Liste rouge:Le risque d'extinction des araignées de métropole évalué pour la première fois.
                </Card.Text>
            <Button variant="outline-primary">En savoir +</Button>
          </Card.Body>
        </Card>
        </Col>
        <Col xs={12} md={6} lg={3} className='col-card'>
        <Card style={{ width: '18rem' }} className='my-card'>
          <Card.Img variant="top"  src='images/P.jpg'/>
          <Card.Body>
                <Card.Title className='date'>06/09/2022</Card.Title>
                <Card.Text className='textcontent'>
                Disparition des papillons de jour.
                </Card.Text>
            <Button variant="outline-primary">En savoir +</Button>
          </Card.Body>
        </Card>
        </Col>
    </Row>
    <Row className='row-card'>
        <Col xs={12} md={6} lg={3} className='col-card'>
        <Card style={{ width: '18rem' }} className='my-card'>
          <Card.Img variant="top"  src='images/s.png'/>
          <Card.Body>
                <Card.Title className='date'>11/02/2022</Card.Title>
                <Card.Text className='textcontent'>
                bilan du séminaire "Données sur la biodiversité"
                 des 6 et 7 avril 2021
                </Card.Text>
            <Button variant="outline-primary">En savoir +</Button>
          </Card.Body>
        </Card>
        </Col>
        <Col xs={12} md={6} lg={3} className='col-card'>
        <Card style={{ width: '18rem' }} className='my-card'>
          <Card.Img variant="top"  src='images/pollution_lumineuse_actu_header_0.jpg'/>
          <Card.Body>
                <Card.Title className='date'>04/11/2021</Card.Title>
                <Card.Text className='textcontent'>
                L’observatoire national de la biodiversité (ONB) publie son bilan 2021.
                </Card.Text>
            <Button variant="outline-primary">En savoir +</Button>
          </Card.Body>
        </Card>
        </Col>
        <Col xs={12} md={6} lg={3} className='col-card'>
        <Card style={{ width: '18rem' }} className='my-card'>
        <Card.Img variant="top"  src='images/impact activité humaine sur le vivant_0.jpg'/>
          <Card.Body>
                <Card.Title className='date'>02/05/2021</Card.Title>
                <Card.Text className='textcontent'>
                Indicateurs et outils pour mesurer l'impact de l'activité humaine sur la biodiversité. 
                </Card.Text>
            <Button variant="outline-primary">En savoir +</Button>
          </Card.Body>
        </Card>
        </Col>
        <Col xs={12} md={6} lg={3} className='col-card'>
            
        </Col>
    </Row>
    {/* <Row className='row-card'>
        <Col xs={12} md={6} lg={3} className='col-card'>
            <MyCard></MyCard>
        </Col>
        <Col xs={12} md={6} lg={3} className='col-card'>
            <MyCard></MyCard>
        </Col>
        <Col xs={12} md={6} lg={3} className='col-card'>
            <MyCard></MyCard>
        </Col>
        <Col xs={12} md={6} lg={3} className='col-card'>
            <MyCard></MyCard>
        </Col>
    </Row>
    <Row className='row-card'>
        <Col xs={12} md={6} lg={3} className='col-card'>
            <MyCard></MyCard>
        </Col>
        <Col xs={12} md={6} lg={3} className='col-card'>
            <MyCard></MyCard>
        </Col>
        <Col xs={12} md={6} lg={3} className='col-card'>
            <MyCard></MyCard>
        </Col>
        <Col xs={12} md={6} lg={3} className='col-card'>
            <MyCard></MyCard>
        </Col>
    </Row> */}
    </Container>    
    </div>
  )
}

export default Actualite