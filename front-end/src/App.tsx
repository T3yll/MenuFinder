import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/components/App.scss';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Restaurants from './pages/Restaurants';
import Menus from './pages/Menus';
import NavBar from "./components/NavBar";
import { CurrencyProvider } from './contexts/CurrencyContext';

function App() {
  return (
    <CurrencyProvider>
      <Router>
        <div className="min-h-screen bg-light text-dark">
          <Routes>
            <Route path="/" element={<><NavBar /><Home /></>} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/restaurants" element={<><NavBar /><Restaurants /></>} />
            <Route path="/menus" element={<><NavBar /><Menus /></>} />
          </Routes>
        </div>
      </Router>
    </CurrencyProvider>
  );
}

export default App;
