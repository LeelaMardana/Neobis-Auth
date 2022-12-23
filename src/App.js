import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Signin } from './pages/Signin';
import { Dashboard } from './pages/Dashboard';
import { Signup } from './pages/Signup';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className='container'>
          <Header />
          <Routes>
            <Route exact path='/' element={<Navigate to='/signin' />} />
            <Route path='/users' element={<Dashboard />} />
            <Route path='/signin' element={<Signin />} />
            <Route path='/signup' element={<Signup />} />
          </Routes>
        </div>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
