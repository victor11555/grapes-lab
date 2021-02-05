import React from 'react';

function AdminCabinet(props) {

    cosnt role = useSelector(state => state.user.role)
    return (
        <>
            {    role !== 'Admin' ? history.push('&') :
            }
        </>
    );
}

export default AdmineCabinet;