import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Footer from '../../components/Footer/Footer'
import PaymentCard from './forms/Payment/PaymentCard'
import Coordonnes from './forms/Coordonnées/Coordonnes'
import Montant from './forms/Montant/Montant'
import './FaireUnDon.css'
function FaireUnDon() {
  return (
    <>
    <Container>
      <Row className='don-title-row'>
        <h1>Votre monnaie est entre de bonnes mains</h1>
      </Row>
        <Row>
            <Col>
                <Coordonnes></Coordonnes>
            </Col>
            <Col>
                <Row>
                  <Montant></Montant>
                </Row>
                <Row>
                  <PaymentCard></PaymentCard>
                </Row>
            </Col>
        </Row>
    </Container>
    <Footer></Footer>
        
    </>
  )
}

export default FaireUnDon