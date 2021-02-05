import React, { useEffect } from 'react';
import ProjectList from '../../components/common/ProjectList/ProjectList';
import ProjectFilter from '../../components/common/ProjectFilter/ProjectFilter';
import { useDispatch } from 'react-redux';
import { getProfileAC } from '../../store/actions/getProfile.actions';
import { Container } from 'react-bootstrap';

function Dashboard(props) {


	return (
		<Container>
			<ProjectFilter/>
			<ProjectList/>

		</Container>
	);
}

export default Dashboard;
