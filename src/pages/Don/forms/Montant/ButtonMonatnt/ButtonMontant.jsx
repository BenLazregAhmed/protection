import React from 'react'
import './ButtonMontant.css'
function ButtonMontant({text,selected,onClick}) {
  return (
    <div className={!selected ? 'btn-mnt' : 'btn-mtn-selected'} onClick={onClick}>
        <p>
            {text} TND
        </p>
    </div>
  )
}
export default ButtonMontant