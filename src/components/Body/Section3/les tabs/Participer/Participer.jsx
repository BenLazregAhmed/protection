import React from 'react'
import DevinirCard from '../CustomCard/DevinirCard'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import './Participer.css'
function Participer() {
  return (
    <Container>
        <Row className='rowCardDevenir'>
          <DevinirCard icon={<i className="fa-solid fa-handshake fa-2xl"></i>} text={'Devenir Partenaire'}></DevinirCard>
          <DevinirCard icon={<i className="fa-solid fa-users fa-2xl"></i>} text={'Devenir un Membre'}></DevinirCard>
          <DevinirCard icon={<i className="fa-solid fa-user-group fa-2xl"></i>} text={'Devenir un Bénificiaire'}></DevinirCard>
        </Row>
    </Container>
  )
}

export default Participer