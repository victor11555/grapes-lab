import React from 'react';
import { useSelector } from 'react-redux';
import Cabinet from '../../components/common/Cabinet/Cabinet';


function CabinetPage(props) {
  const role = useSelector(state => state.user.role);

  return (
    <>
      <Cabinet />

    </>
  );
}

export default CabinetPage;
