import { SignIn } from '@clerk/nextjs';
import React from 'react'

function LogIn() {
  return (
    <div className=' w-full h-screen flex justify-center items-center'>
        <SignIn/>
    </div>
  )
}

export default LogIn