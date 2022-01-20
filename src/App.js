import React from 'react';

import "react-toastify/dist/ReactToastify.css"
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

import { toast } from 'react-toastify';

// CSS
import './App.css';

// Components

import Header from "./Components/Header";

// Pages 

import Dashboard from "./Pages/Dashboard";
import Register from "./Pages/Register";

toast.configure();

function App() {
  return (
    <div>
      

      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/register" element={<Register/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
