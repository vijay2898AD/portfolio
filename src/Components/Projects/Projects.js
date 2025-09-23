import React from 'react'
import '../../Components/Projects/Projects.css'
import ProjectCard from './ProjectCard'
import { motion } from 'framer-motion'
import Mem_game from '../../Assets/Mem_game.png'
import e_commerce from '../../Assets/e_commerce.png'
import clone from '../../Assets/clone.png'
import Footer from '../Footer/Footer'
import Contact from '../Contact/Contact'

export default function Projects() {
    return (
        <div>
            <div className='about-mainheading'>
                <motion.h1 initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "-100%" }} transition={{ duration: 0.5 }}>MY <span className='yellow'>PROJECTS</span></motion.h1>
            </div>
            <div className='project-maindiv'>
                <ProjectCard imgPath={Mem_game} heading='Memory Match Game' description='Developed an innovative "Memory Match Game" -- a fun, interactive web game that challenges users memory and logic. This project helped me hone my skills in HTML, CSS, and JavaScript experiences through auctions.' ghlink='https://github.com/vijay2898AD/Innomatics/tree/main/Projects/Project-2_html_css_js' viewlink='https://vijay2898ad.github.io/Innomatics/Projects/Project-2_html_css_js/game.html' />
                <ProjectCard imgPath={e_commerce} heading='e-commerce webpage' description='Designed a interactive website "building a dynamic e-commerce webpage", applying web technologies like HTML, CSS, and JavaScript to create an engaging user experience.' ghlink='https://github.com/vijay2898AD/Innomatics/tree/main/JS/Assignment-4' viewlink='https://vijay2898ad.github.io/Innomatics/JS/Assignment-4/index.html' />
                <ProjectCard imgPath={clone} heading='Innomatics Research Labs Clone' description='Created an interactive clone website by utilizing a combination of
HTML, CSS and JS. Designed and
implemented various projects, showcasing my skill and
interest in Web Development' ghlink='https://github.com/vijay2898AD/Innomatics/tree/main/Projects/Project-1' viewlink='https://vijay2898ad.github.io/Innomatics/Projects/Project-1/Innomatics_clone.html' />
            </div>
            <div>
                <Contact />
            </div>
            <Footer/>
        </div>
    )
}