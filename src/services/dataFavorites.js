import axios from "axios";

const API_URL = "http://localhost:3000";

export const dataFavorites = async (userId, selectedStyle, file, color) => {
  try {
    const response = await axios.post(
      `${API_URL}/favorites/addFav`,
      {user_id: userId, styles: selectedStyle, file: file.name, color: color,}
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getUserFavorites = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}/favorites/${userId}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const verifyFavorite = async (userId, selectedStyle, file, color) => {
  try {
    
    const response = await axios.get(`${API_URL}/favorites/verifyFavorite`, {
      params: {
        user_id: userId,
        styles: selectedStyle,
        file: file.name,
        color: color
      }
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};