import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from  './components/Login';
import Register from './components/Register';
import SampleRegister from './components/SampleRegister';
import ReagentRegister from './components/ReagentRegister';
import ReagentList from './components/ReagentList'; 
import Header from './components/Header';
import Footer from './components/Footer';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} /> {/* Redirige a Login por defecto */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/sample-register" element={<PrivateRoute><SampleRegister /></PrivateRoute>} />    
          <Route path="/reagent-register" element={<PrivateRoute><ReagentRegister /></PrivateRoute>} />
          <Route path="/reagent-list" element={<PrivateRoute><ReagentList /></PrivateRoute>} /> 
        </Routes>
        <Footer />
      </div>
    
  );
}

export default App;
