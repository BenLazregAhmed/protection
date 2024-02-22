import React, { useEffect, useState } from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import DropDownMenuItems from './section2/DropDownMenuItems'
import './DropDown.css'
import DropDownSection1 from './section1/DropDownSection1'
import DropDownSection3 from './section3/DropDownSection3'
function DropDown({mouseOn,mouseOff,links,decouverte}) {
  return (
    <div className='drop-down' onMouseEnter={mouseOn} onMouseLeave={mouseOff}>
        <Container>
            <Row>
                <Col lg='3'>
                    <DropDownSection1 title={'title'} text={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id aspernatur provident incidunt eum voluptate vel sit fugit at voluptatem mollitia maiores, ullam, nobis dolorum veniam labore ea odio esse doloribus?'} url={'/'}></DropDownSection1>
                </Col>
                <Col lg='4'>
                    <DropDownMenuItems decouverte={decouverte} links={links}></DropDownMenuItems>
                </Col>
                <Col lg='5'>
                    <DropDownSection3 imgUrl={'../../../images/forest.jpg'} text={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id aspernatur provident incidunt eum voluptate vel sit fugit at voluptatem mollitia maiores, ullam, nobis dolorum veniam labore ea odio esse doloribus?'}></DropDownSection3>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default DropDown