import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import './Impact.css'
function Impact() {
  return (
    <div className='impact-div'>
        <Container>
            <Row>
                <h1>NOUS SOMMES FOCALISÉS SUR LA MESURE D’IMPACTS</h1>
            </Row>
            <Row>
                <p>
                    Un écosystème régénératif, c’est un écosystème stable et résilient dans la durée. Son caractère régénératif dépend des relations entre ses différentes fonctions. Suivre dans la durée et mesurer les impacts liés aux différentes fonctions de l'écosystème, permet d’une part d’optimiser son aspect régénératif et d’autre part de démontrer l'efficacité environnementale et plus largement la création de valeur qu’il génère. C'est pourquoi nous développons des méthodologies de mesure d’impacts autour de 4 séries d'indicateurs clés, suivis sur 30 ans.
                </p>
            </Row>
            <Row className='logos-row'>
                <Col xs={3} md={6} lg={3}>
                    <i className="fa-solid fa-cloud-sun-rain fa-2xl"></i>
                    <h2>CLIMAT</h2>
                </Col>
                <Col xs={3} md={6} lg={3}>
                    <i className="fa-solid fa-crow fa-2xl"></i>
                    <h2>BIODI VERSITÉ</h2>
                </Col>
                <Col xs={3} md={6} lg={3}>
                    <i className="fa-solid fa-water fa-2xl"></i>
                    <h2>SOLS & EAU</h2>
                </Col>
                <Col xs={3} md={6} lg={3}>
                    <i className="fa-solid fa-hand-holding-dollar fa-2xl"></i>
                    <h2>SOCIAL & ÉCONOMIQUE</h2>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Impact