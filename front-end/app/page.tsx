"use client"
import React from 'react'
import Navbar from './components/Navbar'
import { AuthProvider } from './context/AuthContext'
import Footer from './components/Footer'
import Carousel_Fillter from './components/Carousel_Fillter'
import { store } from './redux/store';
import { Provider } from 'react-redux'

const Home = () => {
  return (
    <div className="px-5 mx-auto w-full">
     <Provider store={store}>
      <AuthProvider >
       <Navbar/>
       <Carousel_Fillter/>
       <Footer/>
       </AuthProvider>
       </Provider>
    </div>
   )}

export default Home