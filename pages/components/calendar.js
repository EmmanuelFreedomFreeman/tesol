import React from 'react'
import { motion } from "framer-motion"
function Calendar({photo}) {
  return (
    <div className='p-10 '>
        <h1 className='text-5xl portrait:text-3xl font-bold text-center p-10'>We are officially opening on Monday, 23 August, 2021. </h1>
        <div className='flex flex-row bg-white shadow-lg rounded-lg'>
            <div className='p-10'>
                <h2 className='text-3xl font-bold text-center py-10 '>Term 1:  6 September 2021 – 17 December 2021 </h2>
                <p>(High School Online students may enroll and start by 23 August, 2021. Middle and Primary School commence 6 September, 2021. Mid Term break of one week: 25-29 October, 2021)</p>
                <h2 className='text-3xl font-bold py-10 '>Term 2: 10 January 2022 – 1 April 2022</h2>
                <h2 className='text-3xl font-bold py-10 '>Term 3: 18 April 2022 – 29 June 2022</h2>
                <a href='/TESOL+ASBL+academic+calendar+2021_2022+pdf.pdf' ><p className='text-center bg-red-400 p-10 rounded-full hover:bg-red-600 text-4xl font-bold'>2021-2022 SCHOOL CALENDAR</p></a>
            </div>
            <motion.img src={photo} className='portrait:w-0 portrait:h-0 md:w-1/2 rounded-xl object-cover' alt='home' whileHover={{scale: 1.2,transition: { duration: 1 },}} />
        </div>


    </div>
  )
}

export default Calendar