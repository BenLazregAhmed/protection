import React from 'react'
import { Link } from 'react-router-dom'
import './Links.css'
function Links() {
  return (
    <div className='links-div'>
        <ul>
            <li>
                <Link><b>Link1</b></Link>
            </li>
            <li>
                <Link><b>Link2</b></Link>
            </li>
            <li>
                <Link><b>Link3</b></Link>
            </li>
            <li>
                <Link><b>Link4</b></Link>
            </li>
            <li>
                <Link><b>Link5</b></Link>
            </li>
        </ul>
    </div>
  )
}

export default Links