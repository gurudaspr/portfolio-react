import React from 'react'
import { Container, Row, Col, } from 'react-bootstrap';
import './styles/MySkillsTools.css'

function MySkillsTools() {
  return (
    <section id="skills" className='skill-section'>
      <div className="heading text-center">
      <h1><span className='headspan'>{'<'} </span>SKILLS & TOOLS<span className='headspan'>{'/>'}</span></h1>
      </div>
      <div className="skill-map ">
       <Container fluid />
          <Row>
            <Col md={2} xs={6}>
              <div className="skill">
              <img src={require('../assets/skills/react.svg').default} alt="React" className="skill-img" />
              </div>
            </Col>
            <Col md={2} xs={6}>
              <div className="skill">
              <img src={require('../assets/skills/js.svg').default} alt="Js" className="skill-img" />
              </div>
            </Col>
            <Col md={2} xs={6}>
              <div className="skill">
              <img src={require('../assets/skills/html.svg').default} alt="Html" className="skill-img" />
              </div>
            </Col>
            <Col md={2} xs={6}>
              <div className="skill">
              <img src={require('../assets/skills/css.svg').default} alt="Css" className="skill-img" />
              </div>
            </Col>
            <Col md={2} xs={6}>
              <div className="skill">
              <img src={require('../assets/skills/express.svg').default} alt="Express"className="skill-img" />
              </div>
            </Col>
            <Col md={2} xs={6}>
              <div className="skill">
              <img src={require('../assets/skills/nodejs.svg').default} alt="Node" className="skill-img" />
              </div>
            </Col>
            <Col md={2} xs={6}>
              <div className="skill">
              <img src={require('../assets/skills/github.svg').default} alt="Github" className="skill-img" />
              </div>
            </Col>
            <Col md={2} xs={6}>
              <div className="skill">
              <img src={require('../assets/skills/bootstrap.svg').default} alt="Bootstrap" className="skill-img" />
              </div>
            </Col>
            <Col md={2} xs={6}>
              <div className="skill">
              <img src={require('../assets/skills/mongodb.svg').default} alt="Mongo Db" className="skill-img" />
              </div>
            </Col>
            <Col md={2} xs={6}>
              <div className="skill">
              <img src={require('../assets/skills/tailwindcss.svg').default} alt="Node" className="skill-img" />
              </div>
            </Col>
            <Col md={2} xs={6}>
              <div className="skill">
              <img src={require('../assets/skills/vscode.svg').default} alt="vscode" className="skill-img" />
              </div>
            </Col>
            <Col md={2} xs={6}>
              <div className="skill">
              <img src={require('../assets/skills/git.svg').default} alt="Git" className="skill-img" />
              </div>
            </Col>
             
          </Row>
        
      </div>
    </section>
  )
}

export default MySkillsTools