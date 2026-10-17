import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PropertyDetailPage from './pages/PropertyDetailPage';
import PropertyListPage from './pages/PropertyListPage';
import PropertyMapPage from './pages/PropertyMapPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/property/:id" element={<PropertyDetailPage />} />
          <Route path="/properties" element={<PropertyListPage />} />
          <Route path="/map" element={<PropertyMapPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;