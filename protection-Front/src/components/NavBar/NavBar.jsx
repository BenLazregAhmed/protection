import React , {useState} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import MenuItems from './Items/MenuItem';
import Button from 'react-bootstrap/esm/Button';
import './NavBar.css' 
import { Link } from 'react-router-dom';
function NavBar() {
  
        const expand="lg"
        const [expanded, setExpanded] = useState(false)

    function overrideToggle() {
        setExpanded(prevExpanded => !prevExpanded)
    }
  return (
    <div className='nav-menu-div'>
        {
          <Navbar expand={expand} expanded={expanded} onToggle={overrideToggle}>
            <Container fluid>
              <Navbar.Brand  href="#"><p className='brand'>Protect Wild Life <i className="fa-solid fa-paw"></i> </p>   </Navbar.Brand>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="start"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Protect Wild LIFE
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
          <Nav className="ms-auto" >
            <MenuItems canvas={!expanded}></MenuItems>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Item as={Link} to='/login' variant="none" className='btn-header'>Log In</Nav.Item>
            <Nav.Item as={Link} to='/SignUp' variant="none" className='btn-header'>Sign Up</Nav.Item>
          </Nav>
          </Offcanvas.Body>
          </Navbar.Offcanvas>
      </Container>
    </Navbar>
     }
    </div>
  )
}

export default NavBar