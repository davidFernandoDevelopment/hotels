import { Navigate, Outlet } from 'react-router-dom';
import { useChecking } from '../hooks/useChecking';

const PublicRoute = () => {

    const status = useChecking();

    return (
        status === 'not-authenticated'
            ? <Outlet />
            : <Navigate to='/' />
    );
};

export default PublicRoute;