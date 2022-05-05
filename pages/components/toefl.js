import React from 'react'
import { motion } from "framer-motion"
function Toefl({photo}) {
  return (
    <div className='p-10 '>
        <h1 className='text-5xl portrait:text-3xl font-bold text-center p-10'>TOEFL</h1>
        <div className='flex flex-row bg-white shadow-lg rounded-lg'>
            <div className='p-10'>
                <p>English-speaking Universities require proof of your English language proficiency. The common exam result which is demanded is the TOEFL or IELTS, depending on where you are going for your University studies.</p>
                <h2 className='text-3xl font-bold text-center py-10 '>Need to learn English as an adult? </h2>
                <h2 className='text-3xl font-bold text-center py-10 '>TESOL ASBL can help you. </h2>
                <p className='mt-10 mb-10'>TESOL ASBL hosts the TOEFL iBT Home Edition exam. This is a live proctored exam that can be taken at the school online. </p>
                <p className='mt-10 mb-10'>TESOL ASBL offers preparation for TOEFL iBT, TOEFL Essentials and the IELTS British Council exam.</p>
                <p className='mt-10 mb-10'>Use our Contact Page for more information, or WhatsApp +243825916993, or email direct to tesoldrc@gmail.com</p>
            </div>
            <motion.img src={photo} className='portrait:w-0 portrait:h-0 md:w-1/2 rounded-xl object-cover' alt='home' whileHover={{scale: 1.2,transition: { duration: 1 },}} />
        </div>


    </div>
  )
}

export default Toefl