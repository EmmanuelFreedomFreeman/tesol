import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/Home.module.css'
import { motion } from "framer-motion"
import Footer from './footer'

function Bobies() {
    const navdetails = [
      {
        id: 1,
        photo: '/20210205_094503.jpg',
        link: '/',
        title: 'HOME',
        subtitle: 'TESOL ASBL operates officially as a Christian Not-for-Profit educational organization under Congolese law, with a parent-based school board. The school is a member of the Association of Christian International Schools. ',
      },
      {
        id: 2,
        photo: '/TESOL+Kins+tree+pic.jpeg',
        link: '/',
        title: 'VISION AND MISSION',
        subtitle: 'To provide a Christian educational community as a center of teaching, learning and serving excellence, founded on biblically based beliefs, values and behavior. ',
      },
      {
        id: 3,
        photo: '/Bible+image+for+web-site+2.jpg',
        link: '/',
        title: 'STATEMENT OF FAITH',
        subtitle: "The Bible is God's Word, inspired by the Holy Spirit and without error in the original writings. It is our sole authority and absolutely binding in all matters of faith and conduct. ",
      },
      {
        id: 4,
        photo: '/20210217_125147+(2).jpg',
        link: '/',
        title: 'Accredited US Online Middle and High School program',
        subtitle: "In order to ensure an internationally recognized High School diploma, TESOL ASBL cooperates with an Online Education System in the USA for the years of Middle (Grades 6-8)  and Secondary (Grades 9-12) School, enabling candidates to earn a full U.S. high school diploma in Lubumbashi. ",
      },
      {
        id: 5,
        photo: '/20210629_124250.jpg',
        link: '/',
        title: 'Prospective students',
        subtitle: "TESOL ASBL welcomes students of all nationalities, genders, religions and ethnic groups. Over the years, up to twenty-two nationalities from four continents have been represented.",
      },
      {
        id: 6,
        photo: '/20210205_094556.jpg',
        link: '/',
        title: 'Curriculum',
        subtitle: "The English-speaking School of Lubumbashi (TESOL ASBL) is an International Christian school, which offers a final diploma from an accredited online school based in the USA. Such a Diploma allows entry to University programs around the world. ",
      },
      {
        id: 7,
        photo: '/fees.jpg',
        link: '/',
        title: 'Fees',
        subtitle: "Please contact us for our fee structure. We offer significant discounts to families bringing more than one child.",
      },
      {
        id: 8,
        photo: '/calendar+logo.png',
        link: '/',
        title: 'Calendar',
        subtitle: "We are officially opening on Monday, 23 August, 2021. ",
      },
      {
        id: 9,
        photo: '/unsplash-image-3EMw3T-ZjkE.jpg',
        link: '/',
        title: 'TOEFL',
        subtitle: "English-speaking Universities require proof of your English language proficiency. The common exam result which is demanded is the TOEFL or IELTS, depending on where you are going for your University studies.",
      },
      {
        id: 10,
        photo: '/african-male-hands-holding-mobile-phone.jpg',
        link: '/',
        title: 'Contact',
        subtitle: "E-mail: tesoldrc@gmail.com , Telephone: Director, Bethany Saxby (243) 82 591 6993 , Website: www.tesolschool.org <br> Address: 476, Av. Le Verger, Quartier GOLF (opposite the Golf course)",
      },
      {
        id: 11,
        photo: '/20210205_130223 (1).jpg',
        link: '/',
        title: 'TESOL NEWS',
        subtitle: "Parents and visitors: keep up to date with what is happening at TESOL ASBL.",
      },
      {
        id: 12,
        photo: '/image-asset.jpeg',
        link: '/',
        title: 'Employment Opportunities',
        subtitle: "The English-speaking School of Lubumbashi is building a staff who are committed to the vision of the school. Administrative Staff must be bilingual (English and French) Teachers must have an excellent level of English in hearing, speaking, reading and writing.",
      },
      {
        id: 13,
        photo: '/Alumni.jpg',
        link: '/',
        title: 'Alumni',
        subtitle: "Students have been graduating from the TESOL program since 2008. ",
      },
    
    ]

  return (
    <div>
      <motion.div className="bg-[url('/Flyer+pic+TESOL+ASBL.png')] bg-center
      bg-no-repeat bg-cover shadow-lg w-screen lg:h-96 md:h-56 sm:h-48 portrait:h-48">
          <motion.h2 className='bg-gradient-to-r from-blue-500 to-transparent font-bold text-zinc-100 text-center lg:text-7xl lg:py-10 md:text-3xl md:-py-10 sm:text-3xl'  initial={{y: -250}} animate={{y:151}} >The English-speaking School of Lubumbashi ASBL</motion.h2>
      </motion.div>

      <Nav navdetails={navdetails} />
      <Footer/>
    </div>
  )
}


const Nav = ({navdetails}) =>{
  const router = useRouter()

    return(
      <div className={styles.scroll} >
          {navdetails.map((nav) =>(
            
            <div className='shadow-lg rounded-t-lg bg-slate-40 ml-10 ' key={nav.id} onClick={() => {router.push({pathname: nav.link, query: nav});  } }>
              
              <motion.img src={nav.photo} className='rounded-t-lg object-cover bg-center w-full lg:max-h-48 portrait:max-h-24 md:max-h-48 h-48 sm:max-h-48 cursor-pointer' whileHover={{scale: 1.2,transition: { duration: 1 },}} />
              <h2 className='font-bold text-lg text-center' >{nav.title}</h2>
              <p className='cursor-text w-72 p-2'>{nav.subtitle.length >= 100 ? (nav.subtitle.slice(0,100).concat('.....')) : (nav.subtitle) }</p>
            </div>
          ))}
          
      </div>
    )
  
}
  

export default Bobies