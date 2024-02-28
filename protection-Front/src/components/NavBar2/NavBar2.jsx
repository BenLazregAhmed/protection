import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import { Link } from 'react-router-dom'
import Offcanvas from 'react-bootstrap/esm/Offcanvas'
import MenuPrincipal from './menu/MenuPrincipal'
import MenuOffCanvas from './MenuOffCanvas/MenuOffCanvas'
import './NavBar2.css'
function NavBar2() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className='nav-bar2-div'>
                <Col className='logo-link-nav-col' lg='2' md='2' xs='0'>
                    <Link to='/' className='logo-link-nav'>
                        <p className='brand'>Protect Wild Life <i className="fa-solid fa-paw"></i> </p> 
                    </Link>
                </Col>
                <Col className='bars-col' lg='10' md='6' xs='0'>
                    <div className='bars-div' onClick={handleShow}>
                      <i className="fa-solid fa-bars fa-2xl"></i>
                    </div>
                    <MenuPrincipal></MenuPrincipal>
                </Col>
                <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Link to='#' className='logo-link-nav-off-canvas'>
                        <p className='brand-off-canvas'>Protect Wild Life <i className="fa-solid fa-paw"></i> </p> 
                    </Link>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <MenuOffCanvas></MenuOffCanvas>
                </Offcanvas.Body>
                </Offcanvas>
    </div>
  )
}

export default NavBar2