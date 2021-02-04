import React from 'react';
import {Form} from 'react-bootstrap';

function ProjectFilter(props) {
	return (
		<div>

			<Form>
				<Form.Row>
					<Form.Group controlId="formGridState">
						<Form.Label>State</Form.Label>
						<Form.Control as="select" defaultValue="Choose...">
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
