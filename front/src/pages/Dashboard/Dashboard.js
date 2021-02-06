import React from 'react';
import ProjectList from '../../components/common/ProjectList/ProjectList';
import ProjectFilter from '../../components/common/ProjectFilter/ProjectFilter';
import { Container } from 'react-bootstrap';

function Dashboard(props) {


  return (
    <Container>
      {/*<ProjectFilter />*/}
      <ProjectList />

    </Container>
  );
}

export default Dashboard;
