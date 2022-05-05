import React from 'react'
import { motion } from "framer-motion"
function Statement({photo}) {
  return (
    <div className='p-10 '>
        <h1 className='text-5xl portrait:text-3xl font-bold text-center p-10'>STATEMENT OF FAITH</h1>
        <div className='flex flex-row bg-white shadow-lg rounded-lg'>
            <div className='p-10'>
                <h2 className='text-3xl font-bold text-center py-10 '>STATEMENT OF FAITH</h2>
                <p>The Bible is God's Word, inspired by the Holy Spirit and without error in the original writings. It is our sole authority and absolutely binding in all matters of faith and conduct. </p>
                <p>There is one holy God, existing eternally as Father, Son and Holy Spirit. He is the Creator of all things visible and invisible. Jesus Christ is the Son of God who became man through conception by the Holy Spirit and virgin birth and was without sin.</p>
                <p>The Holy Spirit convicts the world of guilt in regard to sin, righteousness and judgement. </p>
                <p>Satan is the originator of all evil and through him sin was introduced into the world after the Fall of Adam and Eve. Man is, by nature and practice, a sinful creature and is unable, by any personal merit or works, to meet the standards of a holy God. </p>
                <p>In love, Jesus Christ voluntarily suffered the penalty of death by crucifixion for the sin of the whole world. He was buried and arose from among the dead on the third day thus  signifying God's acceptance of His sacrifice. He is now seated at the right hand of God. By personal faith in Christ one can know the complete forgiveness of sins, be reconciled to God, become a member of the family of God and receive eternal life. Those who do not accept Jesus Christ as Savior will be separated from God eternally. </p>
                <p>Christ lives in every Christian's life by the Holy Spirit from the moment he is born again into God's family. The Holy Spirit guides, instructs and empowers the believer for godly living and service. </p>
                <p>The Lord Jesus Christ will return in person to receive all believers to Himself and to set up His kingdom. At that time all believers will be united with Him eternally. Then there will be a new heaven and a new earth in which God's sovereignty will be unchallenged. </p>
                <p></p>




                <h2 className='text-3xl font-bold py-10'>SUMMARY OF OUR WORLDVIEW :</h2>
                <p>The Christian philosophy rests upon revealed truth in the Scriptures, truth which is embodied in the teaching of Christ. This teaching includes the following propositions: </p>
                <div className='ml-10'>
                    <p>* God, Creator of all things which exist outside of Himself, is personally interested in humankind. </p>
                    <p>* God’s interest in humankind extends to a personal interest in each person and all people will give an account to God. </p>
                    <p>* Humankind, created in the image of God, has fallen short of the mark. As a fallen creature he stands in need of redemption.</p>
                    <p>* God has made provision for humankind to be redeemed through the incarnation, death and resurrection of the Christ.</p>
                    <p>* God as a God of justice will ultimately correct the imbalances and injustice, which exist in human life. </p>
                    <p>* All people are equal in God’s sight, as His “offspring” (Acts 17:29), but those who come to Him in faith enter into a new relationship – they are born from a new source of life (John 3:16). </p>
                    <p>* Man has a responsibility under God as a custodian of the earth (Genesis 1:26-28). </p>
                </div>
            </div>
            <motion.img src={photo} className='portrait:w-0 portrait:h-0 md:w-1/2 rounded-xl object-cover' alt='home' whileHover={{scale: 1.2,transition: { duration: 1 },}} />
        </div>
    </div>
  )
}

export default Statement