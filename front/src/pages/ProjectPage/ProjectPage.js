import React from 'react';
import ProjectInfo from '../../components/common/ProjectInfo/ProjectInfo';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function ProjectPage(props) {
  const projects = useSelector(state => state.projects);
  let project = null;
  let { id } = useParams();
  if (projects) project = projects.filter(el => el._id === id)[0];
  return (
    <div>

      {project ? <ProjectInfo project={project} /> : null}

    </div>
  );
};

export default ProjectPage;
