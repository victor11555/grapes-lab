import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { editProfileAC } from '../../../store/actions/user.actions';
import './EditProfile.css'

function EditProfile() {
  let user = useSelector(state => state.user);
  const history = useHistory();
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    const token = JSON.parse(localStorage.getItem('jwt'));
    const {
      name: { value: name },
      email: { value: email },
      password: { value: password },
      phone: { value: phone },
      company: { value: company },
    } = e.target;
    dispatch(editProfileAC({ token, name, email, password, phone, company }));
    history.push('/cabinet');
  };
  return (
    <div>
      <Container>
        <div className={'edit-form'}>
          <Form onSubmit={submitHandler}>
            <Form.Group controlId='formBasicName'>
              <Form.Label>Name</Form.Label>
              <Form.Control name={'name'} type='text' defaultValue={user.name} placeholder='Enter your name' />
            </Form.Group>
            <Form.Group controlId='formBasicEmail'>
              <Form.Label>Email address</Form.Label>
              <Form.Control name={'email'} type='email' defaultValue={user.email} placeholder='Enter email' />
              <Form.Text className='text-muted'>
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId='formBasicPassword'>
              <Form.Label>Password</Form.Label>
              <Form.Control name={'password'} defaultValue={user.password} type='password' placeholder='Password' />
            </Form.Group>
            <Form.Group controlId='formBasicPhone'>
              <Form.Label>Phone</Form.Label>
              <Form.Control name={'phone'} defaultValue={user.phone} type='phone'
                            placeholder='Enter your phone number' />
            </Form.Group>
            <Form.Group controlId='formBasicCompany'>
              <Form.Label>Company</Form.Label>
              <Form.Control name={'company'} defaultValue={user.company} type='text' placeholder='Enter your company' />
            </Form.Group>
            <Button variant='dark' type='submit'>
              <i className='bi bi-pencil-square'></i> Edit
            </Button>
          </Form>
        </div>
      </Container>
    </div>
  );
}

export default EditProfile;
