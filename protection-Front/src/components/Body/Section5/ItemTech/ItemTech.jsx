import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import './ItemTech.css'
function ItemTech({logo,titre,text}) {
  return (
    <div className='item-tech-div'>
        <Container>
            <Row className='logo-tech-row'>{logo}</Row>
            <Row><h3>{titre}</h3></Row>
            <Row><p>{text}</p></Row>
        </Container>
    </div>
  )
}

export default ItemTech