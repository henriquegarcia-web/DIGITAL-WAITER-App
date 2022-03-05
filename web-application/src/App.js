import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Loading from './Pages/Loading';
import Login from './Pages/Login';
import OnBoarding from './Pages/OnBoarding';
import Register from './Pages/Register';
import NotFound from './Pages/NotFound';

function App() {
  return (
    <>
     <Router>
        <Routes>

          <Route path='/' exact element={<Loading />} />
          <Route path='/onboarding' element={<OnBoarding />} />

          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />

          <Route path='/home' element={<Home />} />

          <Route path='*' element={<NotFound />} />

        </Routes>
      </Router> 
    </>
  );
}

export default App;
