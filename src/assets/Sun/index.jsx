import React, { useState } from "react";

function Sun() {
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
          d="M22.6366 8.51821L20.8337 10.3211L19.679 9.16632L21.4823 7.36306L22.6366 8.51821ZM15.0001 20.4C13.5679 20.4 12.1944 19.8311 11.1817 18.8184C10.169 17.8057 9.60008 16.4322 9.60008 15C9.60008 13.5678 10.169 12.1943 11.1817 11.1816C12.1944 10.1689 13.5679 9.59999 15.0001 9.59999C16.4323 9.59999 17.8058 10.1689 18.8185 11.1816C19.8312 12.1943 20.4001 13.5678 20.4001 15C20.4001 16.4322 19.8312 17.8057 18.8185 18.8184C17.8058 19.8311 16.4323 20.4 15.0001 20.4ZM15.0001 18.7667C15.9991 18.7667 16.9571 18.3698 17.6635 17.6634C18.3699 16.957 18.7667 15.999 18.7667 15C18.7667 14.001 18.3699 13.0429 17.6635 12.3366C16.9571 11.6302 15.9991 11.2333 15.0001 11.2333C14.0011 11.2333 13.043 11.6302 12.3366 12.3366C11.6303 13.0429 11.2334 14.001 11.2334 15C11.2334 15.999 11.6303 16.957 12.3366 17.6634C13.043 18.3698 14.0011 18.7667 15.0001 18.7667ZM14.1834 5.01666H15.8167V7.56666H14.1834V5.01666ZM15.8167 22.4333V24.9833H14.1834V22.4333H15.8167ZM9.1664 10.3211L7.36314 8.51868L8.51833 7.36349L10.3212 9.16632L9.1664 10.3211ZM19.679 20.8337L20.8337 19.6789L22.6366 21.4817L21.4818 22.6365L19.679 20.8337ZM9.16641 19.6789L10.3212 20.8337L8.51833 22.6365L7.36359 21.4817L9.16641 19.6789ZM24.9834 15.8167H22.4334V14.1833H24.9834V15.8167ZM7.56675 14.1833V15.8167H5.01675V14.1833H7.56675Z"
          fill="white"
          stroke="#5F87EF"
          strokeWidth="0.2"
        />
      </svg>
    </div>
  );
}

export default Sun;
