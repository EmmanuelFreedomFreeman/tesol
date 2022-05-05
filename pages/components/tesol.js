import React from 'react'
import { motion } from "framer-motion"
function Tesol({photo}) {
  return (
    <div className='p-10 '>
        <h1 className='text-5xl portrait:text-3xl font-bold text-center p-10'>TESOL NEWS</h1>
        <div className='flex flex-row bg-white shadow-lg rounded-lg justify-between'>
            <div className='p-10'>
                <h2 className='text-3xl font-bold text-center py-10 '>We are open for enrollment!</h2>
                <p><span className='font-bold'>Parents and visitors: </span>keep up to date with what is happening at TESOL ASBL.</p>
                <p>A full <span className='font-bold'>Primary School</span> program from <span className='font-bold'>Kindergarten to Grade 5</span>, based on the US Core Curriculum modified for our particular situation here in the DRC, is offered for our younger students. </p>
                <p className='mt-10 mb-10'>TESOL ASBL offers online <span className='font-bold'>Middle School</span> (Grades 6-8) with accredited US school report cards. This program started on 6 September, 2021. Rigorous, video-based with qualified teachers and secure online assessment systems, this program ensures your child’s readiness for High School. </p>
                <p className='mt-10 mb-10'>TESOL ASBL offers <span className='font-bold'>High School</span> (Grades 9-12) with an accredited US High School Diploma online program. A student may enroll at any time. Your family has these options:</p>
                <div className='ml-10 mb-10'>
                    <p><span className='font-bold'>* Standard High School Diploma</span> – 21.5 credits</p>
                    <p><span className='font-bold'>* Honors High School Diploma</span> - 24 credits</p>
                    <p><span className='font-bold'>* AP/Honors High School Diploma </span>- 24 credits</p>
                    <p>Credits may be transferred from other programs with a transcript evaluation.</p>
                </div>
                <p>TESOL ASBL offers a secure and supportive environment for online learning, and adds other important subjects and activities such as Bible, French, Art, Music, Physical Education, and Community Service, so that all our students receive a Christian, holistic education.</p>
                
            </div>
            <motion.img src={photo} className='portrait:w-0 portrait:h-0 md:w-1/2 rounded-xl object-cover' alt='home' whileHover={{scale: 1.2,transition: { duration: 1 },}} />
        </div>


    </div>
  )
}

export default Tesol