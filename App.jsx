import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Pay from './pages/Pay';
import Success from './pages/Success';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/business-formation" element={<Services />} />
      <Route path="/pay" element={<Pay />} />
      <Route path="/success" element={<Success />} />
    </Routes>
  </Router>
);

export default App;