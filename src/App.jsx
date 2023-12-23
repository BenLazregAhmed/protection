import { useState } from 'react'
import './App.css'
import {createRoutesFromElements,createBrowserRouter, Routes, Route, Link , NavLink, RouterProvider } from 'react-router-dom'
import HomeLayout from './pages/Acceuil/HomeLayout'
import FaireUnDon from './pages/Don/FaireUnDon'
import Login from './pages/Login/Login'
import SignUp from './pages/SignUp/SignUp'

function App() {
  const router=createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<HomeLayout/>}/>
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
