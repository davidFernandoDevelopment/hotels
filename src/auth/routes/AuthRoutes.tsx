import { Navigate, Route, Routes } from 'react-router-dom';

import { ForgotPassword, SignIn, SignUp } from '../pages';


const AuthRoutes = () => {
    return (
        <Routes>
            <Route path='sign-in' element={<SignIn />} />
            <Route path='sign-up' element={<SignUp />} />
            <Route path='forgot-password' element={<ForgotPassword />} />

            <Route path='/*' element={<Navigate to='/auth/sign-in' />} />
        </Routes>
    );
};

export default AuthRoutes;