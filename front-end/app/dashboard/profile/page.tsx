import React from 'react'
import Profie from './Profie'
import { AuthProvider } from '@/app/context/AuthContext'
import Footer from '@/app/components/Footer'

type Props = {}

const page = (props: Props) => {
  return (
<AuthProvider>

    <Profie/>
    <Footer/>
</AuthProvider>
  )
}

export default page