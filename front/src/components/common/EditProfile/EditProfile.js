import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';

function EditProfile(props) {
  return (
    <div>
      <Container>
        <div className={'signup-form'}>
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
              <Form.Control name={'password'} type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicPhone">
              <Form.Label>Phone</Form.Label>
              <Form.Control name={'phone'} type="phone" placeholder="Enter your phone number" />
            </Form.Group>
            <Form.Group controlId="formBasicCompany">
              <Form.Label>Company</Form.Label>
              <Form.Control name={'company'} type="text" placeholder="Enter your company" />
            </Form.Group>
            <Button variant="dark" type="submit">
              <i className="bi bi-pencil-square"></i> Edit
            </Button>
          </Form>
        </div>
      </Container>
    </div>
  );
}

export default EditProfile;