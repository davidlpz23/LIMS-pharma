import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    
      <div className="App">
        <Routes> 
        <Route path="/" element={<Login />} /> {/* Ruta raíz agregada aquí */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />         
        </Routes>
      </div>
    
  );
}

export default App;
