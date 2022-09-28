import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Header } from './ui';
import { ForgotPassword, Home, Offers, Profile, SignIn, SignUp } from './pages';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='' element={<Home />} />
          <Route path='offers' element={<Offers />} />
          <Route path='sign-in' element={<SignIn />} />
          <Route path='sign-up' element={<SignUp />} />
          <Route path='profile' element={<Profile />} />
          <Route path='forgot-password' element={<ForgotPassword />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
