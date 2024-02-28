import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Footer from '../../components/Footer/Footer'
import PaymentCard from './forms/Payment/PaymentCard'
import Coordonnes from './forms/Coordonnées/Coordonnes'
import Montant from './forms/Montant/Montant'
import './FaireUnDon.css'
import NavBar2 from '../../components/NavBar2/NavBar2'
function FaireUnDon() {
  return (
    <>
    <header className='home-page-header'>
        <NavBar2></NavBar2> 
      </header>
    <Container className='don-container'>
      <Row className='don-title-row'>
        <h1>Votre monnaie est entre de bonnes mains</h1>
      </Row>
        <Row className='don-row'>
            <Col className='don-col'>
                <Coordonnes></Coordonnes>
            </Col>
            <Col className='don-sub-col'>
                <Row className='don-row'>
                  <Montant></Montant>
                </Row>
                <Row className='don-sub-row'>
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