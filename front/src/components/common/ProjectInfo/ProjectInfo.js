import React from 'react';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import CommentList from '../CommentList/CommentList';
import RoadMap from '../RoadMap/RoadMap';
import { useDispatch } from 'react-redux';
import { addPdfAC } from '../../../store/actions/pdf.actions';

function ProjectInfo({ project }) {
  const dispatch = useDispatch();

  return (
    <div>

      <Container>
        Author: {project.author}
        Rating: {project.rating}
        Status: {project.status}
        Project Name: {project.projectName}
        Concept: {project.concept}
        <CommentList />

        <RoadMap />

        <Button variant='primary'>Связаться с ...</Button>{' '}
        <Button onClick={() => dispatch(addPdfAC({ project }))}
                variant='primary'>Импорт в PDF</Button>

      </Container>

    </div>
  );
}

export default ProjectInfo;
