import React from 'react'
import { motion } from "framer-motion"
function Alumni({photo}) {
  return (
    <div className='p-10 '>
        <h1 className='text-5xl portrait:text-3xl font-bold text-center p-10'>Alumni</h1>
        <div className='flex flex-row bg-white shadow-lg rounded-lg'>
            <div className='p-10'>
                <h2 className='text-3xl font-bold text-center py-10 '>Students have been graduating from the TESOL program since 2008. </h2>
                <p>TESOL ASBL is updating our files and would love to hear from our past students. Please click <a href='/TESOL+Alumni+Registration+Form+2020+PDF+Final.pdf' className='font-bold text-3xl text-blue-600'>HERE</a> to register</p>
                
            </div>
            <motion.img src={photo} className='portrait:w-0 portrait:h-0 md:w-1/2 rounded-xl object-cover' alt='home' whileHover={{scale: 1.2,transition: { duration: 1 },}} />
        </div>
    </div>
  )
}

export default Alumni