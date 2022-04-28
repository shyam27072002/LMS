import React, { Component } from 'react';
import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap';
import Container from 'react-bootstrap/esm/Container';
export default class NavbarComp extends Component {
  render() {
    return (
      <div>
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">LMS</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Porfile</Nav.Link>
          <Nav.Link href="#pricing">Notification</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
      
      <br />
      
    </div>
    )
  }
}
