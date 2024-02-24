import React ,{createContext, useContext, useEffect, useState}from 'react'
import Table from 'react-bootstrap/Table';
import './DisplayAllEspeces.css'
import NavBar from '../navbar/NavBar';
import Button from 'react-bootstrap/Button';
import Pagi from '../pagination/Pagi';
const base_url="http://localhost:8080/especes"
function DisplayAllEspeces() {
  const [user,setUsers]=useState([])
  const [add,setAdd]=useState(false)
  const [update,setUpdate]=useState(false)
  const [titre,setTitre]=useState('');
  const [image,setImage]=useState('');
  const [local,setLocal]=useState(''); 
  const [desc,setDesc]=useState('');
  const [espece,setEspece]=useState('animale');
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
    if(users.length > 0){
    setTen(users.slice(offset,10))
    setNb_page(Math.ceil(users.length / 10))}
  }
  const handleAdd=()=>{
        fetch(base_url+'/set',{
          method:'POST',
          headers:{'content-type':'application/json'},
          body: JSON.stringify({titre:titre,image:image,description:desc,localisation:local,animal:espece=='animale'})
        })
        setAdd(false)
        fetchUsers()
      }
useEffect(()=>{
    fetchUsers()

},[])
useEffect(()=>{
    if(user.length > 0)
    {const newTen = user.slice(offset, offset + 10);
    setTen(newTen);}
},[user,offset])
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
      body: JSON.stringify({id:id,titre:titre,image:image,description:desc,localisation:local,animal:espece=='animale'})
    })
    setUpdate(false)
  } 
      return (
      <>
      <header>
        <NavBar title={'Espéces Rares'} reload={handleReload}></NavBar>
      </header>
      <div>
          <Button className='btn-manage' onClick={handleCreate}><i className="fa-regular fa-square-plus"> </i> create</Button>
      </div>
    <Table striped bordered hover variant="light" responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>ID</th>
          <th>TITRE</th>
          <th>IMAGE</th>
          <th>DESCRIPTION</th>
          <th>LOCALISATION</th>
          <th>ESPECE</th>
          <th>MODIFIER</th>
        </tr>
      </thead>
      <tbody>
        {ten.map((user, index) => (
            <tr key={index}>
              <td>{index}</td>
              <td>{user.id}</td>
              <td>{user.titre}</td>
              <td>{user.image}</td>
              <td>{user.description}</td>
              <td>{user.localisation}</td>
              <td>{user.animal ? 'animale' : 'végétale'}</td>
              <td className='action-td'><p className='action-p'onClick={()=>{handleDelete(user.id)}}><i className="fa-solid fa-trash" ></i>Delete</p><p className='action-p' onClick={()=>{ setUpdate(true);setId(user.id)}}><i className="fa-solid fa-pen-to-square" ></i>Update</p></td>
            </tr>
        ))}
        {
          (add || update) &&
           <tr>
              <td>-</td>
            <td>{update? id : 'auto'}</td>
            <td><input type='text' placeholder='titre' value={titre} onChange={e=>{setTitre(e.target.value)}}></input></td>
             <td><input type='text' placeholder='prénom' value={image} onChange={e=>{setImage(e.target.value)}}></input></td>
            <td><input type='text' placeholder='type here' value={desc} onChange={e=>{setDesc(e.target.value)}}></input></td>
            <td><input type='text' placeholder='Localisation' value={local} onChange={e=>{setLocal(e.target.value)}}></input></td>
            <td><select value={espece} onChange={(e)=>{setEspece(e.target.value)}}>
              <option value={"animale"}>animale</option>
              <option value={"vegetale"}>végétale</option>
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

export default DisplayAllEspeces