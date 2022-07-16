import React from 'react'
import Link from "next/link";

const Modal = () => {
  return (
    <>
   
    <div class=" w-60 h-auto
            fixed 
            flex 
            flex-col
            gap-4
            top-20 md:right-10 right-12
            bg-primary drop-shadow-xl pl-3 pt-5 ease-in-out duration-900 z-20 pb-10">
            <div className="flex flex-row gap-2">
            <div className="w-2 h-2 bg-secondary align-center mt-2"></div>
            <Link href="/">
                
              <a className=" ">
                Job Seeker
              </a>
            </Link>
            </div>
                
            <div className="flex flex-row gap-2">
            <div className="w-2 h-2 bg-secondary align-center mt-2"></div>
            <Link href="/">
                
              <a className=" ">
                Recruiter Agent
              </a>
            </Link>
            </div>
            <div className="flex flex-row gap-2">
            <div className="w-2 h-2 bg-secondary align-center mt-2"></div>
            <Link href="/">
                
              <a className=" ">
                Employer
              </a>
            </Link>
            </div>
        
    </div>

    
    </>
    
  )
}

export default Modal