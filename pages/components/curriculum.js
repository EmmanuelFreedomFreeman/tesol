import React from 'react'
import {motion} from 'framer-motion'
function Curriculum({photo}) {
  return (
    <div className='p-10 '>
        <h1 className='text-5xl portrait:text-3xl font-bold text-center p-10'>Curriculum</h1>
        <div className='flex flex-row bg-white shadow-lg rounded-lg'>
            <div className='p-10'>
                <h2 className='text-3xl font-bold text-center py-10 '>Curriculum</h2>
                <p className='mt-10 mb-10'>The English-speaking School of Lubumbashi (TESOL ASBL) is an International Christian school, which offers a final diploma from an accredited online school based in the USA. Such a Diploma allows entry to University programs around the world. </p>
                <p className='mt-10 mb-10'>Most of our material is imported from America and the United Kingdom, but we are not exclusively using an American curriculum, nor are we an American school. We use essential components of the US Core Curriculum, with additions to suit our unique needs as a Christian International school in a French speaking country.</p>
                <p className='mt-10 mb-10'>The basic curriculum covers the English Language Arts, French, Math, Science, Social Studies, Information Technology, Art, Bible, Art, Music and  Physical Education. </p>
            
            </div>
            <motion.img src={photo} className='portrait:w-0 portrait:h-0 md:w-1/2 rounded-xl object-cover' alt='home' whileHover={{scale: 1.2,transition: { duration: 1 },}} />
        </div>


    </div>
  )
}

export default Curriculum