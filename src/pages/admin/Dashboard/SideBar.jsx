import React from 'react'
import './SideBar.css'
import { Link } from 'react-router-dom'
function SideBar() {
  return (
    <div className='dashboard'>
        <ul>
          <li>
              <Link to='/users'>
                <p>Utilisateurs</p>
              </Link>
          </li>
          <li>
              <Link to='/news'>
                <p>Actualité</p>
              </Link>
          </li>
          <li>
          <Link to='/especes'>
            <p>Espèces rares</p>
          </Link> 
          </li>
          <li>
          <Link to='parcs'>
            <p> Parcs</p>
          </Link> 
          </li>
          <li>
          <Link to='partenaires'>  
            <p>Partenaires</p>
          </Link>
          </li>
          <li>
          <Link to='projet'>
            <p>Projets</p>
          </Link>
          </li>
          <li className='carousel-li-admin'>
          <Link to='carousel'>
            <p>Carousel</p>
          </Link>
          </li>
        </ul>
    </div>
  )
}

export default SideBar