import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';

function Cabinet(props) {

	const [state, setState] = useState(false);

	return (
		<div>

			<Button onClick={ setState(!state) }>Добавить проект</Button>


		</div>
	);
};

export default Cabinet;
