import React from 'react'
import Card from 'react-bootstrap/Card';
import CardFooter from 'react-bootstrap/esm/CardFooter';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import CardText from 'react-bootstrap/esm/CardText';
import './DevenirCard.css'
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import { Link } from 'react-router-dom';
function DevinirCard({icon,text,path}) {
  return (
    <Card className='devenir'>
        <Container>
            <Row>
                {icon}
            </Row>
            <Row>
                <Card.Body>
                    <CardText>
                        {text}
                    </CardText>
                </Card.Body>
            </Row>
            <Row className='arrow-row'>
                <a className='info-card-link' href={path}><i className="fa-solid fa-circle-arrow-right fa-2xl"></i></a>
            </Row>
        </Container>      
    </Card>
  )
}

export default DevinirCard