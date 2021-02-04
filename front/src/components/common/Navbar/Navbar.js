import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { userLogoutAC } from '../../../store/actions/logout.actions';


function NavBar() {

  const dispatch = useDispatch()
  const user = localStorage.getItem('jwt')
  const userLogout = () => {
    dispatch(userLogoutAC())
    localStorage.removeItem('jwt')
  }

  return (
    <>
      <Navbar  bg="dark" variant="dark">
        <Navbar.Brand href="/">Main</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/login">Login</Nav.Link>
          <Nav.Link href="/signup">Sign Up</Nav.Link>
        </Nav>
        {user ? <Button onClick={userLogout} variant="light">Log out</Button> : null}
      </Navbar>

    </>
  );
}

export default NavBar;