import React from 'react';
import Button from 'react-bootstrap/Button';
import {Container} from 'react-bootstrap';
import CommentList from '../CommentList/CommentList';
import RoadMap from '../RoadMap/RoadMap';

function ProjectInfo({id, author, projectName, concept, rating, status}) {
	return (
		<div>

			<Container>
				MAP:
				ProjectName
				Author
				Concept
				Rating
				Status

				<CommentList/>
				<RoadMap/>


				<Button variant="primary">Связаться с ...</Button>{ ' ' }
				<Button variant="primary">Импорт в PDF</Button>
			</Container>

		</div>
	);
}

export default ProjectInfo;
