import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { setUser } from "./hooks/user";
import { checkAuth } from "./services/dataLogin";
import { getUserFavorites } from "./services/dataFavorites";
import { setFav } from "./hooks/favorites";
import OnBoard from "./components/OnBoard";
import SingUp from "./components/SingUp";
import Login from "./components/Login";
import Home from "./components/Home";
import Favorites from "./components/Favorites";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = window.localStorage.getItem("token");
        if (token) {
          const userData = await checkAuth(token);
          dispatch(setUser(userData));        
        }
      } catch (error) {
        console.error("Error al obtener datos de usuario:", error);
      }
    };
    fetchData();
  }, [dispatch]);

  useEffect(() => {
    const fetchUserFavoritesData = async () => {
      try {
        const userId = user.id;
        const favoritesData = await getUserFavorites(userId);
        dispatch(setFav(favoritesData));
      } catch (error) {
        console.error("Error al obtener favoritos del usuario:", error);
      }
    };
    if (user.id !== null) fetchUserFavoritesData();
  }, [user.id, dispatch]);
  
  return (
    <Router>
    <Routes>
      {user.id ? (
        <>
          <Route path="/home" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </>
      ) : (
        <>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<OnBoard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SingUp />} />
        </>
      )}
    </Routes>
  </Router>
  );
}

export default App;
