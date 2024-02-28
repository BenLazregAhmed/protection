import React ,{createContext, useContext, useEffect, useState}from 'react'
import Table from 'react-bootstrap/Table';
import './DisplayAllActualite.css'
import NavBar from '../navbar/NavBar';
import Button from 'react-bootstrap/Button';
import Pagi from '../pagination/Pagi';
const base_url="http://localhost:8080/news"
function DisplayAllActualite() {
  const [user,setUsers]=useState([])
  const [add,setAdd]=useState(false)
  const [update,setUpdate]=useState(false)
  const [text,setText]=useState('');
  const [img,setImg]=useState('');
  const [date,setDate]=useState('');
  const [id,setId]=useState()
  const [ten,setTen]=useState([])
  const [offset,setOffset]=useState(0)
  const [nb_page,setNb_page]=useState()
  const handleCreate=()=>{
    setAdd(true)
    console.log(add)
  }
  const fetchUsers = async ()=>{
    const response = await fetch(base_url+"/get-all")
    const users = await response.json()
    setUsers(users)
    setTen(users.slice(offset,10))
    setNb_page(Math.ceil(users.length / 10))
  }
  const handleAdd=()=>{
        fetch(base_url+'/set',{
          method:'POST',
          headers:{'content-type':'application/json'},
          body: JSON.stringify({text:text,imageSrc:img,date:date})
        }).then(console.log({text:text,imageSrc:img,date:date}))
        setAdd(false)
        fetchUsers()
      }
useEffect(()=>{
    const newTen = user.slice(offset, offset + 10);
    setTen(newTen);
},[offset])
useEffect(()=>{
    fetchUsers()
},[])
const handleReload = ()=>{
    fetchUsers()
  };    
  const handleDelete=(id)=>{
    fetch(base_url+'/del?id='+id,{
      method:'POST',
      headers:{'content-type':'application/json'},
    }).then(console.log(JSON.stringify({id})))
  }
  const handleUpdate=()=>{
    fetch(base_url+'/update',{
      method:'POST',
      headers:{'content-type':'application/json'},
      body: JSON.stringify({id:id,text:text,imageSrc:img,date:date})
    })
    setUpdate(false)
  } 
      return (
      <>
      <header>
        <NavBar title={'News'} reload={handleReload}></NavBar>
      </header>
      <div>
          <Button className='btn-manage' onClick={handleCreate}><i className="fa-regular fa-square-plus"> </i> create</Button>
      </div>
    <Table striped bordered hover variant="light" responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>ID</th>
          <th>TEXT</th>
          <th>IMAGE</th>
          <th>DATE</th>
          <th>MODIFIER</th>
        </tr>
      </thead>
      <tbody>
        {ten.map((user, index) => (
            <tr key={index}>
              <td>{index}</td>
              <td>{user.id}</td>
              <td>{user.text}</td>
              <td>{user.imageSrc}</td>
              <td>{user.date}</td>
              <td className='action-td'><p className='action-p'onClick={()=>{handleDelete(user.id)}}><i className="fa-solid fa-trash" ></i>Delete</p><p className='action-p' onClick={()=>{ setUpdate(true);setId(user.id)}}><i className="fa-solid fa-pen-to-square" ></i>Update</p></td>
            </tr>
        ))}
        {
          (add || update) &&
           <tr>
              <td>-</td>
            <td>{update? id : 'auto'}</td>
            <td><input type='text' placeholder='contenue' value={text} onChange={e=>{setText(e.target.value)}}></input></td>
            <td><input type='text' placeholder='image patj' value={img} onChange={e=>{setImg(e.target.value)}}></input></td>
            <td><input type='text' placeholder='aaaa-mm-jj' value={date} onChange={e=>{setDate(e.target.value)}}></input></td>
            <td><Button onClick={()=>{add?handleAdd():handleUpdate()}}>submit</Button></td>
           </tr>
        }
      </tbody>
    </Table>
    <div className='read-more'>
      <Pagi nb_page={nb_page} setOffset={setOffset} setTen={setTen} offset={offset} ten={ten} users={user}></Pagi>
    </div>
    </>
  )
}

export default DisplayAllActualite