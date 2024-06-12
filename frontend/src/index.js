import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'; // Corregido aquí
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';

const root = createRoot(document.getElementById('root')); // Corregido aquí
root.render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>
);