import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { userLoginAC } from '../../../store/actions/login.actions';

function LoginBox(props) {

  const dispatch = useDispatch()
  const submitHandler = (e) => {
    e.preventDefault()
    const {
      email : {value: email},
      password : {value: password}
    } = e.target
    dispatch(userLoginAC({email, password}))
  }

  return (
    <Container>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name={'email'} type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button name={'loginUpBtn'} variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </Container>
  );
}

export default LoginBox;