import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

const PortfolioList = () => {
  const [portfolios, setPortfolios] = useState([]);
  const [view, setView] = useState('grid'); // New state for view type
  const [searchTerm, setSearchTerm] = useState(''); // New state for search term
  const navigate = useNavigate();

  useEffect(() => {
    fetchPortfolios();
  }, []);

  const fetchPortfolios = async () => {
    try {
      const response = await api.get('/');
      setPortfolios(response.data);
    } catch (error) {
      console.error("Error fetching portfolios", error);
    }
  };

  const deletePortfolio = async (id) => {
    try {
      await api.delete(`/${id}`);
      fetchPortfolios();
    } catch (error) {
      console.error("Error deleting portfolio", error);
    }
  };

  const filteredPortfolios = portfolios.filter(portfolio => 
    portfolio.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Portfolio List</h1>
      <input 
        type="text" 
        placeholder="Search by title" 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={() => navigate(`/create`)}>Create a new portfolio</button>
      <button onClick={() => setView(view === 'grid' ? 'list' : 'grid')}>
        Switch to {view === 'grid' ? 'List' : 'Grid'} View
      </button>
      
      {view === 'grid' ? (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {filteredPortfolios.map((portfolio) => (
            <div key={portfolio.id} style={{ margin: '10px', border: '1px solid #ccc', padding: '10px', width: '200px' }}>
              <h3>{portfolio.title}</h3>
              <img src={`http://localhost:3000/${portfolio.image_path.replace(/\\/g, '/')}`} alt={portfolio.title} width="100" />
              <p>{portfolio.description}</p>
              <a href={portfolio.siteLink}>Visit</a>
              <div>
                <button onClick={() => navigate(`/edit/${portfolio.id}`)}>Edit</button>
                <button onClick={() => deletePortfolio(portfolio.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Link</th>
              <th>Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredPortfolios.map((portfolio) => (
              <tr key={portfolio.id}>
                <td>{portfolio.title}</td>
                <td>{portfolio.description}</td>
                <td><a href={portfolio.siteLink}>Visit</a></td>
                <td><img src={`http://localhost:3000/uploads/${portfolio.image_path}`} alt={portfolio.title} width="100" /></td>
                <td>
                  <button onClick={() => navigate(`/edit/${portfolio.id}`)}>Edit</button>
                  <button onClick={() => deletePortfolio(portfolio.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default PortfolioList;
