// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import PortfolioList from './routes/PortfolioList';
import PortfolioForm from './routes/PortfolioForm';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Portfolio List</Link>
          <Link to="/create" style={{ marginLeft: '20px' }}>Create New Portfolio</Link>
        </nav>
        <Routes>
          <Route path="/" element={<PortfolioList />} />
          <Route path="/create" element={<PortfolioForm isEdit={false} />} />
          <Route path="/edit/:id" element={<PortfolioForm isEdit={true} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
