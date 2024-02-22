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
      <img src='/images/el-feyja.jpg'></img>
        <Carousel.Caption>
          <Caption titre={'El Feija National Park'} description={"Le parc national d'El Feija se situe au Nord-ouest tunisien. Il se déploie à l'extrémité de la chaîne montagneuse de la Kroumirie, comme un rideau de verdure adossé à l'Algérie en gradin de théâtre antique"}></Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src='/images/djbel.jpg'></img>
        <Carousel.Caption>
          <Caption titre={'Parc National Djebel Serj'} description={"Le parc national de Jebel Serj est un parc national de Tunisie situé entre les délégations de Siliana Sud (gouvernorat de Siliana) et de Oueslatia (gouvernorat de Kairouan). Il fait partie du versant septentrional du Djebel Serj. Il est géré par le ministère de l’Agriculture."}></Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src='/images/ichkeul-national-park.jpg'></img>
        <Carousel.Caption>
          <Caption titre={'Parc National de Ichkeul'} description={" Parc national de l'Ichkeul Le lac et les zones humides de l'Ichkeul constituent un relais indispensable pour des centaines de milliers d'oiseaux migrateurs – canards, oies, cigognes, flamants roses, etc. – qui viennent s'y nourrir et y nicher. Le lac est l'ultime vestige d'une chaîne de lacs qui s'étendait jadis à travers l'Afrique du Nord"}></Caption>
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


