import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import CreateProjectForm from '../CreateProjectForm/CreateProjectForm';
import {Container} from 'react-bootstrap';

function Cabinet(props) {

	const [state, setState] = useState(false);

	return (
		<div>
			<Container>
				Other informations... <br/>
				<Button onClick={ () => setState(!state) }>Добавить проект</Button>
				{ state ? <CreateProjectForm/> : null }
			</Container>
		</div>
	);
};

export default Cabinet;
