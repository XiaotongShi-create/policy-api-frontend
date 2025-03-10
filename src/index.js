import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// retrieves the element with the id 'root'from the index.html
const root = ReactDOM.createRoot(document.getElementById('root'));

// rendering the React components and ensuring that the application functions correctly within the browser environment.
// my main React component is App, which is imported from ./App
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


