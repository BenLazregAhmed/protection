import React from 'react'
import DevinirCard from '../CustomCard/DevinirCard'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import './Explorer.css'
function Explorer() {
  return (
    <Container>
        <Row className='rowCardDevenirExplorer' lg='auto'>
            <DevinirCard icon={<i className="fa-solid fa-chart-simple fa-2xl"></i>} text={'Nos Plans'}></DevinirCard>
            <DevinirCard icon={<i className="fa-solid fa-chalkboard-user fa-2xl"></i>} text={'Nos Formations'}></DevinirCard>
            <DevinirCard icon={<i className="fa-solid fa-diagram-project fa-2xl"></i>} text={'Nos Projets'}></DevinirCard>
            <DevinirCard icon={<i className="fa-solid fa-handshake fa-2xl"></i>} text={'Nos Partenaire'}></DevinirCard>
        </Row>
    </Container>
  )
}

export default Explorer