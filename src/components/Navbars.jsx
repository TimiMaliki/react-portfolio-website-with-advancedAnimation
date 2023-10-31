import { useState, useEffect} from "react";
import { Nav, Container, Navbar } from "react-bootstrap";

import GH from "../assets/socials-img/github.png"
import { Link } from "react-router-dom";


function Navbars() {
 const [scroll, setScroll] = useState(false)
    const [activeLinks , setActiveLinks]  = useState('home')

    useEffect(() => {
        const onScroll = () =>{
            
            if(window.scrollY > 50){
            setScroll(true)
          }
          else{
            setScroll(false)
          }
        }

          window.addEventListener('scroll', onScroll)

          return () => window.removeEventListener("scroll" , onScroll)
    })

    const onUpdateActiveLink = (value) =>{
        setActiveLinks(value)
    }
  return (
    <Navbar expand="lg" className={scroll ? "scroll" : ""}>
      <Container>
        <Navbar.Brand href="#home"><h1 className="maliki">Maliki</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="mx-auto p-2 ">
            <Nav.Link href="" className={activeLinks === "home" ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}><Link to='/' className="click-links">Home</Link></Nav.Link>
            <Nav.Link href="" className={activeLinks === "skills" ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}> <Link to='/skills' className="click-links">Skills</Link></Nav.Link>
            <Nav.Link href="" className={activeLinks === "projects" ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}><Link to='/projects' className="click-links">projects</Link></Nav.Link>
            <Nav.Link href="" className={activeLinks === "contact" ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contact')}><Link to='/contact' className="click-links">contact</Link></Nav.Link>
          </Nav>
          <span className="navbar-text d-lg-flex d-sm-grid gap-3">
            <div className="social-icon">
                <a href="https://github.com/TimiMaliki"><img src={GH} alt="" width ={50}/></a>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;
