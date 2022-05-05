import React from 'react'
import { motion } from "framer-motion"
function Employment({photo}) {
  return (
    <div className='p-10 '>
        <h1 className='text-5xl portrait:text-3xl font-bold text-center p-10'>Employment Opportunities</h1>
        <div className='flex flex-row bg-white shadow-lg rounded-lg'>
            <div className='p-10'>
                <p className='mb-5'>The English-speaking School of Lubumbashi is building a staff who are committed to the vision of the school. </p>
                <p className='mb-5'>Administrative Staff must be bilingual (English and French)</p>
                <p className='mb-5'>Teachers must have an excellent level of English in hearing, speaking, reading and writing.</p>
                <p className='mb-5'>Auxiliary staff must demonstrate a willingness to improve their level of English. TESOL is committed to assisting that process.</p>
                <p className='mb-5'>An <a href='/TESOL+Employment+Application+2020+PDF.pdf' className='font-bold text-3xl text-blue-600'>Employment Application</a> may be downloaded to fill in and send to tesoldrc@gmail.com</p>
                <h2 className='text-3xl font-bold text-center py-10 '>Current Needs:</h2>
                <p className='mb-5'>Qualified Early Primary Teacher: for ages 5-6 years (Kindergarten & Grade 1)</p>
            
            
            </div>
            <motion.img src={photo} className='portrait:w-0 portrait:h-0 md:w-1/2 rounded-xl object-cover' alt='home' whileHover={{scale: 1.2,transition: { duration: 1 },}} />
        </div>


    </div>
  )
}

export default Employment