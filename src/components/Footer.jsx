import { Container, Row, Col } from "react-bootstrap";
import  MailChimp  from "../components/MailChimp";
import FB from "../assets/socials-img/fb.png"
import X from "../assets/socials-img/x.png"
import YT from "../assets/socials-img/yt.png"
import IG from "../assets/socials-img/ig.png"


const Footer = () => {
    return (
      <footer className="footer">
        <Container>
          <Row className="align-items-center">
            <MailChimp/>
            <Col size={12} sm={6}>
              {/* <img src={logo} alt="Logo" /> */}
            </Col>
            <Col size={12} sm={6} className="text-center text-sm-end">
              <div className="social-icon">
                <a href="#"><img src={FB} alt="" width ={50}/></a>
                <a href="#"><img src={X} alt="Icon" /></a>
                <a href="#"><img src={YT} alt="Icon" /></a> 
                <a href="#"><img src={IG} alt="Icon" /></a> 
                
              </div>
              <p>Copyright 2022. All Rights Reserved</p>
            </Col>
          </Row>
        </Container>
      </footer>
    )
  }

  export default Footer;