import React from 'react'
import './LoginForm.css'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Button from 'react-bootstrap/esm/Button'
import { Link } from 'react-router-dom'
function LoginForm() {
  return (
    <>
        <div className='logIn-div'>
        <form>
            <Container>
                <Row className='login-row-title'>
                    <h2>Login</h2>
                </Row>
                <Row className='login-row-email'>
                    <label>Email</label>
                    <input type="email" placeholder="Email" />
                </Row>
                <Row className='login-row-password'>
                    <label>Password</label>
                    <input type="password" placeholder="Password" />
                    <Link className='pass-link'>Mot de passe oublié?</Link>
                </Row>
                <Row>
                    <Button type='submit'>Login</Button>
                </Row>
            </Container>
        </form>
        </div>
    </>
  )
}

export default LoginForm