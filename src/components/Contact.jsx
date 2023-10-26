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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code == 200) {
      setStatus({ succes: true, message: "Message sent successfully" });
    } else {
      setStatus({
        succes: false,
        message: "Something went wrong, please try again later.",
      });
    }
  };

  return (
    <section className="contact" id="connect">
         <h1 className="center p-2">Contact</h1>
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={laptop} alt="" />
          </Col>
    
          <Col md={6} className="contact-form">
            <div className="visit">
              <h3 className="">Email</h3>
              <p className="">malikitimi@gmail.com</p>
            </div>
        
            <div className="contact">
              <h3 className="">Contact</h3>
              <p className="">whatsapp:+2348102850113</p>
            </div>
            </Col>

        
         
        </Row>
      </Container>
    </section>
  );
};

export default Contact;

// <Col md={6}>
// <h2>Get In Touch</h2>
// <form onSubmit={handleSubmit} >
//   <Row>
//     <Col sm={6} className="px-1">
//       <input
//         type="text"
//         placeholder="First Name"
//         onChange={(e) => {
//           onFormUpdate("first Name", e.target.value);
//         }}
//       />
//     </Col>
//     <Col sm={6} className="px-1">
//       <input
//         type="text"
//         placeholder="Last Name"
//         onChange={(e) => {
//           onFormUpdate("Last Name", e.target.value);
//         }}
//       />
//     </Col>

//     <Col sm={6} className="px-1">
//       <input
//         type="tel"
//         value={formDetails.email}
//         placeholder="Phone Number"
//         onChange={(e) => {
//           onFormUpdate("Phone Number", e.target.value);
//         }}
//       />
//     </Col>

//     <Col sm={6} className="px-1">
//       <input
//         type="email"
//         placeholder="Email Address"
//         onChange={(e) => {
//           onFormUpdate("Email Address", e.target.value);
//         }}
//       />
//     </Col>

//     <Col size={12} className="px-1">
//       <textarea
//         rows="6"
//         value={formDetails.message}
//         placeholder="Message"
//         onChange={(e) => onFormUpdate("message", e.target.value)}
//       ></textarea>
//       <button type="submit">
//         <span>{buttonText}</span>
//       </button>
//     </Col>
//     {
//         status.message &&
//         <Col>
//         <P className={status.success === false ?  "danger" : "success"} >{status.message}</P>
//         </Col>
//     }
//   </Row>
// </form>
// </Col>
