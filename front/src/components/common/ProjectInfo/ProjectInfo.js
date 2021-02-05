import React from 'react';
import Button from 'react-bootstrap/Button';
import {Container} from 'react-bootstrap';
import CommentList from '../CommentList/CommentList';
import RoadMap from '../RoadMap/RoadMap';

function ProjectInfo({project}) {
	return (
		<div>

			<Container>

				Author: { project.author }
				Rating: { project.rating }
				Status: { project.status }
				Project Name: { project.projectName }
				Concept: { project.concept }


				<CommentList/>

				<RoadMap/>

				<Link> </Link>

				<Button variant="primary">Связаться с ...</Button>{ ' ' }
				<Button variant="primary">Импорт в PDF</Button>
			</Container>

		</div>
	);
}

export default ProjectInfo;
