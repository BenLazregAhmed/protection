import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/esm/Button';

import './Destination.css'
import Caption from './Caption/Caption';
import NavBar2 from '../../NavBar2/NavBar2';
import Myimg from './Myimage/Myimg';

function Destination() {
  return (
    <Carousel slide touch fade >
      
      <Carousel.Item>
      <img src='/images/forest.jpg'></img>
        <Carousel.Caption>
          <Caption titre={'slide 1'} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}></Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src='/images/oued.jpg'></img>
        <Carousel.Caption>
          <Caption titre={'slide 2'} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}></Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src='/images/Cap_Serrat.jpg'></img>
        <Carousel.Caption>
          <Caption titre={'slide 3'} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}></Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src='/images/desert.jpg'></img>
        <Carousel.Caption>
          <Caption titre={'slide 4'} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}></Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Destination