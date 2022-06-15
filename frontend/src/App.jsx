import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Page from './pages/prin';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Page />} />
    </Routes>
  );
}

export default App;
