// import React from 'react'
// import { Link } from 'react-router-dom';
// import '../Header/heading.css'

// export default function Header() {
//     return (
//         <div className='d-flex full-container'>
//             <div className='navbar '>
//                 <div className='navbar'>
//                     <Link to={'/'}style={{ textDecoration: 'none', color: 'inherit' }}><h1 className='heading'>pd</h1></Link>
//                 </div>
//                 <div className='flexing-end'>
//                     <div className='combined-nav'>
//                         <Link to={'/'}style={{ textDecoration: 'none', color: 'inherit' }}><span className='individual-nav'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
//                             <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
//                         </svg> Home</span></Link>
//                         <Link to={'/about'}style={{ textDecoration: 'none', color: 'inherit' }}><span className='individual-nav'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-person" viewBox="0 0 16 16">
//                             <path d="M12 1a1 1 0 0 1 1 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 0 1 1-1zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
//                             <path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
//                         </svg> About</span></Link>
//                         <Link to={'/projects'}style={{ textDecoration: 'none', color: 'inherit' }}><span className='individual-nav'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-easel" viewBox="0 0 16 16">
//                             <path d="M8 0a.5.5 0 0 1 .473.337L9.046 2H14a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1.85l1.323 3.837a.5.5 0 1 1-.946.326L11.092 11H8.5v3a.5.5 0 0 1-1 0v-3H4.908l-1.435 4.163a.5.5 0 1 1-.946-.326L3.85 11H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h4.954L7.527.337A.5.5 0 0 1 8 0M2 3v7h12V3z" />
//                         </svg> Projects</span></Link>
//                         <Link to={'/resume'}style={{ textDecoration: 'none', color: 'inherit' }}><span className='individual-nav'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-text" viewBox="0 0 16 16">
//                             <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5" />
//                             <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z" />
//                         </svg> Resume</span></Link>
//                         <Link to={'/contact'}style={{ textDecoration: 'none', color: 'inherit' }}><span className='individual-nav'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
//                             <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
//                         </svg> Contact Me</span></Link>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

import React from 'react';
import { Link } from 'react-router-dom';
import '../Header/heading.css';

export default function Header() {
    return (
        <div className='full-container'>
            <div className='navbar-container'>
            <Link to={'/'} style={{ textDecoration: 'none', color: 'inherit' }}><h1 className='heading yellow'>VV</h1></Link>
                <div className='combined-nav'>
                    <Link to={'/'} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <span className='individual-nav'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
                                <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
                            </svg>
                            Home
                        </span>
                    </Link>
                    <Link to={'/about'} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <span className='individual-nav'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-person" viewBox="0 0 16 16">
                                <path d="M12 1a1 1 0 0 1 1 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 0 1 1-1zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                                <path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                            </svg>
                            About
                        </span>
                    </Link>
                    <Link to={'/skills'} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <span className='individual-nav'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tools" viewBox="0 0 16 16">
                                <path d="M1 0l.278.53 3.072 5.676.114.209a1 1 0 0 1-1.596 1.193L1 5.574v5.426h2.5a.5.5 0 0 1 0 1H1v3h14v-3h-2.5a.5.5 0 0 1 0-1H15V5.574l-1.868 1.034a1 1 0 0 1-1.596-1.193l.114-.209 3.072-5.676L15 0h-2l-3 5H6L3 0H1zM6 6a3 3 0 1 0 6 0A3 3 0 0 0 6 6z"/>
                            </svg>
                            Skills
                        </span>
                    </Link>
                    <Link to={'/projects'} style={{ textDecoration: 'none', color: 'inherit' }}><span className='individual-nav'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-easel" viewBox="0 0 16 16">
                        <path d="M8 0a.5.5 0 0 1 .473.337L9.046 2H14a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1.85l1.323 3.837a.5.5 0 1 1-.946.326L11.092 11H8.5v3a.5.5 0 0 1-1 0v-3H4.908l-1.435 4.163a.5.5 0 1 1-.946-.326L3.85 11H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h4.954L7.527.337A.5.5 0 0 1 8 0M2 3v7h12V3z" />
                    </svg> Projects</span></Link>
                    <Link to={'https://drive.google.com/file/d/1zVQG1GCriYlJc71ou1qdZm1nb7DXpUj2/view?usp=drive_link'} style={{ textDecoration: 'none', color: 'inherit' }}><span className='individual-nav'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-text" viewBox="0 0 16 16">
                        <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5" />
                        <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z" />
                    </svg> Resume</span></Link>
                    
                </div>
            </div>
        </div>
    );
}