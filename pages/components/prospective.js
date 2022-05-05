import React from 'react'
import {motion} from 'framer-motion'
function Prospective({photo}) {
  return (
    <div className='p-10 '>
        <h1 className='text-5xl portrait:text-3xl font-bold text-center p-10'>Prospective students</h1>
        <div className='flex flex-row bg-white shadow-lg rounded-lg'>
            <div className='p-10'>
                <h2 className='text-3xl font-bold text-center py-10 '>Information for Prospective Students</h2>
                <p>TESOL ASBL welcomes students of all nationalities, genders, religions and ethnic groups. Over the years, up to twenty-two nationalities from four continents have been represented.</p>
                <p>To enroll in the Primary School program for a particular school year, we prefer that a child must have reached age 5 by the start of classes in September. </p>
                <h2 className='text-3xl font-bold  py-10 '>Grade Placement</h2>
                <p>As a school with small classes which tries to address the educational needs of each child, all new students are tested for grade placement. Schools differ in their grade level numbering, program expectations, and of course language of instruction.  Your child might not start at TESOL ASBL in the same grade level where he/she would have been in his/her previous school. However, we do not adhere to a rigid set of standards in determining grade placement; many factors are taken into consideration.</p>
                
                <h2 className='text-3xl font-bold  py-10 '>New To English?</h2>
                <p>We accept children who have not previously studied in English. Depending on the student’s age, we will enroll most children in our Intensive English (English Language Learners ELL) class for one full school year. Only at the end of that year will we be able to decide whether and at what grade level they can enter our regular classes. </p>
                <p>Children in lower primary may be able to enter the regular classroom directly, but may be placed below their previous grade level. Children entering at the level of Kindergarten (5 years) usually begin with their age group without extra English instruction, and adapt well.</p>
                <p>For all ages and grade levels, the more knowledge of English a student has, the more quickly she or he will be able to adapt to our school. For younger children, even a few lessons from a family member or tutor will help them understand what is said in class during those important first days of school.</p>
                <h2 className='text-3xl font-bold Please Contact Us  py-10'>Please Contact Us</h2>
                <p>Student Application form PDF can be downloaded <a href='/application.pdf' className='text-fuchsia-800 text-2xl font-bold'>here</a>. Please send the completed form to tesoldrc@gmail.com</p>
            </div>
            <motion.img src={photo} className='portrait:w-0 portrait:h-0 md:w-1/2 rounded-xl object-cover' alt='home' whileHover={{scale: 1.2,transition: { duration: 1 },}} />
        </div>


    </div>
  )
}

export default Prospective