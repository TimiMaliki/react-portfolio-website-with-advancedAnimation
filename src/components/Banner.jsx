import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

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
            }}>Let's connect</button>
      </Col>
    </Row>
  </Container>
   </section>
  )
}

export default Banner