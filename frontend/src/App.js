import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import SampleRegister from './components/SampleRegister';
import ReagentRegister from './components/ReagentRegister';
import ReagentList from './components/ReagentList'; 

function App() {
  return (
    
      <div className="App">
        <Routes> 
        <Route path="/" element={<ReagentList />} /> {/* Ruta raíz agregada aquí */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />    
          <Route path="/sample-register" element={<SampleRegister />} />   
          <Route path="/reagent-register" element={<ReagentRegister />} />
          <Route path="/reagent-list" element={<ReagentList />} />
        </Routes>
      </div>
    
  );
}

export default App;
