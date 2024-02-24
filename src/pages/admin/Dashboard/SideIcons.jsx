import React from 'react'
import { Link } from 'react-router-dom'

import './SideIcons.css'
function SideIcons() {
  return (
        <ul className='side-icons'>
          <li className='side-icons-first-li'>
                <div className='custom-icon'>
                  <Link to='/users'>
                    <i className="fa-solid fa-users"></i>
                  </Link>
                </div>
              
          </li>
          <li>
              <Link to='news'>
              <div className='custom-icon'>
                    <i className="fa-solid fa-newspaper"></i>
               </div>
              </Link>
          </li>
          <li>
          <Link to='especes'>
          <div className='custom-icon'>
            <i className="fa-solid fa-gem"></i>
          </div>
          </Link> 
          </li>
          <li>
          <Link to='parcs'>
          <div className='custom-icon'>
            <i className="fa-solid fa-tree"></i>
          </div>
          </Link> 
          </li>
          <li>
          <Link to='partenaires'>  
          <div className='custom-icon'>
            <i className="fa-solid fa-handshake "></i>
          </div>
          </Link>
          </li>
          <li>
          <Link to='projet'>
          <div className='custom-icon'>
            <i className="fa-solid fa-diagram-project"></i>
          </div>
          </Link>
          </li>
          <li>
          <Link to='carousel'>
            <div className='custom-icon'>
                <i className="fa-solid fa-image"></i>
            </div>
          </Link>
          </li>
        </ul>
  )
}

export default SideIcons