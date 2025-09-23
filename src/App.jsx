import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import { AnimatePresence } from "framer-motion";
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';


function App() {
  const location = useLocation()

  return (
    <div>
      <Header/>
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;