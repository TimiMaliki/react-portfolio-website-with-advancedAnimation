import { Container, Row, Col } from "react-bootstrap";
import GH from "../assets/socials-img/github.png"



const Footer = () => {
    return (
      <footer className="footer">
        <Container>
          <Row className="align-items-center">
            <Col size={12} sm={6}>
              {/* <img src={logo} alt="Logo" /> */}
            </Col>
            <Col size={12} sm={6} className="text-center text-sm-end">
              <div className="social-icon">
                <a href="https://github.com/TimiMaliki"><img src={GH} alt="" width ={50}/></a>
              </div>
              <p>Copyright 2023. All Rights Reserved</p>
            </Col>
          </Row>
        </Container>
      </footer>
    )
  }

  export default Footer;