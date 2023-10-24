import { Col, Container, Row } from 'react-bootstrap';
import { Robot } from 'react-bootstrap-icons';
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
            <img src={} alt="" />
            <h5>Web Developer</h5>
        </div>
        <div className="item">
            <img src={} alt="" />
            <h5>Web Developer</h5>
        </div>
        <div className="item">
            <img src={} alt="" />
            <h5>Web Developer</h5>
        </div>
        <div className="item">
            <img src={} alt="" />
            <h5>Web Developer</h5>
        </div>
        <div className="item">
            <img src={} alt="" />
            <h5>Web Developer</h5>
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
