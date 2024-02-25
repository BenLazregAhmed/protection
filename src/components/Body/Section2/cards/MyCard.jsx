import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './MyCard.css';
function MyCard({text,image,date}) {
  console.log(image)
    return (
        <Card style={{ width: '18rem' }} className='my-card'>
          <Card.Img variant="top"  src={image}/>
          <Card.Body>
            <Card.Title>{date}</Card.Title>
            <Card.Text>
               {text}
            </Card.Text>
            <Button variant="outline-primary">En savoir +</Button>
          </Card.Body>
        </Card>
      );
}

export default MyCard