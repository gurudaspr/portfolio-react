import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import cardData from '../assets/data/CardData';
import { Container } from 'react-bootstrap';
import './styles/Project.css'

const Projects = () => {
  return (
    <section className="project-section" id="project">
      <Container>
      
      <div className="heading text-center">
        <h1>
          <span className='headspan'>{'<'} </span>MY PROJECTS<span className='headspan'>{'/>'}</span>
        </h1>
      </div>
      <Row className=" d-flex justify-content-center  ">
        {cardData.map((project) => (
          <Col key={project.id}xs={12} md={3}className="card-data mt-5">
            <a className='d-flex justify-content-center' href={project.link} target="_blank" rel="noopener noreferrer">
              <Card style={{ width: '15rem', margin: '10px' }}>
                <Card.Img variant="top" src={project.image} style={{ maxHeight: '250px', objectFit: 'cover' }} />
                <Card.Body>
                  <Card.Title  className=' text-center  card-title-no-underline'>{project.title} </Card.Title>
                </Card.Body>
              </Card>
            </a>
          </Col>
        ))}
      </Row>
      </Container>
    </section>
  );
};

export default Projects;
