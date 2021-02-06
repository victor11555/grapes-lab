import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';

function AddComment(props) {
  return (
    <>
      <Container>
        <Form>
          <Form.Group controlId='exampleForm.ControlTextarea1'>
            <Form.Label>Add comment</Form.Label>
            <Form.Control as='textarea' rows={3} />
            <Button variant='dark'>ADD</Button>
          </Form.Group>
        </Form>
      </Container>
    </>
  );
}

export default AddComment;