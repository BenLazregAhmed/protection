import React from 'react'
import DevinirCard from '../CustomCard/DevinirCard'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import { Col } from 'react-bootstrap';
import './Decouvrir.css'

function Decouvrir() {
  return (
    <Container>
        <Row className='rowCardDevenir' lg={'auto'}>
          <Col lg={'4'} sm={'2'}>
          <DevinirCard icon={<i className="fa-solid fa-tree fa-2xl"></i>} text={'Les Parcs'}></DevinirCard>
          </Col>
          <Col lg={'4'} sm={'2'}>
          <DevinirCard icon={<i className="fa-solid fa-gamepad fa-2xl"></i>} text={'Les Lieux De Loisir'}></DevinirCard>

          </Col>
          <Col lg={'4'} sm={'2'}>
          <DevinirCard icon={<i className="fa-solid fa-mountain-sun fa-2xl"></i>} text={'Les circuits naturelles'}></DevinirCard>

          </Col>
        </Row>
    </Container>
  )
}

export default Decouvrir