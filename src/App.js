import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'; // Adjusted import path for Home component
import Test from './pages/Test'; // Adjusted import path for Test component

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Test" element={<Test />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
