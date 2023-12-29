import React from "react";
function FavoriteItem({ index }) {
  const getBackgroundColor = () => {
    const colors = ["#2045FF", "#8090FF", "#0000FF"]; 
    return colors[index % colors.length]; 
  };
  return (
    <div  style={{ backgroundColor: getBackgroundColor(), color: "black" }}>
      <p >{`Favorite style ${index + 1}`}</p>
    </div>
  );
}

export default FavoriteItem;


