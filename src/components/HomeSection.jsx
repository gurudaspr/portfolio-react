import React,{useEffect}from 'react';
import './styles/HomeSection.css'
import { Container, Row, Col, Image } from 'react-bootstrap';
import { FaYoutube, FaGithub, FaInstagram, FaLinkedin, FaFacebookSquare } from 'react-icons/fa'
import Typed from 'typed.js';

const HomeSection = () => {
  useEffect(() => {
    const element = document.querySelector('.typed');
    const options = {
      strings: ['Designer', 'Video Editor', 'Developer', 'Gamer'],
      typeSpeed: 100,
      backSpeed: 50,
      showCursor: false,
      loop: true,
    };
    const typed = new Typed(element, options);
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <section className="home" id="home">
      <div className="home-section d-flex justify-content-space-end ">
      <Container > 
        <Row>
          <Col md={8}sm={12} className="home-content">
            <h1>I'M GURUDAS P R</h1>
            <h1><span>{'<'} </span><span className="typed"></span><span>{'/>'}</span></h1>
            <p>
              "Passionate MERN stack enthusiast dedicated to creating seamless and engaging web experiences. Proficient in building robust applications that blend functionality with elegant design."
            </p>
            <div className="social-media">
            <a href="https://www.facebook.com/gurudaspranavam.anakkllu" className='icon-background facebook'>
              <FaFacebookSquare className='icon' />
            </a>
            <a href="https://github.com/gurudaspr" className='icon-background github'>
              <FaGithub className='icon' />
            </a>
            <a href="https://www.instagram.com/gu_ru_das/" className='icon-background instagram'>
              <FaInstagram className='icon' />
            </a>
            <a href="https://www.linkedin.com/in/gurudaspr/" className='icon-background linkedin'>
              <FaLinkedin className='icon' />
            </a>
            <a href="https://www.youtube.com/c/ASHFLIXYT" className='icon-background youtube'>
              <FaYoutube className='icon' />
            </a>
            </div>
          </Col>
          <Col md={4} sm={12} className="home-img  text-center">
            <Image src="https://gurudaspr.github.io/assets/img/guruprofile.jpg" alt="gurudas" className='home-imgs img-fluid' style={{ maxHeight: '400px' }}/>
          </Col>
        </Row>
      </Container>
      </div>
    </section>
  );
};

export default HomeSection;
