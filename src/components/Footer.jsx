import React from 'react'
import { Row, Col } from 'react-bootstrap';

function Footer() {
    return (
        <div className='mt-5 pt-5'>
           <footer className="footer footer-col mt-5 py-3 ">
        <div className="container">
          <Col md={12} className="text-center mt-2">
            <p>&copy; 2024 ASHFLIX | Designed by <a href="#home"><span style={{ color: 'orangered' }}>gurudaspr</span></a></p>
          </Col>
        </div>
      </footer>
        </div>
    )
}

export default Footer