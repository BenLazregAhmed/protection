import React, { useState } from 'react'
import Container from 'react-bootstrap/esm/Container'
import './DropDownMenuItems.css'
import { Link } from 'react-router-dom'
import Row from 'react-bootstrap/esm/Row'
import DoubleDrop from '../DoubleDrop/DoubleDrop'
import {subDecouverItems} from '../../menu/Links/subDecouverItems'
import {subProtectionItems} from '../../menu/Links/subProtectionItems'
import {subEspeceRares} from '../../menu/Links/subEspeceRares'
import { subConseils } from '../../menu/Links/subConseils'

function DropDownMenuItems({links,decouverte}) {
  const [showDecouverte,setShowDecouverte]=useState(false)
  const [showProtection,setShowProtection]=useState(false)
  const [showEspecesRares,setShowEspecesRares]=useState(false)
  const [showConseils,setShowConseils]=useState(false) 
  const handleOpenDecouverte=()=>{
    setShowDecouverte(!showDecouverte)
  }
  const handleOpenProtection=()=>{
    setShowProtection(!showProtection)
  }
  const handleOpenEspeces=()=>{
    setShowEspecesRares(!showEspecesRares)
  }
  const handleOpenConseils=()=>{
    setShowConseils(! showConseils)
  }
 
  if(decouverte)
  {
    return(
      <div className='drop-down-item'>
        <ul>
          <li>
            <p className="link-decouverte" onClick={handleOpenDecouverte}>Découverte  {!showDecouverte?<i className="fa-solid fa-caret-down"></i>:<i className="fa-solid fa-caret-up"></i>}</p>
            {showDecouverte && <DoubleDrop links={subDecouverItems}></DoubleDrop>}
          </li>
          <li >
            <p className="link-decouverte" onClick={handleOpenProtection}>Protection  {!showProtection?<i className="fa-solid fa-caret-down"></i>:<i className="fa-solid fa-caret-up"></i>}</p>
            {showProtection && <DoubleDrop links={subProtectionItems}></DoubleDrop>}
          </li>
          <li className='li-decouverte'>
          <p className='link-decouverte' onClick={handleOpenConseils}>Conseils  {!showConseils?<i className="fa-solid fa-caret-down"></i>:<i className="fa-solid fa-caret-up"></i>}</p>
            {showConseils && <DoubleDrop links={subConseils}></DoubleDrop>}
          </li>
          <li >
            <p className='link-decouverte' onClick={handleOpenEspeces}>Espèces Rares  {!showEspecesRares?<i className="fa-solid fa-caret-down"></i>:<i className="fa-solid fa-caret-up"></i>}</p>
            {showEspecesRares && <DoubleDrop links={subEspeceRares}></DoubleDrop>}
          </li>
        </ul>
        
    </div>
    )
  }
  return (
    <div className='drop-down-item'>
        {
            links.map((link, index) => (
                    <ul className="drop-down-item-list" key={index}>
                        <li><Link className="drop-down-item-link" to={link.path}>{link.title}</Link></li>
                    </ul>
            ))
        }
    </div>
  )
}

export default DropDownMenuItems