import React from 'react'
import Image from 'react-bootstrap/Image';
import './AdminNabBar.css'
function AdminNavBar({handleShow,handleClick}) {
  return (
    <div className='admin-nav-bar'>
        <h3>Protection</h3>
        <div className='hamburger-menu'><i className="fa-solid fa-bars-staggered fa-xl" onClick={handleShow}></i></div>
        <input type='search' placeholder='search'></input>
        <div>
          <div className='notification'><i className="fa-regular fa-bell" onClick={handleClick}></i></div>
        </div>
        <Image src="../../../../images/Login.jpg" roundedCircle />
    </div>
  )
}

export default AdminNavBar