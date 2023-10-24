import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import laptop from "../assets/contact-img/laptop.jpg";

const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});
  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={laptop} alt="" />
          </Col>
          <Col md={6}>
            <h2>Get In Touch</h2>
            <form>
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.firstName}
                    placeholder="First Name"
                    onChange={(e) => {
                      onFormUpdate("first Name", e.target.value);
                    }}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.lastName}
                    placeholder="Last Name"
                    onChange={(e) => {
                      onFormUpdate("Last Name", e.target.value);
                    }}
                  />
                </Col>

                <Col sm={6} className="px-1">
                  <input
                    type="tel"
                    value={formDetails.email}
                    placeholder="Phone Number"
                    onChange={(e) => {
                      onFormUpdate("Phone Number", e.target.value);
                    }}
                  />
                </Col>

                <Col sm={6} className="px-1">
                  <input
                    type="email"
                    value={formDetails.phone}
                    placeholder="Email Address"
                    onChange={(e) => {
                      onFormUpdate("Email Address", e.target.value);
                    }}
                  />
                </Col>

                <Col size={12} className="px-1">
                  <textarea
                    rows="6"
                    value={formDetails.message}
                    placeholder="Message"
                    onChange={(e) => onFormUpdate("message", e.target.value)}
                  ></textarea>
                  <button type="submit">
                    <span>{buttonText}</span>
                  </button>
                </Col>

              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
