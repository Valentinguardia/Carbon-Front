import React, { useState } from "react";

function Download({ handleDownloadImage }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  const handleMouseDown = () => {
    setIsHovered(false);
  };

  return (
    <div
      onClick={handleDownloadImage}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onMouseDown={handleMouseDown}
      style={{
        cursor: "pointer",
        backgroundColor: isHovered ? "#2865ff" : "transparent",
        borderRadius: "10px",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="35"
        height="35"
        viewBox="0 0 30 30"
        fill="none"
      >
        <path
          d="M0.5 10C0.5 4.75329 4.75329 0.5 10 0.5H20C25.2467 0.5 29.5 4.75329 29.5 10V20C29.5 25.2467 25.2467 29.5 20 29.5H10C4.75329 29.5 0.5 25.2467 0.5 20V10Z"
          stroke="white"
        />
        <path
          d="M15.7889 15.996V16.2386L15.9598 16.0665L21.2853 10.7051L22.4013 11.8283L15 19.2792L7.59871 11.8292L8.7147 10.7051L14.0402 16.0647L14.2111 16.2367V15.9942V6.1H15.7889V15.996ZM22.9 21.3105V22.9H7.1V21.3105H22.9Z"
          fill="white"
          stroke="#0047FF"
          strokeWidth="0.2"
        />
      </svg>
    </div>
  );
}

export default Download;
