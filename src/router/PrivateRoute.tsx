import { Outlet, Navigate } from 'react-router-dom';

import { useChecking } from '../hooks';

const PrivateRoute = () => {

    const status = useChecking();

    return (
        status === 'authenticated'
            ? <Outlet />
            : <Navigate to='/auth/sign-in' />
    );
};

export default PrivateRoute;