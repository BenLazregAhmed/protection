import React from 'react'
import Button from 'react-bootstrap/esm/Button'
import { Link } from 'react-router-dom'
import './DropDownSection1.css'
function DropDownSection1({title,text,url}) {
  return (
    <div className='drop-down-first-section'>
        <h1>{title}</h1><br></br>
        <p>{text}</p><br></br>
        <Button className='btn-drop-down-section1' as={Link} to={url}>Explorer</Button>
    </div>
  )
}

export default DropDownSection1