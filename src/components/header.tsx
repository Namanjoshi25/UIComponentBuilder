"use client"
import { useAuth } from '@clerk/nextjs';

import Link from 'next/link';
import React from 'react'
import { SiReact } from "react-icons/si";

export default  function Header() {
  const { userId } = useAuth();
  return (
    <nav className=" flex m-5 max-sm:mt-9 mx-8 items-center justify-between max-sm:flex-col">

      <div className=" flex gap-2 items-center">

        <div className={` bg-sky-500 felx items-center justify-center p-[6px]  rounded-md`}>
          <div className=" w-[26px] h-[26px] items-center justify-center flex">
            <SiReact className=" text-white text-[22px]"/>

          </div>

        </div>
        <div className=" flex gap-1 text-[22px]">
          <span className=" font-bold text-sky-500">React</span>
          <span className=" text-slate-600">Shelf</span>
        </div>
      </div>
      <div className=" flex gap-2 max-sm:flex-col  max-sm:w-full max-sm:mt-8">
        {!userId ? 
      <>
      <Link href={"/sign-in"}>
      <button className={`max-sm:w-full text-sm border rounded-md px-6 p-[8px] border-sky-500 text-white bg-sky-500`}>
         Sign In
      </button>
      </Link>
      <Link href={"/sign-up"}>
      <button className={`max-sm:w-full text-sm border rounded-md px-6 p-[8px] border-sky-500 text-white bg-sky-500`}>
         Sign Up
      </button>
      </Link>
  
      </>
      : 
      <Link href={"/dashboard"}>
      <button className={`max-sm:w-full text-sm border rounded-md px-6 p-[8px] border-sky-500 text-white bg-sky-500`}>
         Dashboard
      </button>
      </Link>

      }
      
     </div>
     </nav>
  )
}

