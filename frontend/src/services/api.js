import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export const getServices = () => {
  return apiClient.get('/services');
};

export const getServiceById = (id) => {
  return apiClient.get(`/services/${id}`);
};

export const getTestimonials = () => {
  return apiClient.get('/testimonials');
};