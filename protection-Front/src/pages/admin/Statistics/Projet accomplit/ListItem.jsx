import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Image from 'react-bootstrap/Image';
import { Link } from "react-router-dom";
import './ListItem.css'
function ListItem({color,pourcentage,nomDeProjet}) {
  return (
    <div className='projet-list-item'>
        <Image src="../../../../../images/Login.jpg" rounded />
        <p className='projet-list-item-p'><b>{nomDeProjet}</b></p>
        <ProgressBar variant={color} now={pourcentage} label={pourcentage} animated/>
        <Link to={''}><i className="fa-solid fa-circle-arrow-right fa-2xl"></i></Link>
    </div>
  )
}

export default ListItem