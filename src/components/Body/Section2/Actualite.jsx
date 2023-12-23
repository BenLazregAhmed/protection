import React from 'react'
import MyCard from './cards/MyCard';
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
    </Row>
    </Container>    
    </div>
  )
}

export default Actualite