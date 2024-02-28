import React from 'react'
import './NumberCard.css'
import { Link } from 'react-router-dom'
function NumberCard({Number,title,icon,colorClass,link}) {
  return (
    <div className={'admin-num-card '+colorClass}>
      <p className='admin-num-card-p'>{Number} {icon}</p>
        <h4 className='admin-num-card-h4'>{title}</h4>
        <hr></hr>
        <Link to={link}><p className='admin-num-card-link'>explorer</p></Link>
    </div>
  )
}

export default NumberCard