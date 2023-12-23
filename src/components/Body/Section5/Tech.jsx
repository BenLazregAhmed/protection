import React from 'react'
import ItemTech from './ItemTech/ItemTech'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import './Tech.css'
function Tech() {
    const txt1="S'appuyer sur des méthodologies poussées pour optimiser la conception des projets et estimer au mieux les impacts."
    const txt2="Combiner la télédétection et la collecte de données sur le terrain pour une surveillance à long terme et une fiabilité accrue."
    const txt3="Suivre les données dans le temps en utilisant la technologie blockchain pour gagner en transparence et fournir des rapports précis."
    const txt4="Permettre une gestion adaptative des projets si nécessaire au fil du temps grâce au suivi et à la mesure d’impact en temps réel."
    return (
    <div className='Tech-div'>
    <Container>
        <Row>
            <h1>L’INNOVATION ET LA TECHNOLOGIE : DEUX LEVIERS D'EFFICACITÉ</h1>
        </Row>
        <Row>
            <p>
                Agir à grande échelle, démontrer les impacts, assurer la transparence est essentiel pour relever les défis. Depuis 2021 nous déployons un projet ambitieux qui s'appuie sur une plateforme technologique puissante de projection, de suivi, d'agrégation et d'analyse de données scientifiques et de données terrain issues des projets aux objectifs multiples.
            </p>
        </Row>
        <Row className='logos-row'>
            <Col>
                <ItemTech logo={<i className="fa-solid fa-chart-simple fa-2xl"></i>} titre={'PROJECTION'} text={txt1}></ItemTech>
            </Col>
            <Col>
                <ItemTech logo={<i className="fa-solid fa-satellite fa-2xl"></i>} titre={'MONITORING'} text={txt2}></ItemTech>
            </Col>
            <Col>
                <ItemTech logo={<i className="fa-brands fa-bitcoin fa-2xl"></i>} titre={'TRAÇABILITÉ'} text={txt3}></ItemTech>
            </Col>
            <Col>
                <ItemTech logo={<i className="fa-solid fa-list-check fa-2xl"></i>} titre={'GESTION ADAPTATIVE'} text={txt4}></ItemTech>
            </Col>
        </Row>
    </Container>
</div>
  )
}

export default Tech