import React, { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import CommentList from '../CommentList/CommentList';
import RoadMap from '../RoadMap/RoadMap';
import { useDispatch, useSelector } from 'react-redux';
import { addPdfAC } from '../../../store/actions/pdf.actions';
import EditProjectForm from '../../EditForm/Editform';

function ProjectInfo({ project }) {
  const dispatch = useDispatch();
  const [showEdit,setShowEdit] = useState(false)
  const [editForm,setEditForm] = useState(false)
  const editFormHandler = (e) =>{
    e.preventDefault()
    setEditForm(!editForm)
  }
  let i
  const user = useSelector(state=>state.user)
  if(user.projects) {i = user.projects.findIndex(el=>el._id==project._id)}
  useEffect(()=>{
    if(i!==-1 || user=='Admin'){
      setShowEdit(true)
    }
  },[])
  const deleteProjectHandler = (e) =>{
    e.preventDefault()
  }

  return (

    <Container>
      <p>Author: {project.author.name}</p>
      {/*<p>Rating: { project.rating }</p>*/}
      <p>Status: {project.status}</p>
      <p>Project Name: {project.projectName}</p>
      <p>Concept: {project.concept}</p>
      <CommentList />

      <RoadMap />

      <Button className={'btn btn-dark'} variant='primary'>Связаться с ...</Button>{' '}

      <Button className={'btn btn-dark'} onClick={() => dispatch(addPdfAC(project))}
              variant='primary'>Импорт в PDF</Button>
      {showEdit?<Button onClick={editFormHandler} className={'btn btn-dark'}>Редактировать проект</Button>:null}
      {showEdit?<Button onClick={deleteProjectHandler}/>:null}
      {editForm?<EditProjectForm project={project}/>:null}

    </Container>

  );
}

export default ProjectInfo;
