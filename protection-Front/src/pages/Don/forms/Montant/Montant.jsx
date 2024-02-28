import React, { useState } from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import ButtonMontant from './ButtonMonatnt/ButtonMontant'
import './Montant.css'
function Montant() {
    const [selected1,setSelected1]=useState(false);
    const [selected2,setSelected2]=useState(false);
    const [selected3,setSelected3]=useState(false);
    const [selected4,setSelected4]=useState(true);
    const [selected5,setSelected5]=useState(false);
    const [selected6,setSelected6]=useState(false);
    const [val,setVal]=useState();
    const handleclick=(e) => {
       switch(e){
        case 1:
            setSelected1(true);
            setSelected2(false);
            setSelected3(false);
            setSelected4(false);
            setSelected5(false);
            setSelected6(false);
            setVal('10');
            break;
        case 2:
            setSelected1(false);
            setSelected2(true);
            setSelected3(false);
            setSelected4(false);
            setSelected5(false);
            setSelected6(false);
            setVal('20');
            break;
        case 3:
            setSelected1(false);
            setSelected2(false);
            setSelected3(true);
            setSelected4(false);
            setSelected5(false);
            setSelected6(false);
            setVal('50');
            break;
        case 4:
            setSelected1(false);
            setSelected2(false);
            setSelected3(false);
            setSelected4(true);
            setSelected5(false);
            setSelected6(false);
            setVal('100');
            break;
        case 5:
            setSelected1(false);
            setSelected2(false);
            setSelected3(false);
            setSelected4(false);
            setSelected5(true);
            setSelected6(false);
            setVal('200');
            break;
        case 6:
            setSelected1(false);
            setSelected2(false);
            setSelected3(false);
            setSelected4(false);
            setSelected5(false);
            setSelected6(true);
            setVal('500');
            break;
        default:
            break;
       }
    }
  return (
    <div className='montant'>
        <Container>
            <Row className='row-titre-montant'>
                <h2>Montant</h2>
            </Row>
            <Row className='row-btn-mtn'>
                <Col>
                    <ButtonMontant onClick={()=>handleclick(1)} selected={selected1} text={"10"}></ButtonMontant>
                </Col>
                <Col>
                    <ButtonMontant onClick={()=>handleclick(2)} selected={selected2} text={"20"}></ButtonMontant>
                </Col>
                <Col>
                    <ButtonMontant onClick={()=>handleclick(3)} selected={selected3} text={"50"}></ButtonMontant>
                </Col>
            </Row>
            <Row className='row-btn-mtn'>
                <Col>
                    <ButtonMontant onClick={()=>handleclick(4)} selected={selected4} text={"100"}></ButtonMontant>
                </Col>
                <Col>
                    <ButtonMontant onClick={()=>handleclick(5)} selected={selected5} text={"200"}></ButtonMontant>
                </Col>
                <Col>
                    <ButtonMontant  onClick={()=>handleclick(6)}selected={selected6} text={"500"}></ButtonMontant>
                </Col>
            </Row>
            <Row className='mtn-libre'>
                <input type="number" value={val} onChange={(e)=>setVal(e.target.value)} placeholder='Entrer Votre Montant'></input>
            </Row>
        </Container>
    </div>
  )
}

export default Montant