import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router } from 'react-router-dom';

import { Header } from './ui';
import { store } from './store';
import { AppRouter } from './router';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <AppRouter />
      </Router>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='dark'
      />
    </Provider>
  );
}

export default App;
