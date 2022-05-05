import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion"
function Home({photo}) {
  return (
    <div className='p-10 '>
        <h1 className='text-5xl portrait:text-3xl font-bold text-center p-10'>A Christian International School</h1>
        <div className='flex flex-row bg-white shadow-lg rounded-lg'>
            <div className='p-10'>
                <h2 className='text-3xl font-bold text-center py-10 '>A Christian International School</h2>
                <p>TESOL ASBL operates officially as a Christian Not-for-Profit educational organization under Congolese law, with a parent-based school board. The school is a member of the Association of Christian International Schools. </p>
                <h2 className='text-3xl font-bold text-center py-10 '>Mature in Christ</h2>
                <p>Our purpose is to provide excellent English education in a Christian community environment which aims to see students become mature Christians with a Biblical worldview and a heart to serve God in the capacity for which He equips them.</p>
                <h2 className='text-3xl font-bold text-center py-10 '>A community of teaching, learning and serving excellence</h2>
                <p>The English-speaking School of Lubumbashi (TESOL ASBL) offers education in English for students from Kindergarten (age 5) through to Grade 12.</p>
                <p>For children for whom English is new, TESOL ASBL offers an extra one year intensive English learning course to learn to speak, read and write standard English if they enroll at the level of Grade 3 or 4 Primary school.</p>
                <h2 className='text-3xl font-bold text-center  py-10'>Our school year</h2>
                <p>The school year runs September through June with three terms: September - December, January through March, and April - June.</p>
            </div>
            <motion.img src={photo} className='portrait:w-0 portrait:h-0 md:w-1/2 rounded-xl object-cover' alt='home' whileHover={{scale: 1.2,transition: { duration: 1 },}} />
        </div>


    </div>
  )
}

export default Home