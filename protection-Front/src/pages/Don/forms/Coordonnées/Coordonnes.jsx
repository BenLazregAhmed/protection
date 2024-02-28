import React, { useState } from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import CountriesList from './CountriesList'
import Button from 'react-bootstrap/esm/Button'
import './Coordonnes.css'
import ValidEmail from '../../../../Controle_Saisie/ValidEmail'
import IsNumber from '../../../../Controle_Saisie/IsNumber'
import NoNumberOrSymbol from '../../../../Controle_Saisie/NoNumberOrSymbol'
function Coordonnes() {
    const [email,setEmail]=useState('');
    const [name,setName]=useState('');
    const [FamName,setFname]=useState('');
    const [contry,setContry]=useState('');
    const [adresse,setAdresse]=useState('');
    const [ville,setville]=useState('');
    const [codePostal,setcodePostal]=useState('');
    const handleClick=()=>{
        if(name.length>0 && FamName.length>0 && adresse.length>0 && ville.length>0 && codePostal.length>0 && email.length>0){
                if( NoNumberOrSymbol(name)){
                    if(NoNumberOrSymbol(FamName)){
                        if(NoNumberOrSymbol(adresse))
                        {
                            if(NoNumberOrSymbol(ville))
                            {
                                
                                    if(IsNumber(codePostal))
                                    {
                                       
                                    }
                                    else
                                    {
                                        alert('Votre code postal doit être un nombre')
                                        setcodePostal('')
                                    }
                                }
                                else
                                {
                                    alert('La ville doit contenir que des lettres')
                                    setville('')
                                }
                            }
                            else
                            {
                                alert('Votre adresse doit être un texte')
                                setAdresse('')
                            }
                        }
                        else
                        {
                            alert('Votre nom de famille doit être un texte')
                            setFname('')
                        }
                    }
                    else{
                        alert('Votre nom doit être un texte')
                        setName('')
                    }
                }
                else{
                    alert('vous devez remplir tous les champs')
                }
    }
            

 
  return (
    <div className='coordonnees'>
        <Container>
            <form>
                <Row className='title-row'>
                    <h2>Vos coordonnées</h2>
                </Row>
                <Row className='email-row'>
                    <Col lg='2' className='logo-col'>
                        <i className="fa-solid fa-envelope fa-2xl"></i>
                    </Col>
                <Col>
                    <input type="email" placeholder='E-mail' value={email} onChange={(e)=>{setEmail(e.target.value)}}></input>
                </Col>
                </Row>
                <Row className='nom-row'>
                    <input type='text' placeholder='Nom' value={name} onChange={(e)=>{setName(e.target.value)}}></input>
                </Row>
                <Row className='prenom-row'>
                    <input type='text' placeholder='Prénom' value={FamName} onChange={(e)=>{setFname(e.target.value)}}></input>
                </Row>
                <Row className='contries-row'>
                    <CountriesList></CountriesList>
                </Row>
                <Row className='adresse-row'>
                    <input type='text' placeholder='Adresse' value={adresse} onChange={(e)=>{setAdresse(e.target.value)}}></input>
                </Row>
                <Row className='villeCode-row'>
                    <Col>
                        <input type='text' placeholder='Ville' value={ville} onChange={(e)=>{setville(e.target.value)}}></input>
                    </Col>
                    <Col>
                        <input type='text' placeholder='Code Postal' value={codePostal} onChange={(e)=>{setcodePostal(e.target.value)}}></input>
                    </Col>
                </Row>
                <Row className='btn-row2'>
                    <Button onClick={handleClick}>Valider</Button>
                </Row>
            </form>
        </Container>
    </div>
  )
}

export default Coordonnes