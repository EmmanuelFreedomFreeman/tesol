import React from 'react'
import { motion } from "framer-motion"
function Contact({photo}) {
  return (
    <div className='p-10 '>
        <h1 className='text-5xl portrait:text-3xl font-bold text-center p-10'>Contact us</h1>
        <div className='flex flex-row justify-between bg-white shadow-lg rounded-lg'>
            <div className='p-10'>
                <h2 className='text-3xl font-bold text-center py-10 '>Administration:</h2>
                <p className='mb-10'> <span className='font-bold'>E-mail: </span><a href='mailto:tesoldrc@gmail.com' className='font-bold text-2xl text-blue-600 cursor-pointer'>tesoldrc@gmail.com</a></p>
                <p className='mb-10'> <span className='font-bold'>Telephone: </span>Director, Bethany Saxby (243) 82 591 6993</p>
                <p className='mb-10'> <span className='font-bold'>Website: </span>www.tesolschool.org</p>
                <p className='mb-10'> <span className='font-bold'>Address: </span>476, Av. Le Verger, Quartier GOLF (opposite the Golf course)</p>

                
            </div>
            <motion.img src={photo} className='portrait:w-0 portrait:h-0 md:w-1/2 rounded-xl object-cover' alt='home' whileHover={{scale: 1.2,transition: { duration: 1 },}} />
        </div>


    </div>
  )
}

export default Contact