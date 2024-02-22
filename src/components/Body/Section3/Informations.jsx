import React from 'react'
import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import './Information.css'
import Participer from './les tabs/Participer/Participer';
import Decouvrir from './les tabs/Découvrir/Decouvrir';
import Explorer from './les tabs/Explorer/Explorer';

function Informations() {
    const [key, setKey] = useState('Découvrir');
  return (
    
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="custom-tabs"
      fill
      justify
    >
      <Tab eventKey="Découvrir" title="Découvrir" className='tab'>
        <Decouvrir></Decouvrir>
      </Tab>
      <Tab eventKey="Participer" title="Participer" className='tab'>
        <Participer></Participer>      
      </Tab>
      <Tab eventKey="Explorer" title="Explorer" className='tab'>
        <Explorer></Explorer>     
      </Tab>
    </Tabs>
  )
}

export default Informations