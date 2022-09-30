import { Routes, Route, Navigate } from 'react-router-dom';

import { PrivateRoute, PublicRoute } from './';
import { AuthRoutes } from '../auth';
import { useChecking } from '../hooks';
import { Home, Offers, Profile } from '../pages';


const AppRouter = () => {
    const status = useChecking();

    if (status === 'checking') return <h3>Cargando ....</h3>;

    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path='offers' element={<Offers />} />
            <Route path='profile' element={<PrivateRoute />}>
                <Route index element={<Profile />} />
            </Route>
            <Route path='auth' element={<PublicRoute />}>
                <Route path='*' element={<AuthRoutes />} />
            </Route>
            <Route path='*' element={<Navigate to='' />} />
        </Routes>
    );
};

export default AppRouter;