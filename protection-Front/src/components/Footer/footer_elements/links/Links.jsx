import React from 'react'
import { Link } from 'react-router-dom'
import './Links.css'
function Links() {
  return (
    <div className='links-div'>
        <ul>
            <li>
            <Link to='/ListeProjets' className='sublink1'>
                <p className='linkFooter'>Projets</p>
              </Link>
            </li>
            <li>
            <Link to='/don' className='sublink1'>
                <p className='linkFooter'>Don</p>
              </Link>
            </li>
            <li>
            <Link to='/DevenirBénéficaire' className='sublink1'>
                <p className='linkFooter'>Se Bénéficier</p>
              </Link>
            </li>
            <li>
            <Link to='/Association#Planstrategie' className='sublink1'>
                <p className='linkFooter'>Plan Stratégique</p>
              </Link>
            </li>
            
        </ul>
    </div>
  )
}

export default Links