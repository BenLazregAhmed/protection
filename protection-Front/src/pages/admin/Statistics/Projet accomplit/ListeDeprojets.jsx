import React from 'react'
import './ListeDeprojets.css'
import ListItem from './ListItem'
function ListeDeprojets( {number}) {
  return (
    <ul className='ul-projet'>
        <li><h5>Projets en cours :</h5></li>
        <li><hr></hr></li>
        <li>
            <ListItem color={'danger'} pourcentage={50} nomDeProjet={"ffefefe"}></ListItem>
            <ListItem color={'success'} pourcentage={20} nomDeProjet={"rereffefer"}></ListItem>
            <ListItem color={'warning'} pourcentage={80} nomDeProjet={"fffeefef"}></ListItem>
        </li>
    </ul>
  )
}

export default ListeDeprojets