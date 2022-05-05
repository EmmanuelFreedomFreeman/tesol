import React from 'react'
import {motion} from 'framer-motion'
function Accredited({photo}) {
  return (
    <div className='p-10 '>
        <h1 className='text-5xl portrait:text-3xl font-bold text-center p-10'>Accredited US Online Middle and High School program</h1>
        <div className='flex flex-row bg-white shadow-lg rounded-lg'>
            <div className='p-10'>
                <h2 className='text-3xl font-bold text-center '>High School Diploma Program</h2>
                <p className='font-bold m-5 text-xl'>A Recognized, Accredited U.S. Diploma</p>
                <p>In order to ensure an internationally recognized High School diploma, TESOL ASBL cooperates with an Online Education System in the USA for the years of Middle (Grades 6-8)  and Secondary (Grades 9-12) School, enabling candidates to earn a full U.S. high school diploma in Lubumbashi. </p>
                <p className='pt-2'>With an appropriate level of English, students may enroll at any time during the school year in the Online system. However, students must be 14 years old to enroll into the High School grades. Credits may be transferred from other English speaking schools.</p>
                <p className='font-bold m-5 text-xl'>Accreditation</p>
                <p className='pt-2 pb-2'>Regionally Accredited by AdvancED, The parent organization of The North Central Association CASI and Southern Association of Schools and Colleges CASI and the Northwest Accrediting Commission. NGA is a State Department of Education accredited recognized high school and issues the same accredited high school diploma as the public schools. AdvancED/North Central Association Commission on Accreditation and School Improvement NCA CASI is an accrediting agency recognized by all 50-States and The United States Department of Education.</p>
                <p>TESOL ASBL facilitates the program, but the Education System is responsible for courses, evaluations, grading and diplomas. They are passionate about student support and assisting students to be ready for tertiary education entrance.</p>
                <p className='mt-5 mb-5'>There are various options to suit individual students’ needs: </p>
                <div className='ml-10 mb-5'>
                    <p>* Standard High School Diploma (21.5 credits)</p>
                    <p>* Honors/AP High School Diploma (24 credits)</p>
                    <p>* Middle School Online (Grades 6-8)</p>
                </div>
                <p>TESOL ASBL creates an academic atmosphere for study, supervises and assists the students, adds other subjects to give children and young people a well-rounded school experience, for example: French, Art, Music, Bible, Physical Education and Community Service.</p>

            </div>
            <motion.img src={photo} className='portrait:w-0 portrait:h-0 md:w-1/2 rounded-xl object-cover' alt='home' whileHover={{scale: 1.2,transition: { duration: 1 },}} />
        </div>
    </div>
  )
}

export default Accredited