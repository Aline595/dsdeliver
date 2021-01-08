import React from 'react';
import { ToastContainer } from 'react-toastify';

import './App.css';
import Navbar from './Navbar';
import Routes from './Routes';


function App() {
  return (
    <>
      <Routes />
      <ToastContainer />
    </>
  );
}

export default App;
