import Col from 'react-bootstrap/esm/Col'
import './DropDownSection3.css'
import React from 'react'
import Row from 'react-bootstrap/esm/Row'

function DropDownSection3({imgUrl,text}) {
  return (
    <div className='DropDownSection3-div'>
        <h5>Articles à la une :</h5>
        <Row>
        <Col className='image-col'>
            <img src={imgUrl}></img>
        </Col>
        <Col className='drop-down-sec3-text-col'>{text}</Col>
        </Row>
    </div>
  )
}

export default DropDownSection3