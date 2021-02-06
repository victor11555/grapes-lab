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
        <div style={{ marginLeft: '15px' }}>
          <Card className='mb-2 bg-dark text-white user-card' style={{ width: '18rem ' }}>
            <Card.Header>{user.name}</Card.Header>
            <ListGroup style={{ color: 'black' }} variant='flush'>
              <ListGroup.Item>Телефон для связи: <br />{user.phone}</ListGroup.Item>
              <ListGroup.Item>Email: {user.email}</ListGroup.Item>
            </ListGroup>
          </Card>
        </div>
        : null}
      <div style={{display :'flex', justifyContent:'flex-end', marginRight: '15px'}}>
        <Button variant='dark' onClick={() => setState(!state)}>Добавить проект</Button>
      </div>
      {state ? <CreateProjectForm /> : null}
      <ProjectList newState={'Cab'} />
    </Container>
  );
};

export default Cabinet;
