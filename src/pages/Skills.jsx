import { Col, Container, Row } from 'react-bootstrap';
 import MeterOne from "../assets/skills-image/MeterHtml.webp"
 import MeterTwo from "../assets/skills-image/MeterCSS.webp"
 import MeterThree from "../assets/skills-image/JavaScript-logo.png"
 import MeterFour from "../assets/skills-image/firebase.png"
 import MeterFive from "../assets/skills-image/react.png"
 import MeterSix from "../assets/skills-image/nextjs.png"
 
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const Skills = () => {
  return (
   <section className='skills' id='skills'>
<Container>
    <Row>
        <Col>
        <div className="skill-bx">
            <h1 className='bold'>Skills</h1>
       <Carousel responsive={responsive} infinite={true} className='skill-slider'>
        <div className="item">
            <img src={MeterOne} alt="" />
            <h5>HTML5</h5>
        </div>

        <div className="item">
            <img src={MeterTwo} alt="" />
            <h5>CSS3</h5>
        </div>


        <div className="item">
            <img src={MeterThree} alt="" />
            <h5>JAVASCRIPT</h5>
        </div>


        <div className="item">
            <img src={MeterFive} alt="" />
            <h5>REACT.JS</h5>
        </div>

        <div className="item">
            <img src={MeterFour} alt="" />
            <h5>FIREBASE</h5>
        </div>

        <div className="item">
            <img src={MeterSix} alt="" />
            <h5>NEXT.JS</h5>
        </div>



       </Carousel>
        </div>
        </Col>
    </Row>
</Container>
   </section>
  )
}

export default Skills
