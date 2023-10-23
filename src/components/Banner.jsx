import { useEffect,useState } from 'react';

import {ArrowRightCircle}  from 'react-bootstrap-icons';
import { Col, Container, Row, useAccordionButton } from 'react-bootstrap'
import MeshMello from "../assets/about-me-img/im1.jpg"

const Banner = () => {
    const [loopNum ,setLoopNUm] = useState(0);
    const [isDelete , setIsDelete] = useState(false);
    const  [text, setText] = useState("");
    const  [delta, setDelta] = useState(300 - Math.random() * 100)
    const period = 2000;
    const rotate = ['Web Developer' , 'Web Designer' , "UI/UX Designer"]
     useEffect(() => {
        let ticker = setInterval(() =>{
           tick()
        },delta)

        return () => {
            clearInterval(ticker);
     }
     }, [text])

     const tick = () =>{
     let i = loopNum % rotate.length;
     let fullText = rotate[i];
      let updatedtext = isDelete ? fullText.substring(0, text.length - 1) :  fullText.substring(0, text.length + 1)

      setText(updatedtext)

      if(isDelete && updatedtext === fullText){
          setIsDelete(true);
          setDelta(period)
      }else if(isDelete && updatedtext  === ''){
                 setIsDelete(false)
                 setLoopNUm(loopNum + 1)
                 setDelta(500)
      }

     
     let update 
     }
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