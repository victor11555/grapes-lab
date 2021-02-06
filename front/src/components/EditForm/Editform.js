import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createProjectAC, editProjectAC } from '../../store/actions/project.actions';
import { Button, Container, Form } from 'react-bootstrap';
import ProjectInfo from '../common/ProjectInfo/ProjectInfo';

function EditProjectForm({ project }) {
  const [select, setSelect] = useState(false);
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();

    const boolNeedPrototype = e.target.needPrototype.value === 'Yes' ? true : false;
    const boolPrivate = e.target.private.value === 'Yes' ? true : false;

    const {
      concept: { value: concept },
      projectName: { value: projectName },
      description: { value: description },
      projectResult: { value: projectResult },
      technology: { value: technology },
      comparison: { value: comparison },
      basis: { value: basis },
      needs: { value: needs },
      additionalNeeds: { value: additionalNeeds },
      targetClient: { value: targetClient },
      acceptableOutcome: { value: acceptableOutcome },
    } = e.target;

    const token = JSON.parse(localStorage.getItem('jwt'));

    dispatch(editProjectAC({
      token,
      concept,
      projectName,
      description,
      projectResult,
      technology,
      comparison,
      basis,
      needs,
      targetClient,
      acceptableOutcome,
      additionalNeeds,
      needPrototype: boolNeedPrototype,
      privaate: boolPrivate,
    }));
  };

  const needPrototype = <Form.Group>
    <Form.Label>Prototype Text</Form.Label>
    <Form.Control name='prototypeText' type='text' required />
  </Form.Group>;

  const viewNeedPrototype = (e) => {
    if (e.target.value === 'No') {
      setSelect(false);
    } else {
      setSelect(true);
    }
  };

  return (
    <>
      <Container>
        <Form onSubmit={submitHandler}>
          <Form.Group>
            <Form.Label>Concept</Form.Label>
            <Form.Control name='concept' type='text' defaultValue={project.concept} required />
          </Form.Group>
          <Form.Group>
            <Form.Label>Project name</Form.Label>
            <Form.Control name='projectName' defaultValue={project.projectName} type='text' required />
          </Form.Group>
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control type='textArea' defaultValue={project.description} name='description' required />
          </Form.Group>
          <Form.Group>
            <Form.Label>Project result</Form.Label>
            <Form.Control type='textArea' defaultValue={project.projectResult} name='projectResult' required />
          </Form.Group>
          <Form.Group>
            <Form.Label>Technology</Form.Label>
            <Form.Control type='textArea' defaultValue={project.technology} name='technology' required />
          </Form.Group>
          <Form.Group>
            <Form.Label>Comparison</Form.Label>
            <Form.Control type='textArea' defaultValue={project.comparison} name='comparison' required />
          </Form.Group>
          <Form.Group>
            <Form.Label>Basis</Form.Label>
            <Form.Control type='textArea' defaultValue={project.basis} name='basis' required />
          </Form.Group>
          <Form.Group>
            <Form.Label>Needs</Form.Label>
            <Form.Control type='textArea' defaultValue={project.needs} name='needs' required />
          </Form.Group>
          <Form.Group>
            <Form.Label>target Client</Form.Label>
            <Form.Control type='textArea' defaultValue={project.targetClient} name='targetClient' required />
          </Form.Group>
          <Form.Group>
            <Form.Label>Acceptable Outcome</Form.Label>
            <Form.Control type='textArea' defaultValue={project.acceptableOutcome} name='acceptableOutcome' required />
          </Form.Group>
          <Form.Group controlId='Form.ControlSelect1'>
            <Form.Label>Need prototype</Form.Label>
            <Form.Control onChange={viewNeedPrototype} defaultValue={project.needPrototype} name={'needPrototype'} as='select'>
              <option>No</option>
              <option>Yes</option>
            </Form.Control>
          </Form.Group>
          {select ? needPrototype : null}
          <Form.Group>
            <Form.Label>Additional Needs</Form.Label>
            <Form.Control name={'additionalNeeds'} defaultValue={project.additionalNeeds} type={'text'}>
            </Form.Control>
            <Form.Label>Скрыть проект</Form.Label>
            <Form.Control name={'private'}  as='select'>
              <option>No</option>
              <option>Yes</option>
            </Form.Control>
          </Form.Group>
          <Button variant='primary' type='submit'>
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
}
export default EditProjectForm;