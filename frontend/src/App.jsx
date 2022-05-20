import React from 'react';
import { Routes, Route } from 'react-router-dom';
import List from './pages/ListTask';
import NewTask from './pages/newTask';
import Details from './pages/details';

function App() {
  return (
    <Routes>
      <Route path="/" element={<List />} />
      <Route path="/create" element={<NewTask />} />
      <Route path=":id" element={<Details />} />
    </Routes>
  );
}

export default App;
