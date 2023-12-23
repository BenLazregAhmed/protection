import React, { useEffect, useState } from 'react'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import { Link } from 'react-router-dom'
import './MenuPrincipal.css'
import Button from 'react-bootstrap/esm/Button'
import DropDown from '../DropDown/DropDown'
import { AssociationItems } from './Links/AssociationItems'
import { DecouverteItems } from './Links/decouvertItems'
import { partenaireItems } from './Links/partenaireItems'
import { BeneficiaireItems } from './Links/BeneficiaireItems'
import { ProjetItems } from './Links/ProjetItems'
import { DonItems } from './Links/DonItems'
function MenuPrincipal() {
    const [mouseOnAssociation,setMouseOnAssociation]=useState(false)
    const [mouseOnDropDownAssociation,setMouseOnDropDownAssociation]=useState(false)
    const [showAssociation,setShowshowAssociation]=useState(false)

    const [mouseOnDecouverte,setMouseOnDecouverte]=useState(false)
    const [mouseOnDropDownDecouverte,setMouseOnDropDownDecouverte]=useState(false)
    const [showDecouverte,setShowshowDecouverte]=useState(false)

    const [mouseOnPartenaire,setMouseOnPartenaire]=useState(false)
    const [mouseOnDropDownPartenaire,setMouseOnDropDownPartenaire]=useState(false)
    const [showPartenaire,setShowshowPartenaire]=useState(false)

    const [mouseOnBeneficiare,setMouseOnBeneficiare]=useState(false)
    const [mouseOnDropDownBeneficiare,setMouseOnDropDownBeneficiare]=useState(false)
    const [showBeneficiare,setShowshowBeneficiare]=useState(false)

    const [mouseOnProjet,setMouseOnProjet]=useState(false)
    const [mouseOnDropDownProjet,setMouseOnDropDownProjet]=useState(false)
    const [showProjet,setShowshowProjet]=useState(false)

    const [mouseOnDon,setMouseOnDon]=useState(false)
    const [mouseOnDropDownDon,setMouseOnDropDownDon]=useState(false)
    const [showDon,setShowshowDon]=useState(false)
    useEffect(()=>{
        if(mouseOnAssociation){
            setShowshowAssociation(true)
        }
        else if(mouseOnAssociation && showAssociation){
            setShowshowAssociation(true)
        }
        else if(!mouseOnAssociation && !mouseOnDropDownAssociation)
        {
            setShowshowAssociation(false)
        }
        
    },[mouseOnDropDownAssociation,mouseOnAssociation])
    /***************/
    useEffect(()=>{
        if(mouseOnDecouverte){
            setShowshowDecouverte(true)
        }
        else if(mouseOnDecouverte && showDecouverte){
            setShowshowDecouverte(true)
        }
        else if(!mouseOnDecouverte && !mouseOnDropDownDecouverte)
        {
            setShowshowDecouverte(false)
        }
        
    },[mouseOnDropDownDecouverte,mouseOnDecouverte])
    /********************* */
    useEffect(()=>{
        if(mouseOnPartenaire){
            setShowshowPartenaire(true)
        }
        else if(mouseOnPartenaire && showPartenaire){
            setShowshowAssociation(true)
        }
        else if(!mouseOnPartenaire && !mouseOnDropDownPartenaire)
        {
            setShowshowPartenaire(false)
        }
        
    },[mouseOnDropDownPartenaire,mouseOnPartenaire])
    /********************** */
    useEffect(()=>{
        if(mouseOnBeneficiare){
            setShowshowBeneficiare(true)
        }
        else if(mouseOnBeneficiare && showBeneficiare){
            setShowshowBeneficiare(true)
        }
        else if(!mouseOnBeneficiare && !mouseOnDropDownBeneficiare)
        {
            setShowshowBeneficiare(false)
        }
        
    },[mouseOnDropDownBeneficiare,mouseOnBeneficiare])
    /****************** */
    useEffect(()=>{
        if(mouseOnProjet){
            setShowshowProjet(true)
        }
        else if(mouseOnProjet && showProjet){
            setShowshowProjet(true)
        }
        else if(!mouseOnProjet && !mouseOnDropDownProjet)
        {
            setShowshowProjet(false)
        }
        
    },[mouseOnDropDownProjet,mouseOnProjet])
    /************* */
    useEffect(()=>{
        if(mouseOnDon){
            setShowshowDon(true)
        }
        else if(mouseOnDon && showDon){
            setShowshowDon(true)
        }
        else if(!mouseOnDon && !mouseOnDropDownDon)
        {
            setShowshowDon(false)
        }
        
    },[mouseOnDropDownDon,mouseOnDon])
  return (
    <div className='menu-principal-div'>
            <Row className='log-sign-row'>
                    <Col lg='2' md='2' xs='0'>
                        <Button as={Link} className='log-sign-btn' to={'/login'}>LogIn</Button>
                    </Col>
                    <Col lg='2' md='2' xs='0'>
                    <Button as={Link} className='log-sign-btn' to={'/SignUp'}>SignUp</Button>
                    </Col>
            </Row>
            <Row className='menu-items-row'>
                <Col  lg='2' md='1' xs='0' >
                    <p className='association' onMouseEnter={()=>{setMouseOnAssociation(true)}} onMouseLeave={()=>{setMouseOnAssociation(false)}}>Association</p>
                </Col>
                <Col lg='3' md='2' xs='0' >
                    <p onMouseEnter={()=>{setMouseOnDecouverte(true)}} onMouseLeave={()=>{setMouseOnDecouverte(false)}}>Découverte & Protection</p>
                </Col>
                <Col lg='2' md='1' xs='0' >
                    <p onMouseEnter={()=>{setMouseOnPartenaire(true)}} onMouseLeave={()=>{setMouseOnPartenaire(false)}}>Partenaire</p>
                </Col>
                <Col lg='2' md='1' xs='0' >
                    <p onMouseEnter={()=>{setMouseOnBeneficiare(true)}} onMouseLeave={()=>{setMouseOnBeneficiare(false)}}>Bénificiare</p>
                </Col>
                <Col lg='1' md='1' xs='0' >
                    <p onMouseEnter={()=>{setMouseOnProjet(true)}} onMouseLeave={()=>{setMouseOnProjet(false)}}>Projet</p>
                </Col>
                <Col lg='2' md='1' xs='0'>
                    <p onMouseEnter={()=>{setMouseOnDon(true)}} onMouseLeave={()=>{setMouseOnDon(false)}}>Faire Un Don</p>
                </Col>
            </Row>
            <Row className='drop-down-row'>
                {showAssociation && <DropDown mouseOn={()=>{setMouseOnDropDownAssociation(true)}} mouseOff={()=>{setMouseOnDropDownAssociation(false)}} links={AssociationItems}></DropDown>}
                {showDecouverte && <DropDown decouverte={true} mouseOn={()=>{setMouseOnDropDownDecouverte(true)}} mouseOff={()=>{setMouseOnDropDownDecouverte(false)}} links={DecouverteItems}></DropDown>}
                {showPartenaire && <DropDown mouseOn={()=>{setMouseOnDropDownPartenaire(true)}} mouseOff={()=>{setMouseOnDropDownPartenaire(false)}} links={partenaireItems}></DropDown>}
                {showBeneficiare && <DropDown mouseOn={()=>{setMouseOnDropDownBeneficiare(true)}} mouseOff={()=>{setMouseOnDropDownBeneficiare(false)}} links={BeneficiaireItems}></DropDown>}
                {showProjet && <DropDown mouseOn={()=>{setMouseOnDropDownProjet(true)}} mouseOff={()=>{setMouseOnDropDownProjet(false)}} links={ProjetItems}></DropDown>}
                {showDon && <DropDown mouseOn={()=>{setMouseOnDropDownDon(true)}} mouseOff={()=>{setMouseOnDropDownDon(false)}} links={DonItems}></DropDown>}
            </Row>
    </div>
  )
}

export default MenuPrincipal