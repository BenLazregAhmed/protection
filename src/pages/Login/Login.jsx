import React from 'react'
import './Login.css'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Button from 'react-bootstrap/esm/Button'
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import Col from 'react-bootstrap/esm/Col'
import LoginForm from './LognInForm/LoginForm'
function Login() {
  return (
    <>
        <Container>
            <Row className='login-row'>
                <Col><img src="../../../public/images/Login.jpg"></img></Col>
                <Col>
                    <LoginForm></LoginForm>
                </Col>
            </Row>
        </Container>
    <Footer></Footer>
    </>
  )
}

export default Login