import React from 'react'
import Home from './pages/Home.jsx'
import Navbar from './component/Navbar.jsx'
import AboutUs from './pages/AboutUs.jsx'
import OurServices from './pages/OurServices.jsx'
import Login from './pages/login.jsx'
import SignUp from './pages/SignUpPage.jsx'
import Contact from './pages/Contact.jsx'
import Footer from './component/footer.jsx'
import { Route, Routes } from 'react-router-dom'
function App() {
 

  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/about' element={<AboutUs/>}/>
      <Route path='/services' element={<OurServices/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/SignUp' element={<SignUp/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    <Footer />

    </>
  )
}

export default App
