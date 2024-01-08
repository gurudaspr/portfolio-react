import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Darkmode from './darkmode/DarkMode'


const Header = () => {
  return (
    <Navbar className='navbar'  expand="lg" fixed="top" >
      <div className="logo ms-2 ms-md-5 my-3">
      <Navbar.Brand href="#home"> <span>{'<'}</span>GURUDAS P R<span>{'/>'}</span></Navbar.Brand>
      </div>
      <div className="darkmode-container mx-md-5 ms-sm-auto order-md-3">
      <Darkmode />
      </div>
      <Navbar.Toggle aria-controls="basic-navbar-nav"><div className="custom-toggler-icon">
      <span className="line"></span>
      <span className="line"></span>
      <span className="line"></span>
    </div></Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        
        <Nav className="ms-auto custom-link  order-md-2">
          <Nav.Link  href="#home"><span>{'<'}</span>Home<span>{'/>'}</span></Nav.Link>
          <Nav.Link  href="#about"><span>{'<'}</span>About<span>{'/>'}</span></Nav.Link>
          <Nav.Link  href="#skills"><span>{'<'}</span>Skills<span>{'/>'}</span></Nav.Link>
          <Nav.Link  href="#project"><span>{'<'}</span>Projects<span>{'/>'}</span></Nav.Link>
          <Nav.Link href="#contact"><span>{'<'}</span>Contact<span>{'/>'}</span></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;