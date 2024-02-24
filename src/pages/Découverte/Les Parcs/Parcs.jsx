import React, { useEffect ,useState} from 'react';
import './Parcs.css'
import NavBar2 from '../../../../../protection/src/components/NavBar2/NavBar2';
import Footer from '../../../../../protection/src/components/Footer/Footer';
import { Col, Row } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
const base_url="http://localhost:8080/parc"

const Parcs = () => {
    const [user,setUsers]=useState([])
    const fetchUsers = async ()=>{
        const response = await fetch(base_url+"/get-all")
        const users = await response.json()
        setUsers(users)
      }
      useEffect(()=>{
        fetchUsers()
      }
      ,[])
  return (
    <>
  <NavBar2/>
    <div className='c'>
    <h1 className='headingStyle' >
    La liste des parcs
    </h1>
    </div>
    <Row >
          {user.map((item, index) => (
          
    <Col key={item.id} className='parc-col' xs={12} md={6} lg={3}>
        <Card style={{ width: '18rem' }} className='parc-card'>
          <Card.Img variant="top"  src={item.image}/>
          <Card.Body>
            <Card.Title>{item.nom}</Card.Title>
            <Button  variant="outline-primary"><a href={item.url}>En savoir +</a></Button>
          </Card.Body>
        </Card>
    </Col>
          ))}
    </Row>
   <Footer></Footer>
    </>
    )
}

export default Parcs

