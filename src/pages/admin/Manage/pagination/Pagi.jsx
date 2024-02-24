import React, { useState } from 'react'
import Pagination from 'react-bootstrap/Pagination';

import './Pagi.css'
function Pagi({nb_page,setOffset,setTen,ten,offset,users}) {
    let itm=[]
    const [active,setActive]=useState(1)
    const handleClickItem=(i)=>{
        setOffset((i-1)*10)
        //setTen(users.slice(offset,offset+10))
        setActive(i)
        console.log(ten)
    }
    for(let i=1 ; i<=nb_page; i++) {
        itm.push(<Pagination.Item key={i}  active={i==active} onClick={()=>{handleClickItem(i)}} activeLabel={i.toString()}>{i} </Pagination.Item>);
    }
  return (
    <Pagination>
      <Pagination.First onClick={()=>{ if(active<nb_page) handleClickItem(active+1)}}/>
           {itm}
      <Pagination.Last onClick={()=>{ if(active>1) handleClickItem(active+1) }}/>
    </Pagination>
  )
}

export default Pagi