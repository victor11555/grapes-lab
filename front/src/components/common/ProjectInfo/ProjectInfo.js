import React from 'react';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import CommentList from '../CommentList/CommentList';
import RoadMap from '../RoadMap/RoadMap';
import {useDispatch, useSelector} from 'react-redux';
import {addPdfAC} from '../../../store/actions/pdf.actions';

function ProjectInfo({project}) {
	const dispatch = useDispatch();

	return (

			<Container>
			<p>Author: { project.author }</p>
				<p>Rating: { project.rating }</p>
				<p>Status: { project.status }</p>
				<p>Project Name: { project.projectName }</p>
				<p>Concept: { project.concept }</p>
				<CommentList/>

				<RoadMap/>

				<Button className={'btn btn-dark'} variant="primary">Связаться с ...</Button>{ ' ' }

				<Button className={'btn btn-dark'} onClick={ () => dispatch(addPdfAC(project)) }
								variant="primary">Импорт в PDF</Button>

			</Container>

	);
}

export default ProjectInfo;
