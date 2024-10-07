import React from 'react'
import Navbar from './components/Navbar'
import { AuthProvider } from './context/AuthContext'
import Footer from './components/Footer'
import Carousel_Fillter from './components/Carousel_Fillter'


const Home = () => {
  return (
    <div className="px-5 mx-auto w-full">
      <AuthProvider>
       <Navbar/>
       <Carousel_Fillter/>
       <Footer/>
       </AuthProvider>
    </div>
   )}

export default Home