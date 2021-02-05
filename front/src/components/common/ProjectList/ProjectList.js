import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import {useSelector} from 'react-redux';

function ProjectList(props) {

	const projects = useSelector(store => store.user.projects);

	return (
		<div>

			{ projects && projects.map(project => <ProjectCard key={ project.id } project={ project }/>) }

		</div>
	);
}

export default ProjectList;
