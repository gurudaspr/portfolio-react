import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './styles/Contact.css';

const Contact = () => {
  return (
    <section id='contact' className='contact-section'>
      <div className="heading text-center">
        <h1>
          <span className='headspan'>{'<'} </span>CONTACT ME<span className='headspan'>{'/>'}</span>
        </h1>
      </div>
      <div className="contact-con">
        <Row className="d-flex justify-content-between">
          <Col md={6} sm={12} className="mb-4">
            <div className="form-container mt-5 pb-5 p-5 h-100 mx-auto d-flex flex-column justify-content-between">
            <h2 className='text-center'>Send Message</h2>
              <form className='form'>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Name"required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="name@example.com" required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="4"
                    placeholder="Message" required
                  ></textarea>
                </div>
                <div className="text-center mt-5">
                  <button type="submit" className="btn-col">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </Col>
          <Col md={6} sm={12} className='mb-4' >
            <div className="contact-container mt-5 p-5 h-100 mx-auto d-flex flex-column justify-content-between">
              <h2 className='text-center'>Get in Touch</h2>
              <div className="address">
                <p>
                  Pranavam(H), Anakkallu(PO),
                  <br />
                  Chengala(Via), Kasaragod(Dist),
                  <br />
                  Kerala, 671541
                </p>
              </div>
              <div className="phone">
                <h4>Phone:</h4>
                <p>+91 6282184257</p>
              </div>
              <div className="email">
                <h4>Email:</h4>
                <p>gurudaspranavam007@gmail.com</p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Contact;
