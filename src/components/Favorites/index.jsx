import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import FavoriteItem from "../../assets/FavoriteItem";
import style from "./style.module.scss";

function Favorites() {
  const favorites = useSelector((state) => state.fav.favorites);
  const navigate = useNavigate();
  const [selectedFavorite, setSelectedFavorite] = useState(null);

  const handleFavoriteClick = (favorite) => {
    setSelectedFavorite(favorite);
  };
  const handleCodeClick = () => {
    navigate("/home");
  };

  return (
    <div className={`${style.dad} ${style.childContainer2}`}>
      <div className={style.child2}>
        <div className={style.textContainer}>
        <button className={`${style.text3} ${style.btn}`} onClick={handleCodeClick}>CODE</button>
          <div className={style.abs}>
          </div>
          <div >
            {favorites.map((favorite, index) => (
              <div key={index} onClick={() => handleFavoriteClick(favorite)}>
                <FavoriteItem favorite={favorite} index={index} />
                {selectedFavorite === favorite && (
                  <div>
                    <p style={{color : "yellow"}}>Style: {favorite.styles}</p>
                    <p style={{color : "yellow"}}>Format: {favorite.file}</p>
                    <p style={{color : "yellow"}}>Color: {favorite.color}</p>
                  </div>
                )}
              </div>
            ))}
          </div>  
        </div>
      </div>
    </div>
  );
}

export default Favorites;

