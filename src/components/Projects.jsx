import { Container, Row, Col, Tab, Nav, TabPane } from "react-bootstrap";
// import { ProjectCard } from "./ProjectCard";

const Projects = () => {

  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];
  return (
   <section className="project" id="project">
<Container>
    <Row>
        <Col>
        <h2>Projects</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque accusamus iure nam.</p>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first">Tab 1</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Tab 2</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third">Tab 3</Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
            <TabPane   eventKey="first">
          <Row>

            
          </Row>

            </TabPane>
          </Tab.Content>




          </Tab.Container>
        </Col>
    </Row>
</Container>
   </section>
  )
}

export default Projects