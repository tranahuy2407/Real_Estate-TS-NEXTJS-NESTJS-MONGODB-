"use client"
import React from 'react'

import { AuthProvider } from '@/app/context/AuthContext'
import Footer from '@/app/components/Footer'
import SlideBar from '@/app/components/SlideBar'
import ContentDashBoard from '../components/ContentDashBoard'

type Props = {}

const page = (props: Props) => {
  return (
        <AuthProvider>
          <ContentDashBoard/>
        <div className="fixed top-0 left-0 h-screen">
                  <SlideBar />
        </div>
        <div className="flex-1 p-4">
              
        </div>
        <div className="ml-20 flex-1 flex flex-col min-h-screen">
            <Footer/>
        </div>
        </AuthProvider>
  )
}

export default page