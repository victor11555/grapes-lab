import React, { useEffect } from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProjectsAC } from '../../../store/actions/project.actions';

function ProjectList(props) {
	const dispatch = useDispatch()
	useEffect(()=>{
		dispatch(getAllProjectsAC())
	}, [])
	const projects = useSelector(store => store.projects);

	return (
		<div>

			{ projects && projects.map(project => <ProjectCard key={ project.id } project={ project }/>) }

		</div>
	);
}

export default ProjectList;
