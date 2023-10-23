import { useState, useEffect} from "react";
import { Nav, Container, Navbar } from "react-bootstrap";

import FB from "../assets/socials-img/fb.png"
import X from "../assets/socials-img/x.png"
import YT from "../assets/socials-img/yt.png"
import IG from "../assets/socials-img/ig.png"

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
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto p-2">
            <Nav.Link href="#home" className={activeLinks === "home" ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLinks === "skills" ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLinks === "projects" ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>projects</Nav.Link>
          </Nav>
          <span className="navbar-text d-lg-flex d-sm-grid gap-3">
            <div className="social-icon">
                <a href=""><img src={FB} alt="" width ={50}/></a>
                <a href=""><img src={X} alt="" width ={50}/></a>
                <a href=""><img src={YT} alt="" width ={50}/></a>
                <a href=""><img src={IG} alt="" width ={50}/></a>
            </div>

            <button className="click" onClick={() => console.log('hello')}><span>Let's connect</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;
