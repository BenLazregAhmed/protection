import React ,{useState,useEffect} from 'react';
import './Partenaires.css'
import NavBar2 from '../../components/NavBar2/NavBar2';
import './PartenairesAssociatives.css'
import Footer from '../../../../protection/src/components/Footer/Footer';
const base_url="http://localhost:8080/partenaire"

const Partenaires = () => {
    const [user,setUsers]=useState([])
    const fetchUsers = async ()=>{
      const response = await fetch(base_url+"/get-categorie?categorie=assossiative")
      const users = await response.json()
      setUsers(users)
    }
    useEffect(()=>{
      fetchUsers()
    },[])
  return (
    
    <>
  <header className='home-page-header'>
        <NavBar2></NavBar2> 
      </header>
 
    <div className='c'>
    <h1 className='headingStyle' >
      Nos partenaires
    </h1>
    </div>
    <section class="partners">
    {
    user.map(partner=>(
      <div className='partenaire'>
        <img src={partner.logo} className='img-style'/>
        <div className='content'>
        <p>{partner.titre}</p>
        <a href={partner.url}>Visit Website</a>
        </div>
    </div>
    ))
  }

   </section>
   <Footer></Footer>
    </>
    )
}

export default Partenaires

