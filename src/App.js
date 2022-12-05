import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomForm from './Form/Form';
import { ToastContainer } from 'react-toastify';
import Header from './components/Header';

function App() {
  return (
    <>
      <Router>
        <div className='container'>
          <Header />
          <CustomForm />
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
