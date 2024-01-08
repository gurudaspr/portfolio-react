import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './components/Header';
import HomeSection from './components/HomeSection';
import AboutMe from './components/AboutMe';
import MySkillsTools from './components/MySkillsTools';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';




function App() {


  return (
    <div>

      <Header />
      <HomeSection />
      <Container >
        <Row>
          <Col lg={12}>
            <AboutMe />
          </Col>
        </Row>
      </Container>
      <MySkillsTools />
      <Container >
        <Row>
          <Col md={12}>
            <Projects />
            <Contact />
          </Col>
        </Row>
      </Container>
      <Footer/>
      

    </div>

  );
}

export default App;

