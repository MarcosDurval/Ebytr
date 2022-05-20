import React from 'react';
import { Routes, Route } from 'react-router-dom';
import List from './pages/ListTask';
import NewTask from './pages/newTask';

function App() {
  return (
    <Routes>
      <Route path="/" element={<List />} />
      <Route path="/create" element={<NewTask />} />
    </Routes>
  );
}

export default App;
