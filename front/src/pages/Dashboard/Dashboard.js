import React, { useEffect } from 'react';
import ProjectList from '../../components/common/ProjectList/ProjectList';
import ProjectFilter from '../../components/common/ProjectFilter/ProjectFilter';
import { useDispatch } from 'react-redux';
import { getProfileAC } from '../../store/actions/getProfile.actions';

function Dashboard(props) {


	return (
		<div>

			<ProjectFilter/>
			<ProjectList/>

		</div>
	);
}

export default Dashboard;
