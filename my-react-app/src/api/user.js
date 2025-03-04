import { API_BASE_URL } from "../api/apiConfig";
export const fetchUserProfile = async (token) => {
    try {
      const response = await fetch(`${API_BASE_URL}/user/profile`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, 
        },
      });
  
      if (response.ok) {
        const data = await response.json();
        return data.body;
      } else {
        throw new Error('Erreur lors de la récupération des informations de l\'utilisateur');
      }
    } catch (error) {
      console.error('Erreur lors de la récupération des données de l\'utilisateur:', error);
      return null; 
    }
  };
  
 