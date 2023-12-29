import axios from "axios";

const API_URL = "http://localhost:3000"

export const checkAuth = async () => {
  try {
    const response = await axios.get(`${API_URL}/users/me`, {
      withCredentials: true,
    });
    const userData = response.data
    return userData;
  } catch (error) {
    console.error("Error al verificar la autenticación:", error);
  }
};

export const dataLogin = async (email, password) => {
  try {  
    const response = await axios.post(
      `${API_URL}/users/login`,
      { email, password },
      { withCredentials: true }
    );
    const token = response.data && response.data.token;
    if (token) window.localStorage.setItem("token", token);
    return response.data.payload
  } catch (error) { 
    throw error;
  }
};