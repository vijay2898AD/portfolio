import React from 'react'
import '../About/About.css'
import HomeLogo from '../../Assets/home-main.svg'
import Skills from './Skills'
import { motion } from 'framer-motion'
import Footer from '../Footer/Footer'
import Education from './Education'
import Contact from '../Contact/Contact'

export default function About() {
    return (
        <div>
            <div>
                <div className='about-mainheading'>
                    <motion.h1 initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "-100%" }} transition={{ duration: 0.25 }} delay={0}>ABOUT<span className='yellow'> ME</span></motion.h1>
                </div>
                <motion.div initial={{ y: "50px", opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: "-50px", opacity: 0, transition: { duration: 0.25, ease: "easeInOut", delay: 0 } }} transition={{ duration: 0.75, ease: "easeInOut" }} className='about-firstdiv'>
                    <div className='first-div card box-shadow about-card'>
                        <h3 className='main-content card-text '>KNOW WHO <span className='yellow'>I'M </span></h3>
                        <div className='motion'>
                            <p className='card-text content'>Passionate and energetic <span className='yellow'>final-year B-Tech Computer Science student</span>. Quick to grasp new concepts and apply them
                                effectively.</p> <p className='card-text content' ><span className='yellow'>Strong problem-solving skills</span> and analytical skills, complemented by excellent teamwork and communication
                                    abilities.</p><p className='card-text content'>Seeking opportunities to enhance skills and <span className='yellow'>contribute to impactful projects</span> in the tech industry</p>
                        </div>
                    </div>
                    <div>
                        <img src={HomeLogo} alt='about-avatar' style={{ maxHeight: "450px" }} />
                    </div>
                </motion.div>
            </div>
            <div>
                <div className='about-mainheading'>
                    <h1>My <span className='yellow'>Education</span></h1>
                </div>
                <div><Education /></div>
                <div className='about-mainheading'>
                    <h1>PROFESSIONAL <span className='yellow'>SKILLSET</span></h1>
                </div>
                <div>
                    <Skills />
                </div>
            </div>
            <div>
                <Contact />
            </div>
            <Footer />
        </div>
    )
}