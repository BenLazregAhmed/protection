import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ParaLogo from './footer_elements/text_descriptive/Paragraph_logo';
import Contact from './footer_elements/contact us/Contact';
import Links from './footer_elements/links/Links';
import NewsLetter from './footer_elements/newsletter/NewsLetter';
import './Footer.css'
import 'bootstrap/dist/css/bootstrap.css';

function Footer() {
  return (
    <div className='footer'>
        <Container>
            <Row>
                <Col lg="3">
                    <ul>
                       <li>
                           <ParaLogo></ParaLogo>
                       </li>
                    </ul>
                </Col>
                <Col lg="3">
                <ul>
                        <li>
                        <h4 className='h-fours'><b>Contact Us</b></h4>
                        </li>
                        <li>
                            <Contact></Contact>
                        </li>
                    </ul>
                </Col>
                <Col lg={2}>
                <ul>
                        <li>
                            <h4 className='h-fours'><b>Quick Links</b></h4>
                        </li>
                        <li>
                            <Links></Links>
                        </li>
                    </ul>
                </Col>
                <Col lg="4">
                <ul>
                        <li>
                            <h4 className='h-fours'><b>Newsletter</b></h4>
                        </li>
                        <li>
                            <NewsLetter></NewsLetter>
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Footer