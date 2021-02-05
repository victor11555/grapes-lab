import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import CreateProjectForm from '../CreateProjectForm/CreateProjectForm';

function Cabinet(props) {

	const [state, setState] = useState(false);

	return (
		<div>
			Other informations... <br/>
			<Button onClick={ ()=> setState(!state) }>Добавить проект</Button>
			{ state ? <CreateProjectForm/> : null }
		</div>
	);
};

export default Cabinet;
