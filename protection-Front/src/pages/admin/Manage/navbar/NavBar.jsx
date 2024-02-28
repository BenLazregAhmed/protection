import React from 'react'
import './NavBar.css'
function NavBar({title,reload}) {
  return (
    <div className='manage-nav'>
        <h5>{title}</h5>
        <input type='search' placeholder='search'></input>
        <i className="fa-solid fa-rotate-right" onClick={reload}></i>
    </div>
  )
}

export default NavBar