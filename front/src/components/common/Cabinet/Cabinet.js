import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import CreateProjectForm from '../CreateProjectForm/CreateProjectForm';
import { Badge, Card, Container, ListGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import ProjectList from '../ProjectList/ProjectList';

function Cabinet(props) {

  const [state, setState] = useState(false);
  const user = useSelector(state => state.user);

  return (
    <Container>
      <h1>
        <Badge center variant='secondary'>Личный кабинет</Badge>
      </h1>
      {user ?
        <Card style={{ width: '22rem' }}>
          <Card.Header>{user.name}</Card.Header>
          <ListGroup variant='flush'>
            <ListGroup.Item>Телефон для связи: {user.phone}</ListGroup.Item>
            <ListGroup.Item>Email: {user.email}</ListGroup.Item>
          </ListGroup>
        </Card> : null}
      <Button onClick={() => setState(!state)}>Добавить проект</Button>
      {state ? <CreateProjectForm setState={setState} state={state} /> : null}
      <ProjectList newState={'Cab'} />
    </Container>
  );
};

export default Cabinet;
