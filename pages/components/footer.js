import React from 'react'
import { motion } from "framer-motion"
function Footer() {
  return (
    <div className="flex lg:flex-row md:flex-row sm:flex-col portrait:flex-col justify-between sm:bg-[url('/bg.png')] md:bg-[url('/bg.jpg')] portrait:bg-[url('/bg.png')] bg-center bg-no-repeat bg-cover shadow-lg p-10 m-2 text-2xl font-bold rounded-lg" >
        <div className='text-center'>
            <h1 className='text-4xl font-bold'>CONTACT INFORMATION</h1>
            <h2>Democratic Republic of Congo (DRC)</h2>
            <h3>E-mail: tesoldrc@gmail.com</h3>
            <h3>Telephone: Director, Bethany Saxby (243) 82 591 6993</h3>
            <h3>Website: www.tesolschool.org</h3>
            <h3>Address: 476, Av. Le Verger, Quartier GOLF (opposite the Golf course)</h3>

        </div>

        <div className='text-center'>
            <h1 className='text-4xl font-bold'>SOME USEFUL LINKS</h1>
            <h2>Class schedules</h2>
            <h3>See news</h3>
        </div>

        <div className='text-center justify-center'>
            <h1 className='text-4xl font-bold'>STAY CONNECTED</h1>
            <div className='flex flex-row'>
                <motion.img className='w-20 h-20 cursor-pointer' src='/GooglePlus.svg' />
                <motion.img className='w-20 h-20 cursor-pointer' src='/Facebook.svg' />
                <motion.img className='w-20 h-20 cursor-pointer' src='/Youtube.svg' />
            </div>
            
        </div>


    </div>
  )
}

export default Footer