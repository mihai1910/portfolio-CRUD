// src/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001/portfolios',
});

export const getPortfolio = async (id) => {
  const response = await api.get(`/${id}`);
  return response.data;
};

export const updatePortfolio = async (id, portfolioData) => {
  const formData = new FormData();
  formData.append('title', portfolioData.title);
  formData.append('description', portfolioData.description);
  formData.append('clientLink', portfolioData.clientLink);
  if (portfolioData.image_path) {
    formData.append('image', portfolioData.image_path);
  }

  const response = await api.put(`/${id}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};

export default api;