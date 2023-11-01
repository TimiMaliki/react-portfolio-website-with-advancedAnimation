import { Container, Row, Col, Tab, Nav, TabPane } from "react-bootstrap";
import  ProjectCard  from "./ProjectCard";
import   one from "../assets/skills-image/1.png"
import  two from "../assets/skills-image/2.png"
import three from "../assets/skills-image/3.png"
import four from "../assets/skills-image/4.png"
import five from "../assets/skills-image/5.png"
import six from "../assets/skills-image/6.png"
import seven from "../assets/skills-image/7.png"
import  ate from "../assets/skills-image/8.png"
import  nine from "../assets/skills-image/9.png"

const Projects = () => {
  const projects = [
    {
      title: "Music App Website",
      imgUrl: one,
      links:"https://music-nu-three.vercel.app/"
    },
    {
      title: "Fashion lovers Website",
      imgUrl: two,
      links:"https://maliki-fashion-ecommerce.vercel.app/"
    },
    {
      title: "Food Website",
      imgUrl: three,
      links:"https://food-beige-psi.vercel.app/"
    },
    {
      title: "Secure Form Agency Website",
      imgUrl: four,
      links:"https://secure-form.vercel.app/"
    },
    {
      title: "Cosmetic Ecommerce Website",
      imgUrl: five,
      links:"https://cosmetic-website-tau.vercel.app/"
    },
    {
      title: "Home Furnitures Ecommerce Website",
      imgUrl: six,
      links:"https://home-and-furnitures.vercel.app/"
    },
    {
      title: "Art Merch Shopping Cart",
      imgUrl: seven,
      links:"https://home-and-furnitures.vercel.app/"
    },
    {
      title: "A Light Switch Toggle",
      imgUrl: ate,
      links:"https://home-and-furnitures.vercel.app/"
    },
    {
      title: "A Rem to Px converter",
      imgUrl: nine,
      links:"https://home-and-furnitures.vercel.app/"
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
            my web creations – each one a unique online masterpiece!
            </p>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">  
              <Nav variant="pills" className="nav-pills" id="pills-tab">
              </Nav>
              <Tab.Content>
                <TabPane eventKey="first">
                  <Row>
                    {
                        projects.map((project,index) =>{
                              return(
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                        })
                    }
                  </Row>
                </TabPane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      
      </Container>
    </section>
  );
};

export default Projects;
