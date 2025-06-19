import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App'; // Cambiado para apuntar a App.jsx dentro de app/

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);