import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import SampleRegister from './components/SampleRegister';
import ReagentRegister from './components/ReagentRegister';
import ReagentList from './components/ReagentList'; 
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    
      <div className="App">
        <Header />
        <Routes> 
          <Route path="/" element={<Login />} /> // Cambia el componente por defecto a Login  
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />    
          <Route path="/path_to_SampleRegister" element={<SampleRegister />} /> {/* Agrega la ruta al componente SampleRegister.jsx */}
          <Route path="/path_to_ReagenstRegister" element={<ReagentRegister />} /> {/* Agrega la ruta al componente ReagentRegister.jsx */}
          <Route path="/path_to_ReagentList" element={<ReagentList />} /> {/* Agrega la ruta al componente ReagentList.jsx */}
        </Routes>
        <Footer />
      </div>
    
  );
}

export default App;
