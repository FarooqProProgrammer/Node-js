import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./pages/Home"
import Donations from './pages/Donations'
import Education from './pages/Education'
import Service from './pages/Service'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Donations' element={<Donations/>}/>
        <Route path='/Service' element={<Service/>}/>
        <Route path='/Education' element={<Education/>}/>
        
      </Routes>
    </BrowserRouter>
  )
}

export default App