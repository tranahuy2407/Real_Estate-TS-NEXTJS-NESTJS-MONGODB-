"use client"
import React from 'react'
import PostHome from './PostHome'
import { AuthProvider } from '@/app/context/AuthContext'


type Props = {}

const page = (props: Props) => {
  return (
    <AuthProvider>
        <PostHome/>
    </AuthProvider>
  )
}

export default page