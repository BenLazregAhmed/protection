import React from 'react'
import './ListItem.css'
import Image from 'react-bootstrap/esm/Image'
import { Link } from 'react-router-dom'
function ListItem({img,txt,path}) {
  return (
    <div className='notification-list-item'>
        <Link to={path}>
            <Image src={img} roundedCircle></Image>
            <p>
                {txt}
            </p>
        </Link>
    </div>
  )
}

export default ListItem