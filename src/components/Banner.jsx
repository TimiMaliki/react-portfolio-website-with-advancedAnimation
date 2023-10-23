import React from 'react'

import {ArrowRightCircle}  from 'react-bootstrap-icons';
import { Col, Container, Row } from 'react-bootstrap'
import MeshMello from "../assets/about-me-img/im1.jpg"

const Banner = () => {
  return (
   <section className='banner' id='home'>
  <Container>
    <Row className='align-items-center'>
      <Col xs={12} md={6} xl={7}>
        <span className='tagline'>Welcome to my Portfolio</span>
        <h1>{`Hi I'm TimiMaliki`}<span className='wrap'></span></h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Praesentium dolorum placeat odit!</p>
            <button onClick={() =>{
                console.log('lets connect')
            }}>Let's connect<ArrowRightCircle/></button>
      </Col>
      <Col xs={12} md={6} xl={5}>
      <img src={MeshMello} alt="" style={{borderRadius:"150px", width:"200px" , height:"200px"}}/>
      </Col>
    </Row>
  </Container>
   </section>
  )
}

export default Banner