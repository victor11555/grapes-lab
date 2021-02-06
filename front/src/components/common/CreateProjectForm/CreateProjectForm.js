import { Button, Container, Form } from 'react-bootstrap';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createProjectAC } from '../../../store/actions/project.actions';
import {useHistory} from "react-router-dom";
import './CreateProjectForm.css'

function CreateProjectForm({setState,state}) {
  const [select, setSelect] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();
    setState(!state)

    const boolNeedPrototype = e.target.needPrototype.value === 'Yes' ? true : false;

    const boolPrivate = e.target.private.value === 'Yes' ? true : false;
    console.log(e.target);
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

    dispatch(createProjectAC({
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
    history.push('/cabinet')
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
        <div className={'create-project-form'}>
        <Form onSubmit={submitHandler}>
          <Form.Group>
            <Form.Label>Project name</Form.Label>
            <Form.Control name='projectName' type='text' required />
          </Form.Group>
          <Form.Group>
            <Form.Label>Concept</Form.Label>
            <Form.Control as="textarea" rows={3} name='concept' type='text' placeholder='Enter the concept of the project' required />
          </Form.Group>

          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={3} type='textArea' name='description' required />
          </Form.Group>
          <Form.Group>
            <Form.Label>Project result</Form.Label>
            <Form.Control as="textarea" rows={3} type='textArea' name='projectResult' required />
          </Form.Group>
          <Form.Group>
            <Form.Label>Technology</Form.Label>
            <Form.Control as="textarea" rows={3} type='textArea' name='technology' required />
          </Form.Group>
          <Form.Group>
            <Form.Label>Comparison</Form.Label>
            <Form.Control as="textarea" rows={3} type='textArea' name='comparison' required />
          </Form.Group>
          <Form.Group>
            <Form.Label>Basis</Form.Label>
            <Form.Control as="textarea" rows={3} type='textArea' name='basis' required />
          </Form.Group>
          <Form.Group>
            <Form.Label>Needs</Form.Label>
            <Form.Control as="textarea" rows={3} type='textArea' name='needs' required />
          </Form.Group>
          <Form.Group>
            <Form.Label>target Client</Form.Label>
            <Form.Control as="textarea" rows={3} type='textArea' name='targetClient' required />
          </Form.Group>
          <Form.Group>
            <Form.Label>Acceptable Outcome</Form.Label>
            <Form.Control as="textarea" rows={3} type='textArea' name='acceptableOutcome' required />
          </Form.Group>
          <Form.Group controlId='Form.ControlSelect1'>
            <Form.Label>Need prototype</Form.Label>
            <Form.Control onChange={viewNeedPrototype} name={'needPrototype'} as='select'>
              <option>No</option>
              <option>Yes</option>
            </Form.Control>
          </Form.Group>
          {select ? needPrototype : null}
          <Form.Group>
            <Form.Label>Additional Needs</Form.Label>

            <Form.Control name={'additionalNeeds'} type={'text'}>
            </Form.Control>
            <Form.Label>Private?</Form.Label>
            <Form.Control name={'private'} as='select'>
              <option>No</option>
              <option>Yes</option>
            </Form.Control>
          </Form.Group>
          <Button variant='dark' type='submit'>
            Submit
          </Button>
        </Form>
        </div>
      </Container>
    </>
  );
}

export default CreateProjectForm;
