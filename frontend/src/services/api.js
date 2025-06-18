const API_URL = 'http://localhost:5000/api';

const handleResponse = async (response) => {
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Something went wrong');
  }
  return response.json();
};

export const getServices = async () => {
  const response = await fetch(`${API_URL}/services`);
  return handleResponse(response);
};

export const getServiceById = async (id) => {
  const response = await fetch(`${API_URL}/services/${id}`);
  return handleResponse(response);
};