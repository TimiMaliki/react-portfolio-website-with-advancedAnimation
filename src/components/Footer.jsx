import { Container, Row, Col } from "react-bootstrap";
import GH from "../assets/socials-img/github.png"
import LI from "../assets/socials-img/linkedin.png"



const Footer = () => {
    return (
      <footer className="footer">
        <Container>
          <Row className="align-items-center">
            <Col size={12} sm={6} className="text-center text-sm-end center">
              <div className="social-icon">
                <div className="icon-icon">
                <a href="https://github.com/TimiMaliki"><img src={GH} alt="" width ={50}/></a>
                <a href="linkedin.com/in/timimaliki"><img src={LI} alt="" width ={50}/></a>
                <p className="copyright">Copyright 2023. All Rights Reserved</p>
                </div>
              </div>
            
            </Col>
          </Row>
        </Container>
      </footer>
    )
  }

  export default Footer;