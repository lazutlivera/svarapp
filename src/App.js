import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import BentoGrid from './components/BentoGrid';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import DeleteAccount from './pages/DeleteAccount';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BentoGrid />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/delete-account" element={<DeleteAccount />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App; 