import React from 'react';
import { Container, Row, Col, } from 'react-bootstrap';
import './styles/AboutMe.css'

const AboutMe = () => {
  return (
    <section className="about" id="about">
      <div className="about-section d-flex   ">
        <Container fluid >
          <Row>
            <Col md={12} sm={12} className="about-content text-center pt-5">
              <h1><span className='headspan'>{'<'} </span>ABOUT ME<span className='headspan'>{'/>'}</span></h1>
              <div className="about-content text-sm-start pt-3">
              <p>
                Hello, I'm Gurudas Pr, a passionate student navigating the exhilarating world of web development.
                My focal point is mastering the MERN stack—comprising MongoDB, Express.js, React, and Node.js.
                I thrive on the creative process, turning conceptual ideas into digital realities. Always curious, I continuously explore new skills,
                tools, and concepts, fostering a commitment to lifelong learning. Beyond solo full-stack projects, I've collaborated with creative teams,
                engaging in daily stand-ups, effective communication, and project management.
                Armed with a strong design understanding and meticulous attention to detail, I'm proficient in HTML, CSS,
                and JavaScript, currently immersing myself in the complexities of the MERN stack for ongoing growth and innovation.</p>
                </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default AboutMe;
