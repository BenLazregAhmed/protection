import React from 'react'
import Button from 'react-bootstrap/esm/Button'
import NavBar from '../../../NavBar/NavBar'

import './Caption.css'
import NavBar2 from '../../../NavBar2/NavBar2'
function Caption({titre,description}) {
  return (
    <>
      <header className='caption-header'>
        {false&&<NavBar2></NavBar2>}
      </header>
      <main>
        <div className='caption-div'>
          <h1>{titre}</h1>
          
          
        </div>
      </main>
    </>
  )
}

export default Caption