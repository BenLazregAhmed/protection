import { useState } from 'react'
import './App.css'
import {createRoutesFromElements,createBrowserRouter, Routes, Route, Link , NavLink, RouterProvider } from 'react-router-dom'
import HomeLayout from './pages/Acceuil/HomeLayout'
import Partenaires from './pages/Partenaires/Partenaires'
import Projects from './pages/Projets/Projects'
import PartenairesAssociatives from './pages/Partenaires/PartenairesAssociatives'
import PartenaireEntreprise from './pages/Partenaires/PartenaireEntreprise'
import Parcs from './pages/Découverte/Les Parcs/Parcs'
import LieuxLoisir from './pages/Découverte/Lieux de Loisirs/LieuxLoisir'
import Circuit from './pages/Découverte/les Circuits/Circuit'
import SecoursAnimal from './pages/Conseils/SecoursAnimal/SecoursAnimal'
import SecoursPlantes from './pages/Conseils/SecoursPlantes/SecoursPlantes'
import EspècesAnimales from './pages/Espèces Rares/Animales/EspècesAnimales'
import EspècesVégétales from './pages/Espèces Rares/Végétales/EspècesVégétales'
import FaireUnDon from './pages/Don/FaireUnDon'
import Login from './pages/Login/Login'
import SignUp from './pages/SignUp/SignUp'
import Status from './pages/Status/Status'
import Politiques from './pages/Protection/Politiques/Politiques'
import Signalement from './pages/Protection/Signalement/Signalement'
import BénéficiaireActuel from './pages/Bénéficiaires/Bénéficaires Actuels/BénéficiaireActuel'
import BénéficaireAncien from './pages/Bénéficiaires/Bénéficaires Anciens/BénéficaireAncien'
import DevenirBénéficaire from './pages/Bénéficiaires/Devenir Bénéficaire/DevenirBénéficaire'
function App() {
  const router=createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<HomeLayout/>}/>
        <Route path='/Status'  element={<Status />}></Route>
        <Route path='/PartenairesPublic' element={<Partenaires/>}/>
        <Route path='/PartenaireEntreprise' element={<PartenaireEntreprise/>} />
        <Route path='/PartenairesAssociatives' element={<PartenairesAssociatives/>}/>
        <Route path='/BénéficiaireActuel' element={<BénéficiaireActuel/>} />
        <Route path='/BénéficaireAncien' element={<BénéficaireAncien/>}/>
        <Route path='/DevenirBénéficaire' element={<DevenirBénéficaire/>} />
        <Route path='/ListeProjets' element={<Projects/>}/>
        <Route path='/Circuit' element={<Circuit/>} />
        <Route path='/Parcs' element={<Parcs/>}/>
        <Route path='/LieuxDeLoisirs' element={<LieuxLoisir/>}/>
        <Route path='/Politiques' element={<Politiques/>} />
        <Route path='/Signalement' element={<Signalement/>}/>
        <Route path='/SecoursAnimal' element={<SecoursAnimal/>}/>
        <Route path='/SecoursPlantes' element={<SecoursPlantes/>}/>
        <Route path='/EspècesAnimales' element={<EspècesAnimales />}/>
        <Route path='/EspècesVégétales' element={<EspècesVégétales />} />
        <Route path='/don' element={<FaireUnDon/>}/>
        <Route path='/login' element={<Login></Login>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
      </>
    ))

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
