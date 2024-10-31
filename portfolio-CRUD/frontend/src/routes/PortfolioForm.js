// src/routes/PortfolioForm.js
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../services/api';

const PortfolioForm = ({ isEdit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [siteLink, setSiteLink] = useState('');
  const [image, setImage] = useState(null);
  const [hidden, setHidden] = useState(false); // Added hidden state
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (isEdit && id) {
      fetchPortfolio(id);
    }
  }, [isEdit, id]);

  const fetchPortfolio = async (id) => {
    try {
      const response = await api.get(`/${id}`);
      const { title, description, siteLink, hidden } = response.data;
      setTitle(title || '');
      setDescription(description || '');
      setSiteLink(siteLink || '');
      setHidden(hidden || false); // Fetch hidden status
    } catch (error) {
      console.error("Error fetching portfolio", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('siteLink', siteLink);
    formData.append('hidden', hidden); // Append hidden status
    if (image) formData.append('image', image);

    try {
      const url = isEdit ? `/${id}` : '/';
      const method = isEdit ? 'PUT' : 'POST';
      const response = await fetch(`http://localhost:3001/portfolios${url}`, {
        method,
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Server error:", errorData);
        throw new Error(`Failed to submit: ${errorData.message || 'Unknown error'}`);
      }

      alert(isEdit ? 'Portfolio updated successfully!' : 'Portfolio created successfully!');
      navigate('/');
    } catch (error) {
      console.error("Error:", error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Title: <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} /></label>
      <label>Description: <textarea value={description} onChange={(e) => setDescription(e.target.value)} /></label>
      <label>Site Link: <input type="text" value={siteLink} onChange={(e) => setSiteLink(e.target.value)} /></label>
      <label>Image: <input type="file" onChange={(e) => setImage(e.target.files[0])} /></label>
      <label>
        Hidden: 
        <input type="checkbox" checked={hidden} onChange={(e) => setHidden(e.target.checked)} />
      </label>
      <button type="submit">{isEdit ? 'Update' : 'Create'} Portfolio</button>
    </form>
  );
};

export default PortfolioForm;
