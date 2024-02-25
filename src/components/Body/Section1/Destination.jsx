import React, { useState,useEffect } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/esm/Button';

import './Destination.css'
import Caption from './Caption/Caption';
import NavBar2 from '../../NavBar2/NavBar2';
import Myimg from './Myimage/Myimg';
const base_url="http://localhost:8080/carousel"
function Destination() {
  const [user,setUsers]=useState([])
  const fetchUsers = async ()=>{
    const response = await fetch(base_url+"/get-all")
    const users = await response.json()
    setUsers(users)
  }
  useEffect(()=>{
    fetchUsers()

},[])
  return (
    <Carousel slide touch fade >
      {user.map((item, index) => (
          <Carousel.Item key={index}>
          <img src={item.image}></img>
            <Carousel.Caption>
              <Caption titre={item.titre} description={item.text}></Caption>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
    </Carousel>
  )
}

export default Destination


