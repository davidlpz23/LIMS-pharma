import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import SampleRegister from './components/SampleRegister';

function App() {
  return (
    
      <div className="App">
        <Routes> 
        <Route path="/" element={<SampleRegister />} /> {/* Ruta raíz agregada aquí */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />    
          <Route path="/sample-register" element={<SampleRegister />} />     
        </Routes>
      </div>
    
  );
}

export default App;
