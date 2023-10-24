import { Col, Container, Row } from 'react-bootstrap';
import one from "../assets/skills-image/1.png"
import  two from "../assets/skills-image/2.png"
import three from "../assets/skills-image/3.png"
import four from "../assets/skills-image/4.png"
import five from "../assets/skills-image/5.png"
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
            <h2>Skill</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione provident perspiciatis inventore.
            </p>
       <Carousel responsive={responsive} infinite={true} className='skill-slider'>
        <div className="item">
            <img src={one} alt="" />
            <h5>Web Developer</h5>
        </div>
        <div className="item">
            <img src={two} alt="" />
            <h5>Web Developer</h5>
        </div>
        <div className="item">
            <img src={three} alt="" />
            <h5>Web Developer</h5>
        </div>
        <div className="item">
            <img src={four} alt="" />
            <h5>Web Developer</h5>
        </div>
        <div className="item">
            <img src={five} alt=''/></h5>
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
