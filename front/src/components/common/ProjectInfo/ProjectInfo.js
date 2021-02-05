import React from 'react';
import Button from 'react-bootstrap/Button';
import {Container} from 'react-bootstrap';
import CommentList from '../CommentList/CommentList';
import RoadMap from '../RoadMap/RoadMap';
import {useDispatch, useSelector} from "react-redux";
import {addPdfAC} from "../../../store/actions/pdf.actions";

function ProjectInfo({id, author, projectName, concept, rating, status}) {

	const project = useSelector(state => state.user.project[0])

    const dispatch = useDispatch();
    return (
        <div>

            <Container>
                MAP:
                ProjectName
                Author
                Concept
                Rating
                Status

                <CommentList/>
                <RoadMap/>


                <Button variant="primary">Связаться с ...</Button>{' '}
                <Button onClick={() => dispatch(addPdfAC(project))}
                        variant="primary">Импорт в PDF</Button>
            </Container>

        </div>
    );
}

export default ProjectInfo;
