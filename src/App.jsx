import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbars from './components/Navbars'
import Banner from './components/Banner';
import Skills from './components/Skills';
import Projects  from './components/Projects';
import ProjectCard from './components/ProjectCard';
function App() {

  return (
    <>
      <Navbars/>
      <Banner/>
      <Skills/>
      <Projects/>
      <ProjectCard/>
    </>
  )
}

export default App
