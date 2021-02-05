import React from 'react';
import ProjectInfo from '../../components/common/ProjectInfo/ProjectInfo';
import { useSelector } from 'react-redux';

function ProjectPage(props) {
	const user = useSelector(state=>state.user)
	let project = null;
	if(user.projects) project = user.projects[0]
	return (
		<div>

			{project ? <ProjectInfo project={project}/> : null}

		</div>
	);
};

export default ProjectPage;
