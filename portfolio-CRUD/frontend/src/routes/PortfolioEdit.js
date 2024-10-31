import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getPortfolio, updatePortfolio } from '../services/api';

function EditPortfolio() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [portfolio, setPortfolio] = useState({ title: '', description: '', image: '', clientLink: '' });

  useEffect(() => {
    async function fetchPortfolio() {
      const portfolioData = await getPortfolio(id);
      setPortfolio(portfolioData);
    }
    fetchPortfolio();
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setPortfolio({ ...portfolio, [name]: files[0] });
    } else {
      setPortfolio({ ...portfolio, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updatePortfolio(id, portfolio);
    navigate('/');
  };

  return (
    <div>
      <h1>Edit Portfolio</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" name="title" value={portfolio.title} onChange={handleChange} />
        </label>
        <label>
          Description:
          <textarea name="description" value={portfolio.description} onChange={handleChange}></textarea>
        </label>
        <label>
          Image:
          <input type="file" name="image" onChange={handleChange} />
        </label>
        <label>
          Client Link:
          <input type="text" name="clientLink" value={portfolio.clientLink} onChange={handleChange} />
        </label>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}

export default EditPortfolio;
