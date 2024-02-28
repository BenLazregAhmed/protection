import React from 'react'
import DevinirCard from '../CustomCard/DevinirCard'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import './Participer.css'
import { Col } from 'react-bootstrap';
function Participer() {
  return (
    <Container>
        <Row className='rowCardDevenir' lg={'auto'}>
          <Col lg={'4'} xs={'4'} className='col-card-devenir'>
          <DevinirCard icon={<i className="fa-solid fa-handshake fa-2xl"></i>} text={'Devenir Partenaire'} path={'/'}></DevinirCard>
          </Col>
          <Col lg={'4'} xs={'4'} >
          <DevinirCard icon={<i className="fa-solid fa-users fa-2xl"></i>} text={'Devenir un Membre'} path={'/'}></DevinirCard>
          </Col>
          <Col lg={'4'} xs={'4'} >
          <DevinirCard icon={<i className="fa-solid fa-user-group fa-2xl"></i>} text={'Devenir un Bénificiaire'} path={'/'}></DevinirCard>
          </Col>
        </Row>
    </Container>
  )
}

export default Participer