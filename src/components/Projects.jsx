import { Container, Row, Col, Tab, Nav, TabPane } from "react-bootstrap";
import  ProjectCard  from "./ProjectCard";
import   one from "../assets/skills-image/1.png"
import  two from "../assets/skills-image/2.png"
import three from "../assets/skills-image/3.png"
import four from "../assets/skills-image/4.png"
import five from "../assets/skills-image/5.png"
import six from "../assets/skills-image/6.png"

const Projects = () => {
  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: one,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: two,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: three,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: four,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: five,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: six,
    },
  ];
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque accusamus iure nam.
            </p>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                
              <Nav variant="pills" className="nav-pills" id="pills-tab">
                {/* <Nav.Item>
                  <Nav.Link eventKey="first">Tab 1</Nav.Link>
                </Nav.Item> */}
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
                <Tab.Pane eventKey="second">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
