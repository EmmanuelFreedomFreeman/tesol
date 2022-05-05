import React from 'react'
import { useRouter } from 'next/router'
import { motion } from "framer-motion"
import Footer from './components/footer'
import Home from './components/home'
import Vision from './components/vision'
import Pay from './pay'
import Statement from './components/statement'
import Accredited from './components/accredited'
import Prospective from './components/prospective'
import Curriculum from './components/curriculum'
import Fees from './components/fees'
import Calendar from './components/calendar'
import Toefl from './components/toefl'
import Contact from './components/contact'
import Tesol from './components/tesol'
import Employment from './components/employment'
import Alumni from './components/alumni'
function Info() {
    const router = useRouter()
    console.log(router.query)
  return (
    <div>
      <motion.div className="bg-[url('/Flyer+pic+TESOL+ASBL.png')] bg-center
      bg-no-repeat bg-cover shadow-lg w-screen lg:h-96 md:h-56 sm:h-48 portrait:h-48">
          <motion.h2 className='bg-gradient-to-r from-blue-500 to-transparent font-bold text-zinc-100 text-center lg:text-7xl lg:py-10 md:text-3xl md:-py-10 sm:text-3xl'  initial={{y: -250}} animate={{y:151}} >The English-speaking School of Lubumbashi ASBL</motion.h2>
      </motion.div>

        <div className="bg-[url('/bgg.jpg')] bg-center bg-no-repeat bg-cover shadow-lg m-10 portrait:m-3" >{router.query.title == 'HOME' && (<Home photo={router.query.photo}/>)}</div>
        <div className="bg-[url('/bgg.jpg')] bg-center bg-no-repeat bg-cover shadow-lg m-10 portrait:m-3" >{router.query.title == 'VISION AND MISSION' && (<Vision photo={router.query.photo}/>)}</div>
        <div className="bg-[url('/bgg.jpg')] bg-center bg-no-repeat bg-cover shadow-lg m-10 portrait:m-3" >{router.query.title == 'STATEMENT OF FAITH' && (<Statement photo={router.query.photo}/>)}</div>
        <div className="bg-[url('/bgg.jpg')] bg-center bg-no-repeat bg-cover shadow-lg m-10 portrait:m-3" >{router.query.title == 'Accredited US Online Middle and High School program' && (<Accredited photo={router.query.photo}/>)}</div>
        <div className="bg-[url('/bgg.jpg')] bg-center bg-no-repeat bg-cover shadow-lg m-10 portrait:m-3" >{router.query.title == 'Prospective students' && (<Prospective photo={router.query.photo}/>)}</div>
        <div className="bg-[url('/bgg.jpg')] bg-center bg-no-repeat bg-cover shadow-lg m-10 portrait:m-3" >{router.query.title == 'Curriculum' && (<Curriculum photo={router.query.photo}/>)}</div>
        <div className="bg-[url('/bgg.jpg')] bg-center bg-no-repeat bg-cover shadow-lg m-10 portrait:m-3" >{router.query.title == 'Fees' && (<Fees photo={router.query.photo}/>)}</div>
        <div className="bg-[url('/bgg.jpg')] bg-center bg-no-repeat bg-cover shadow-lg m-10 portrait:m-3" >{router.query.title == 'Calendar' && (<Calendar photo={router.query.photo}/>)}</div>
        <div className="bg-[url('/bgg.jpg')] bg-center bg-no-repeat bg-cover shadow-lg m-10 portrait:m-3" >{router.query.title == 'TOEFL' && (<Toefl photo={router.query.photo}/>)}</div>
        <div className="bg-[url('/bgg.jpg')] bg-center bg-no-repeat bg-cover shadow-lg m-10 portrait:m-3" >{router.query.title == 'Contact' && (<Contact photo={router.query.photo}/>)}</div>
        <div className="bg-[url('/bgg.jpg')] bg-center bg-no-repeat bg-cover shadow-lg m-10 portrait:m-3" >{router.query.title == 'TESOL NEWS' && (<Tesol photo={router.query.photo}/>)}</div>
        <div className="bg-[url('/bgg.jpg')] bg-center bg-no-repeat bg-cover shadow-lg m-10 portrait:m-3" >{router.query.title == 'Employment Opportunities' && (<Employment photo={router.query.photo}/>)}</div>
        <div className="bg-[url('/bgg.jpg')] bg-center bg-no-repeat bg-cover shadow-lg m-10 portrait:m-3" >{router.query.title == 'Alumni' && (<Alumni photo={router.query.photo}/>)}</div>



        <div className="bg-[url('/bgg.jpg')] bg-center bg-no-repeat bg-cover shadow-lg m-10 portrait:m-3">{router.query.pay == 1 && (<Pay/>)}</div>
      <Footer/>
    </div>
  )
}

export default Info