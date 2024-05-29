import React from 'react'
import "./index.css"
import Home from './Home'
import Contact from './Contact'
import Service from './Service'
import About from './About'
import { Route, Routes } from 'react-router-dom'
import { redirect } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

const App = () => {
  return (
    <>
      <Navbar/>
       <Routes>
          <Route path="/" element={<Home/>}/>
          <Route exact path="/contact" element={<Contact/>}/>
          <Route exact path="/service" element={<Service/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route path="*" element={<Home/>}/>
       </Routes>
       <Footer/>
    </>
  )
}

export default App;
