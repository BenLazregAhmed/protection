import React ,{useState,useEffect} from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import './Projects.css'
import Button from 'react-bootstrap/Button';
import NavBar2 from '../../components/NavBar2/NavBar2';

const base_url="http://localhost:8080/projet"
const HorizontalCard = () => {
  
  const [user,setUsers]=useState([])
  const fetchUsers = async ()=>{
    const response = await fetch(base_url+"/get-all")
    const users = await response.json()
    setUsers(users)
  }
useEffect(()=>{
fetchUsers()
},[])
  return (
    <>
    <NavBar2 />
    
    <div className='title-div'>
    
    <Row className='row-title'><Col><h2>Listes des Projets</h2></Col></Row>
    <Container className='CardContainer'>
      <Row>
       {
         user.map(item =>(
          <Col>
          <Card  className='CardHorizontal' >
            <Card.Img variant="top" src={item.image} className='CardHorizontal-Image' />
            <Card.Body className='b'>
              <Card.Title>{item.nom}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted"><p class="CardHorizontal-headerInfosDate">{item.date}</p></Card.Subtitle>
              <Card.Text className='CardHorizontal-intro'>
                {item.description}
              </Card.Text>
              {/* <Button  className='more-info' >+</Button> */}
            </Card.Body>
          </Card>
        </Col>
        ))
       }
      </Row>
    </Container>
    </div>
    </>
  );
};

export default HorizontalCard;
