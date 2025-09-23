import React from 'react'
import '../About/Skills.css'
import {
    DiJavascript1, DiReact, DiPython, DiJava, DiHtml5,
} from 'react-icons/di'

export default function Skills() {
    return (
            // <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            //     <Col xs={4} md={2} className="skills-icons">
            //         <DiHtml5 size={100} />
            //     </Col>
            //     <Col xs={4} md={2} className="skills-icons">
            //         <DiJava />
            //     </Col>
            //     <Col xs={4} md={2} className="skills-icons">
            //         <DiPython />
            //     </Col>
            //     <Col xs={4} md={2} className="skills-icons">
            //         <DiReact />
            //     </Col>
            //     <Col xs={4} md={2} className="skills-icons">
            //         <DiJavascript1 />
            //     </Col>
            //     <Col xs={4} md={2} className="skills-icons">
            //         <DiNodejs />
            //     </Col>
            // </Row>
            <div>
                <div className='skills-main'>
                    <div className='skills-icons'>
                        <DiPython/>
                    </div>
                    <div className='skills-icons'>
                        <DiJava/>
                    </div>
                    <div  className='skills-icons'>
                        <DiJavascript1/>
                    </div>
                    <div  className='skills-icons'>
                        <DiReact/>
                    </div>
                    {/* <div  className='skills-icons'>
                        <DiNodejs/>
                    </div> */}
                    <div  className='skills-icons'>
                        <DiHtml5/>
                    </div>
                </div>
            </div>
    );
}