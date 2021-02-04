import React, { useState } from 'react';
import { Form, Button, Container, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { userSignupAC } from '../../../store/actions/signup.actions'
import './signUp.css'

function SignUpBox() {
  const dispatch = useDispatch()
  const submitHandler = (e) => {
    e.preventDefault()

    const {
      name : {value: name},
      email : { value : email},
      password : { value : password},
      phone : { value : phone},
      company : { value : company},
      role : { value : role},
    } = e.target
    if(select) {
      const {secret: {value: secret }} = e.target;
      dispatch(userSignupAC({ name, email, password, phone, company, role, secret }))
    } else {
      dispatch(userSignupAC({ name, email, password, phone, company, role }))
    }
  }
  const secretKey = <Form.Group  controlId="secretKey">
    <Form.Label>Secret key</Form.Label>
    <Form.Control name={'secret'} type="password" placeholder="Secret key" />
  </Form.Group>

  const [select, setSelect] = useState(false)
  const viewSecretKey = (e) => {
    if(e.target.value == 'User'){
        setSelect(false)
    } else {
      setSelect(true)
    }
  }

  return (
    <div className={'signupImg'}>
      <Container>
        <div className={'signup-form'}>
      <Form onSubmit={submitHandler}>
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
        <Form.Group controlId="Form.ControlSelect1">
          <Form.Label>Role select</Form.Label>
          <Form.Control onChange={viewSecretKey} name={'role'} as="select">
            <option>User</option>
            <option>Support</option>
            <option>Stakeholder</option>
            <option>Curator</option>
            <option>Admin</option>
          </Form.Control>
        </Form.Group>
        {select ? secretKey : null}
        <Button name={'signUpBtn'} variant="dark" type="submit">
          Sign Up
        </Button>
      </Form>
      </div>
      </Container>
    </div>
  );
}

export default SignUpBox;
