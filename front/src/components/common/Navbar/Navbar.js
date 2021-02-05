import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { userLogoutAC } from '../../../store/actions/logout.actions';
import { useHistory, Link } from "react-router-dom";

function NavBar() {

  const history = useHistory()
  const dispatch = useDispatch()
  const user = useSelector(state => state.user.name)
  const userLogout = () => {
    dispatch(userLogoutAC())
    localStorage.removeItem('jwt')
    history.push('/')
  }

  return (
    <>
      <Navbar  bg="dark" variant="dark">
        <Navbar.Brand as={Link} to ="/">Main</Navbar.Brand>
        <Nav className="mr-auto">
          {!user ? <Nav.Link as={Link} to = "/login">Login</Nav.Link> : null }
          {!user ? <Nav.Link as={Link} to = "/signup">Sign Up</Nav.Link> : null }

        </Nav>
        {user ? <Button onClick={userLogout} variant="light">Log out</Button> : null}
      </Navbar>

    </>
  );
}

export default NavBar;