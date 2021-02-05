import React, { useEffect } from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import { useDispatch, useSelector } from 'react-redux';
import { initAllProjectsAC } from '../../../store/actions/project.actions';
import { Container } from 'react-bootstrap';

function ProjectList(props) {
	const dispatch = useDispatch()
	useEffect(()=>{
		dispatch(initAllProjectsAC([]))
	}, [])

	const projects = useSelector(store => store.projects);
	return (
		<Container>
			{ projects && projects.map(project => <ProjectCard key={ project._id } project={ project }/>) }
		</Container>
	);
}

export default ProjectList;
