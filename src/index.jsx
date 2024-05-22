import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App'; d
import { RouterProvider } from 'react-router-dom';
import Router from './Router/Router';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='container m-auto'>
      <RouterProvider router={Router} />
    </div>
  </React.StrictMode>
);


