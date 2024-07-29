import React from 'react';
import { Card, Col, Row, Container } from 'react-bootstrap';
import cardData from '../assets/data/CardData';
import './styles/Project.css';

const ProjectCard = ({ project }) => (
  <Col xs={12} sm={6} md={4} lg={3} className="card-data my-3">
    <a
      className="d-flex justify-content-center text-decoration-none"
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Card className="h-100 w-100" style={{ maxWidth: '15rem' }}>
        <div className="position-relative" style={{ height: '200px', overflow: 'hidden' }}>
          <Card.Img
            variant="top"
            src={project.image}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center'
            }}
          />
          <div
            className="position-absolute bottom-0 start-0 w-100 p-2"
            style={{
              background: 'rgba(0, 0, 0, 0.7)',
              backdropFilter: 'blur(5px)'
            }}
          >
            <Card.Title className="text-center mb-0">
              <span className="text-white small">{project.title}</span>
            </Card.Title>
          </div>
        </div>
      </Card>
    </a>
  </Col>
);

const Projects = () => {
  return (
    <section className="project-section" id="project">
      <Container>
        <div className="heading text-center">
          <h1>
            <span className="headspan">{'<'}</span> MY PROJECTS
            <span className="headspan">{'/>'}</span>
          </h1>
        </div>
        <Row className="d-flex justify-content-center">
          {cardData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects