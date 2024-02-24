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
import AdminHome from './pages/admin/Home/AdminHome'
import DisplayAllUsers from './pages/admin/Manage/users/DisplayAllUsers'
import DisplayAllActualite from './pages/admin/Manage/actualités/DisplayAllActualite'
import DisplayAllCarouselItems from './pages/admin/Manage/carousel/DisplayAllCarouselItems'
import DisplayAllEspeces from './pages/admin/Manage/Especes/DisplayAllEspeces'
import DisplayAllPartenaires from './pages/admin/Manage/partenaires/DisplayAllPartenaires'
import DisplayAllProjects from './pages/admin/Manage/Projets/DisplayAllProjects'
import DisplayAllParcs from './pages/admin/Manage/parcs/DisplayAllParcs'
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
    const Admin_router=createBrowserRouter(
      createRoutesFromElements(
        <>
          <Route path='/' element={<AdminHome/>}/>
          <Route path='/news' element={<DisplayAllActualite></DisplayAllActualite>}/>
          <Route path='/users' element={<DisplayAllUsers></DisplayAllUsers>}/>
          <Route path='/carousel' element={<DisplayAllCarouselItems></DisplayAllCarouselItems>}/>
          <Route path='/especes' element={<DisplayAllEspeces></DisplayAllEspeces>}/>
          <Route path='/partenaires' element={<DisplayAllPartenaires></DisplayAllPartenaires>}/>
          <Route path='/projet' element={<DisplayAllProjects></DisplayAllProjects>}/>
          <Route path='/parcs' element={<DisplayAllParcs></DisplayAllParcs>}/>
        </>
      ))
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
