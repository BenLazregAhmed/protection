import React from 'react'
import NavBar2 from '../../components/NavBar2/NavBar2'
import Destination from '../../components/Body/Section1/Destination'
import Actualite from '../../components/Body/Section2/Actualite'
import Footer from '../../components/Footer/Footer'
import Informations from '../../components/Body/Section3/Informations'
import Impact from '../../components/Body/Section4/Impact'
import Tech from '../../components/Body/Section5/Tech'
import './HomeLayout.css'
function HomeLayout() {
  return (
    <>
      <header className='home-page-header'>
        <NavBar2></NavBar2> 
      </header>
        <main>
            <Destination></Destination>
            <Actualite></Actualite>
            <Informations></Informations>
            <Impact></Impact>
            <Tech></Tech>
        </main>
        <footer>
            <Footer></Footer>
        </footer>
    </>
  )
}

export default HomeLayout