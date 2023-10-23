import { useState, useEffect} from "react";
import { Nav, Container, Navbar } from "react-bootstrap";

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
  return (
    <Navbar expand="lg" className={scroll ? "scroll" : ""}>
      <Container>
        <Navbar.Brand href="#home">Maliki</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLinks === "home" ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLinks === "skills" ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLinks === "projects" ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
                <a href="">fb</a>
                <a href="">fb</a>
                <a href="">fb</a>
            </div>

            <button className="click" onClick={() => console.log('hello')}><span>Let's connect</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;
