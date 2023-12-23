import React from 'react'
import SignForm from './SignForm/SignForm'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Footer from '../../components/Footer/Footer'
import './SignUp.css'
import { useState } from 'react'
function SignUp() {
    
    
  return (
    <>
        <Container>
            <Row className='Signup-big-title-row'>
                <h1>Welcome</h1>
            </Row>
            <Row>
                <Col><img src="../../../public/images/SignUp.jpg"></img></Col>
                <Col>
                    <SignForm></SignForm>
                </Col>
            </Row>
        </Container>
    <Footer></Footer>
    </>
  )
}

export default SignUp