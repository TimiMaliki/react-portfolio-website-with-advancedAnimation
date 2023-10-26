import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbars from './components/Navbars'
import Banner from './components/Banner';
import Skills from './components/Skills';
import Projects  from './components/Projects';
import ProjectCard from './components/ProjectCard';
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {

  return (
    <>
      <Navbars/>
      <Banner/>
      <Skills/>
      <Projects/>
      <ProjectCard/>
        <Contact /> 
      <Footer/> 
    </>
  )
}

export default App
