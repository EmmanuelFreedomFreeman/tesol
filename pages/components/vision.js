import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion"
function Vision({photo}) {
  return (
    <div className='p-10 '>
        <h1 className='text-5xl portrait:text-3xl font-bold text-center p-10'>Our Vision and Mission</h1>
        <div className='flex flex-row bg-white shadow-lg rounded-lg'>
            <div className='p-10'>
                <h1 className='text-5xl portrait:text-3xl font-bold text-center p-10'>Our Vision</h1>
                <h2 className='text-3xl font-bold text-center py-10 '>Grace . Growth . Giving </h2>
                <p className='p-4'>To provide a Christian educational community as a center of teaching, learning and serving excellence, founded on biblically based beliefs, values and behavior. </p>
                <p className='p-4'>Excellence in teaching:  By the grace of God, which brings salvation to all and is the source of all wisdom </p>
                <p className='p-4'>Excellence in learning: To nurture all in our community for growth in every domain of their lives</p>
                <p className='p-4'>Excellence in serving: To teach, model and encourage giving to and for others, for the glory of God</p>
                <p className='p-4'>“Him we proclaim, warning everyone and teaching everyone with all wisdom, that we may present everyone mature in Christ” Colossians 1:28</p>

                <h1 className='text-5xl portrait:text-3xl font-bold text-center p-10'>Our Mission</h1>

                <p className='p-4'>We pursue our vision from a Biblical base by aiming: </p>

                <h2 className='text-3xl font-bold  py-10 '>1 In Personal Christian Life to -  </h2>
                
                <div className='px-10'>

                        <p> {`&apos;`}start and end with knowing God in all endeavors.</p>
                        <p>*staff the school with people committed to live worshipfully under God.</p>
                        <p>*live under the authority of God's Word, and to interpret it thoroughly and reasonably with the guidance of His Holy Spirit.</p>
                        <p>*live under the authority of God's Word, and to interpret it thoroughly and reasonably with the guidance of His Holy Spirit.</p>
                        <p>*nurture and encourage students into a reconciled relationship with God through Christ.</p>
                        <p>*work in partnership with the Body of Christ as represented by those of faith in the school community.</p>

                </div>

                <h2 className='text-3xl font-bold  py-10 '>2 In the Process of Christian Education to -   </h2>
                
                <div className='px-10'>

                        <p>*encourage and train students into a love of learning.</p>
                        <p>*equip students' minds to understand God's perspective in all areas of learning</p>
                        <p>*help each child achieve his or her God-given potential, by providing appropriate educational opportunities according to each one's abilities.</p>
                        <p>*fulfill all requirements to enable us to eventually be an accredited educational institution.</p>

                </div>

                <h2 className='text-3xl font-bold  py-10 '>3 In Christian Community Life to -    </h2>
                
                <div className='px-10'>

                        <p>*create safe relationships through being just and fair according to Biblical principles.</p>
                        <p>* be compassionate and merciful as God is to us. </p>
                        <p>* nurture and train students to accept personal responsibility for themselves (self-discipline); to act within an ethos of service towards others; and to demonstrate an attitude of care for the environment. </p>
                        <p>* encourage the involvement of those supportive of the TESOL ethos who can assist in teaching and learning at TESOL. </p>
                        <p>* develop curriculum which explicitly addresses relational issues.</p>
                        <p>* develop community life across all the activities of TESOL.</p>
                        <p>* maintain and promote unity throughout TESOL.</p>

                </div>

                <h2 className='text-3xl font-bold  py-10 '> 4 In Striving for Excellence to - </h2>
                
                <div className='px-10'>

                        <p> * have students accept the Biblical principle of stewardship in relation to their gifts.  </p>
                        <p>* encourage and train students in work-habits which can produce outstanding results in all school programs - spiritual, academic, cultural, physical. </p>
                        <p>* encourage staff in their own personal and professional development. </p>
                        <p>* provide resources necessary for the above.</p>
                        <p> (Vision and Mission Statement updated with permission from Pacific Hills Christian School) </p>

                </div>


                <h2 className='text-3xl font-bold text-center py-10 '>As a Christian, English-medium school in a French-speaking country, The English-speaking School of Lubumbashi will: </h2>
                <p>Accept children of varying ethnic, cultural, and religious heritages and varying abilities as full, valued creatures of God to be developed to their individual God-given potential intellectually, socially, spiritually, and physically</p>
                <p>Develop students’ fluency in both oral and written English so that they can, when necessary, live in an English-speaking country and/or study in its higher academic institutions</p>
                <p>Develop in the students an adequate ability to function in the French language in a French-speaking country</p>
                <h2 className='text-3xl font-bold text-center  py-10'>SCHOOL LOGO</h2>
                <p>The logo of TESOL ASBL is a tree, representing life and growth. The foliage of the tree is the nations of the world, representing the international nature of our school.</p>
                <p>The roots of the tree and the connections between the nations, are people of all ages and gender,  cooperatively working together in community. In the center is the cross, representing our Lord, Jesus Christ, who is the head and heart of TESOL ASBL.  </p>
                <p>TESOL ASBL colors represent the Congolese flag: royal blue and yellow; and Lubumbashi city: red and white.</p>
                <motion.img src='/TESOL+Tree+Logo+Colour.png' className='w-48 h-48' alt='logo' />
            </div>
            <motion.img alt='vision' src={photo} className='portrait:w-0 md:w-1/2 rounded-xl object-cover' />
        </div>


    </div>
  )
}

export default Vision