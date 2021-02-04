import React from 'react';
import {Form, Button} from "react-bootstrap";

function SignUpBox() {
  return (
    <>
      <Form>
        <Form.Group controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control name={'name'} type="text" placeholder="Enter your name" />
        </Form.Group>
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
        <Form.Group controlId="formBasicPhone">
          <Form.Label>Phone</Form.Label>
          <Form.Control name={'phone'} type="phone" placeholder="Enter your phone number" />
        </Form.Group>
        <Form.Group controlId="formBasicCompany">
          <Form.Label>Company</Form.Label>
          <Form.Control name={'company'} type="text" placeholder="Enter your company" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Role select</Form.Label>
          <Form.Control name={'role'} as="select">
            <option>Admin</option>
            <option>Stakeholder</option>
            <option>Support</option>
            <option>Curator</option>
            <option>User</option>
          </Form.Control>
        </Form.Group>
        <Button name={'signUpBtn'} variant="primary" type="submit">
          Sign Up
        </Button>
      </Form>
    </>
  );
}

export default SignUpBox;