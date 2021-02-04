import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';


function NavBar() {


  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Main</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/login">Login</Nav.Link>
          <Nav.Link href="/signup">Sign Up</Nav.Link>
        </Nav>
      </Navbar>

    </>
  );
}

export default NavBar;