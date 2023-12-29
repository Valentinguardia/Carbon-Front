import axios from "axios";

const API_URL = "http://localhost:3000"

export const dataLogout = async () => {
  try {
    const response = await axios.post(
      `${API_URL}/users/logout`,
      {},
      { withCredentials: true }
    );
    localStorage.removeItem("token");
    window.location.reload(true);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

