import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './MyCard.css';
function MyCard() {
    return (
        <Card style={{ width: '18rem' }} className='my-card'>
          <Card.Img variant="top"  src='/images/oued.jpg'/>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content...
            </Card.Text>
            <Button variant="outline-primary">En savoir +</Button>
          </Card.Body>
        </Card>
      );
}

export default MyCard