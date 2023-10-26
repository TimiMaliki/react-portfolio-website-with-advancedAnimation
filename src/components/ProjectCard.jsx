import { Col } from "react-bootstrap";

const ProjectCard = ({title,imgUrl,links}) => {
  return (
    <Col size={12} sm={6} md={4}>
    <div className="proj-imgbx">
     <a href={links} className=""> <img src={imgUrl} /></a>
      <div className="proj-txtx">
        <h4>{title}</h4>
        <a href={links} className="click">View</a>
      </div>
    </div>
  </Col>
  )
}

export default ProjectCard
