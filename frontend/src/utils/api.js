// src/api.js
export const fetchProperties = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/properties');  // URL de l'API
      if (!response.ok) {
        throw new Error('Failed to fetch properties');
      }
      const data = await response.json();  // Réponse sous forme de JSON
      return data;
    } catch (error) {
      console.error('Error fetching properties:', error);
      return [];
    }
  };
  