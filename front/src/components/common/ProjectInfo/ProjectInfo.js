import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import CommentList from '../CommentList/CommentList';
import RoadMap from '../RoadMap/RoadMap';
import { useDispatch, useSelector } from 'react-redux';
import { addPdfAC } from '../../../store/actions/pdf.actions';
import EditProjectForm from '../../EditForm/Editform';
import { deleteProjectAC } from '../../../store/actions/project.actions';
import { useHistory } from 'react-router-dom';
import './project-info.css';

function ProjectInfo({ project }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [showEdit, setShowEdit] = useState(false);
  const [editForm, setEditForm] = useState(false);
  const editFormHandler = (e) => {
    e.preventDefault();
    setEditForm(!editForm);
  };
  let i = -1;
  const user = useSelector(state => state.user);
  const token = JSON.parse(localStorage.getItem('jwt'));

  useEffect(() => {
    if (user.projects) {
      i = user.projects.findIndex(el => el._id == project._id);
    }
    if (i !== -1 || user.role == 'Admin') {
      setShowEdit(true);
    } else {
      setShowEdit(false);
    }
    console.log(showEdit);
  }, []);
  const deleteProjectHandler = (e) => {
    e.preventDefault();
    dispatch(deleteProjectAC({ role: user.role, token, projectId: project._id }));
    history.push('/cabinet');
    //Здесь диспатч саги на удаление.
    //ID проекта + токен.
    //Пост на projects/delete
    //в ответ success:true или message :)
  };

  return (

    <Container>
      <RoadMap />
      <div className='project-info'>
        <p><b>Author:</b> {project.author.name}</p>
        {/*<p>Rating: { project.rating }</p>*/}
        <p><b>Status: </b>{project.status}</p>
        <p><b>Project Name:</b> {project.projectName}</p>
        <p><b>Concept:</b> {project.concept}</p>
      </div>


      <div className='btn-container'>
        {/*<Button className={'btn btn-dark'} variant='primary'>Связаться с ...</Button>{' '}*/}

        <Button className={'btn btn-dark'} onClick={() => dispatch(addPdfAC(project))}
                variant='primary'>Импорт в PDF</Button>
        {showEdit ? <Button onClick={editFormHandler} className={'btn btn-dark'}>Редактировать проект</Button> : null}
        {showEdit ? <Button className={'btn btn-dark'} onClick={deleteProjectHandler}>Удалить проект </Button> : null}

      </div>
      {editForm ? <EditProjectForm project={project} /> : null}
      {/*<CommentList />*/}
    </Container>

  );
}

export default ProjectInfo;
