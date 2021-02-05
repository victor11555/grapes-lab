import React, { useEffect } from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import { useDispatch, useSelector } from 'react-redux';
import { initAllProjectsAC } from '../../../store/actions/project.actions';

function ProjectList(props) {
	const dispatch = useDispatch()
	useEffect(()=>{
		dispatch(initAllProjectsAC([]))
	}, [])

	const projects = useSelector(store => store.projects);
	return (
		<div>

			{ projects && projects.map(project => <ProjectCard key={ project._id } project={ project }/>) }

		</div>
	);
}

export default ProjectList;
