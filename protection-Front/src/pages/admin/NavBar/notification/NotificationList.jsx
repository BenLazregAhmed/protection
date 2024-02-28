import React from 'react'
import './notificationList.css'
import ListItem from './ListItem'
function NotificationList() {
  return (
    <div className='notif-list-container'>
        <ul className='notif-list'>
            <li>Notifications</li>
            <li><hr></hr></li>
            <li><ListItem txt={'rfergrrgrggggg'}></ListItem></li>
            <li><ListItem txt={'rfegrlrglrglrgr'}></ListItem></li>
            <li><ListItem txt={'rfergrglglgllglgmr;:gm;gmf;grgr'}></ListItem></li>
            <li><ListItem txt={'rf,vvvvvvvvvvvergr'}></ListItem></li>
        </ul>
    </div>
  )
}

export default NotificationList