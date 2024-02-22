import React from 'react'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Button from 'react-bootstrap/esm/Button'
import { Link } from 'react-router-dom'
import './MenuOffCanvas.css'
function MenuOffCanvas() {
  return (
    <>
        <div className='offCanvas-div'>
                <Row >
                    <p className='offCanvas-p'>Association</p>
                </Row>
                <Row  >
                    <p className='offCanvas-p'>Découverte & Protection</p>
                </Row>
                <Row >
                    <p className='offCanvas-p'>Partenaire</p>
                </Row>
                <Row  >
                    <p className='offCanvas-p'>Bénificiare</p>
                </Row>
                <Row  >
                    <p className='offCanvas-p'>Projet</p>
                </Row>
                <Row>
                    <p className='offCanvas-p'>Faire Un Don</p>
                </Row>
        </div>
            <div className='log-sign-offCanvas-div'>
                <Row className='log-sign-row-offCanvas'>
                    <Col>
                        <Button variant='none' as={Link} className='log-sign-btn-offCanvas' to={'/login'}>LogIn</Button>
                    </Col>
                    <Col>
                    <Button variant='none' as={Link} className='log-sign-btn-offCanvas' to={'/SignUp'}>SignUp</Button>
                    </Col>
                </Row>
            </div>
    </>
  )
}

export default MenuOffCanvas