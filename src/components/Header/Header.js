import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../logos/Group 1329.png';

const Header = () => {
    return (
        <Container>
              <Navbar expand="lg">
                <Navbar.Brand href="#home"><img src={logo} alt="" style={{ height: "50px" }} /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className=" ml-auto">
                        <Nav.Link className=" mx-2" href="/home">Home</Nav.Link>
                        <Nav.Link className=" mx-2" href="#destination">Donation</Nav.Link>
                        <Nav.Link  className=" mx-2" href="#blog">Events</Nav.Link>
                        <Nav.Link className=" mx-2" href="#contact">Blog</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Button variant="primary" className='mr-2'>Register</Button>
                <Link to="/admin"><Button variant="dark">Admin</Button></Link> 
            </Navbar>
        </Container>
      
       
    );
};

export default Header;