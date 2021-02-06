import React from 'react';
import { Form } from 'react-bootstrap';
import './ProjectFilter.css'

function ProjectFilter(props) {
  return (
    <div >

      <Form>
        <Form.Row className={'filter'}>
          <Form.Group controlId='formGridState'>
            {/*<Form.Label>State</Form.Label>*/}
            <Form.Control className="bg-dark text-white" as='select' defaultValue='Choose...'>
              <option>Отсортировать по:</option>
              <option>рейтингу</option>
              <option>статусу</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>
      </Form>

    </div>
  );
}

export default ProjectFilter;
