import React ,{createContext, useContext, useEffect, useState}from 'react'
import Table from 'react-bootstrap/Table';
import './DisplayAllUsers.css'
import NavBar from '../navbar/NavBar';
import Button from 'react-bootstrap/Button';
import Pagi from '../pagination/Pagi';
const base_url="http://localhost:8080/users"
function DisplayAllUsers({data,nb}) {
  const [user,setUsers]=useState([])
  const [add,setAdd]=useState(false)
  const [update,setUpdate]=useState(false)
  const [email,setEmail]=useState('');
  const [name,setName]=useState('');
  const [FamName,setFname]=useState(''); 
  const [passwd,setPasswd]=useState('');
  const [tel,setTel]=useState('');
  const [gender,setGender]=useState('Male');
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
        fetch('http://localhost:8080/users/set-user',{
          method:'POST',
          headers:{'content-type':'application/json'},
          body: JSON.stringify({nom:name,prenom:FamName,email,password:passwd,numero:tel,sexe:gender,admin:false})
        }).then(console.log(JSON.stringify({name,FamName,email,passwd,tel,gender})))
        setAdd(false)
        fetchUsers()
      }
useEffect(()=>{
    const newTen = user.slice(offset, offset + 10);
    setTen(newTen);
},[user,offset])
useEffect(()=>{
  fetchUsers()
},[])
const handleReload = ()=>{
    fetchUsers()
  };    
  const handleDelete=(id)=>{
    fetch('http://localhost:8080/users/del-user?id='+id,{
      method:'POST',
      headers:{'content-type':'application/json'},
    }).then(console.log(JSON.stringify({id})))
  }
  const handleUpdate=()=>{
    fetch('http://localhost:8080/users/update-user',{
      method:'POST',
      headers:{'content-type':'application/json'},
      body: JSON.stringify({id:id,nom:name,prenom:FamName,email,password:passwd,numero:tel,sexe:gender,admin:false})
    }).then(console.log(JSON.stringify({name,FamName,email,passwd,tel,gender})))
    setUpdate(false)
  } 
      return (
      <>
      <header>
        <NavBar title={'Users'} reload={handleReload}></NavBar>
      </header>
      <div>
          <Button className='btn-manage' onClick={handleCreate}><i className="fa-regular fa-square-plus"> </i> create</Button>
      </div>
    <Table striped bordered hover variant="light" responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>ID</th>
          <th>NOM</th>
          <th>PRENOM</th>
          <th>EMAIL</th>
          <th>PASSWORD</th>
          <th>NUMERO</th>
          <th>SEXE</th>
          <th>MODIFIER</th>
        </tr>
      </thead>
      <tbody>
        {ten.map((user, index) => (
            <tr key={index}>
              <td>{index}</td>
              <td>{user.id}</td>
              <td>{user.nom}</td>
              <td>{user.prenom}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <td>{user.numero}</td>
              <td>{user.sexe}</td>
              <td className='action-td'><p className='action-p'onClick={()=>{handleDelete(user.id)}}><i className="fa-solid fa-trash" ></i>Delete</p><p className='action-p' onClick={()=>{ setUpdate(true);setId(user.id)}}><i className="fa-solid fa-pen-to-square" ></i>Update</p></td>
            </tr>
        ))}
        {
          (add || update) &&
           <tr>
              <td>-</td>
            <td>{update? id : 'auto'}</td>
            <td><input type='text' placeholder='nom' value={name} onChange={e=>{setName(e.target.value)}}></input></td>
             <td><input type='text' placeholder='prénom' value={FamName} onChange={e=>{setFname(e.target.value)}}></input></td>
            <td><input type='text' placeholder='example@abcd.com' value={email} onChange={e=>{setEmail(e.target.value)}}></input></td>
            <td><input type='password' value={passwd} onChange={e=>{setPasswd(e.target.value)}}></input></td>
            <td><input type='number' placeholder='numéro' value={tel} onChange={e=>{setTel(e.target.value)}}></input></td>
            <td><select value={gender} onChange={(e)=>{setGender(e.target.value)}}>
              <option value={"male"}>male</option>
              <option value={"femelle"}>femelle</option>
              </select></td>
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

export default DisplayAllUsers