import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/esm/Button'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import './PaymentCard.css'
function PaymentCard() {
    const [cardNumber,setCardNumber] = useState('');
    const [cardCvv,setCardCvv] = useState('');
    const [cardHolder,setCardHolder] = useState('');
    const [cardDate,setCardDate] = useState('');
    const [brands,setBrands] = useState('Visa');
  return (
    <Card className='pay-card'>
        <Container>
            <form>
                <Row >
                    <Col lg='4'>
                        <label>Brand</label>
                    </Col>
                    <Col lg='6'>
                        <select value={brands} onChange={(e)=>{setBrands(e.target.value)}}>
                            <option>Visa</option>
                            <option>MasterCard</option>
                            <option>American Express</option>
                        </select>
                    </Col>
                    <Col lg='2'>
                        {brands==='Visa' && <i className="fa-brands fa-cc-visa fa-2xl"></i>}
                        {brands==='MasterCard' && <i className="fa-brands fa-cc-mastercard fa-2xl"></i>}
                        {brands==='American Express' && <i className="fa-brands fa-usps fa-2xl"></i>}
                    </Col>
                    
                </Row>
                <Row>
                    <Col>
                        <label>Card Number</label>
                    </Col>
                    <Col>
                        <label>Expiry Date</label>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <input type='text' placeholder='Card Number' value={cardNumber} onChange={(e)=>{setCardNumber(e.target.value)}}></input>
                    </Col>
                    <Col>
                        <input type='text' placeholder='Expiry Date jj/mm/aaaa' value={cardDate} onChange={(e)=>{setCardDate(e.target.value)}}></input>
                    </Col>
                    
                </Row>
                <Row>
                    <Col>
                        <label>Card Holder</label>
                    </Col>
                    <Col>
                        <label>CVV</label>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <input type='text' placeholder='Card Holder' value={cardHolder} onChange={(e)=>{setCardHolder(e.target.value)}}></input>
                    </Col>
                    <Col>
                        <input type='text' placeholder='CVV' value={cardCvv} onChange={(e)=>{setCardCvv(e.target.value)}}></input>
                    </Col>
                    
                </Row>
                <Row className='btn-row'>
                    <Button type='submit'>Pay</Button>
                </Row>
            </form>
        </Container>
    </Card>
  )
}

export default PaymentCard