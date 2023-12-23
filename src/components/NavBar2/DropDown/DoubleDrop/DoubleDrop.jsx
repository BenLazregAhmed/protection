import React from 'react'
import { Link } from 'react-router-dom'
import './DoubleDrop.css'
function DoubleDrop({links}) {
  return (
    <div className='double-drop'>
        {
            links.map((links, index) => (
                    <ul className="double-drop-down-item-list" key={index}>
                        <li><Link className="double-drop-down-item-link" to={links.path}>{links.title}</Link></li>
                    </ul>
            ))
        }
    </div>
  )
}

export default DoubleDrop