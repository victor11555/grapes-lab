import {Button, Form} from 'react-bootstrap';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {createProjectAC} from '../../../store/actions/project.actions';


function CreateProjectForm(props) {
	const [select, setSelect] = useState(false);
	const dispatch = useDispatch();

	const submitHandler = (e) => {
		e.preventDefault();
		const {
			concept: {value: concept},
			projectName: {value: projectName},
			description: {value: description},
			projectResult: {value: projectResult},
			technology: {value: technology},
			comparison: {value: comparison},
			basis: {value: basis},
			needs: {value: needs},
			targetClient: {value: targetClient},
			acceptableOutcome: {value: acceptableOutcome},
			needPrototype: {value: needPrototype},
			additionalNeeds: {value: additionalNeeds},
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
			needPrototype,
			additionalNeeds
		}));
	};

	const needPrototype = <Form.Group>
		<Form.Label>Prototype Text</Form.Label>
		<Form.Control name='prototypeText' type="text" required/>
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
			<Form onSubmit={ submitHandler }>
				<Form.Group>
					<Form.Label>Concept</Form.Label>
					<Form.Control name='concept' type="text" placeholder="Enter the concept of the project" required/>
				</Form.Group>
				<Form.Group>
					<Form.Label>Project name</Form.Label>
					<Form.Control name='projectName' type="text" required/>
				</Form.Group>
				<Form.Group>
					<Form.Label>Description</Form.Label>
					<Form.Control type="textArea" name='description' required/>
				</Form.Group>
				<Form.Group>
					<Form.Label>Project result</Form.Label>
					<Form.Control type="textArea" name='projectResult' required/>
				</Form.Group>
				<Form.Group>
					<Form.Label>Technology</Form.Label>
					<Form.Control type="textArea" name='technology' required/>
				</Form.Group>
				<Form.Group>
					<Form.Label>Comparison</Form.Label>
					<Form.Control type="textArea" name='comparison' required/>
				</Form.Group>
				<Form.Group>
					<Form.Label>Basis</Form.Label>
					<Form.Control type="textArea" name='basis' required/>
				</Form.Group>
				<Form.Group>
					<Form.Label>Needs</Form.Label>
					<Form.Control type="textArea" name='needs' required/>
				</Form.Group>
				<Form.Group>
					<Form.Label>target Client</Form.Label>
					<Form.Control type="textArea" name='targetClient' required/>
				</Form.Group>
				<Form.Group>
					<Form.Label>Acceptable Outcome</Form.Label>
					<Form.Control type="textArea" name='acceptableOutcome' required/>
				</Form.Group>
				<Form.Group controlId="Form.ControlSelect1">
					<Form.Label>Need prototype</Form.Label>
					<Form.Control onChange={ viewNeedPrototype } name={ 'needPrototype' } as="select">
						<option>No</option>
						<option>Yes</option>
					</Form.Control>
				</Form.Group>
				<Form.Group>
					<Form.Label>Additional Needs</Form.Label>
					<Form.Control name={ 'additionalNeeds' } as="select">
						<option>No</option>
						<option>Yes</option>
					</Form.Control>
				</Form.Group>
				{ select ? needPrototype : null }
				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Form>
		</>
	);
}

export default CreateProjectForm;
