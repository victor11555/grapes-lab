import React from 'react';
import { Navbar, Nav, Button, Dropdown, SplitButton } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { userLogoutAC } from '../../../store/actions/logout.actions';
import { useHistory, Link } from "react-router-dom";
import './Navbar.css'

function NavBar() {

  const history = useHistory()
  const dispatch = useDispatch()
  const user = useSelector(state => state.user.name)
  const userLogout = () => {
    dispatch(userLogoutAC())
    localStorage.removeItem('jwt')
    history.push('/')
  }
  const dropdown =   <Dropdown drop='left' className='dropdown'>
    <Dropdown.Toggle variant="dark" id="dropdown-button-drop-left"> Profile </Dropdown.Toggle>
    <Dropdown.Menu className='dark'>
      <Dropdown.Item as={Link} to = "/">Action</Dropdown.Item>
      <Dropdown.Item as={Link} to = "/">Another action</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item onClick={userLogout} as={Link} to = "/">Log out</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>

  return (
    <>
      <Navbar  bg="dark" variant="dark">
        <Navbar.Brand as={Link} to ="/">Main</Navbar.Brand>
        <Nav className="mr-auto">
          {!user ? <Nav.Link as={Link} to = "/login">Login</Nav.Link> : null }
          {!user ? <Nav.Link as={Link} to = "/signup">Sign Up</Nav.Link> : null }
        </Nav>
        {user ? {dropdown} : null}
      </Navbar>

    </>
  );
}

export default NavBar;