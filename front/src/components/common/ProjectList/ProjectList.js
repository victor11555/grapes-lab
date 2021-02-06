import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import { useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';

function ProjectList({ newState }) {

  let projects;
  const allProjects = useSelector(store => store.projects);
  const userProjects = useSelector(store => store.user.projects);


  if (newState) {
    projects = userProjects;
  } else {
    projects = allProjects;
  }
  return (
    <Container>
      {projects && projects.map(project => <ProjectCard key={project._id} project={project} />)}
    </Container>
  );
}

export default ProjectList;
