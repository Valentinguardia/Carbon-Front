import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { dataLogout } from "../../services/dataLogout";
import "./style.module.scss";

function ProfileDropdown() {
  const userId = useSelector((state) => state.user.id);
  const navigate = useNavigate();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleChange = async (selectedOption) => {
    setDropdownOpen(false);
    switch (selectedOption) {
      case "Logout":
        try {
          await dataLogout();
        } catch (error) {
          console.error("Error durante el logout:", error);
        }
        break;
      case "Favorites":
        navigate("/favorites");
        break;
        case "Login":
          navigate("/login");
      default:
        break;
    }
  };

  return (
    <div>
      <select
        className="btn-secondary"
        onChange={(e) => handleChange(e.target.value)}
        value="Profile"
      >
        <option value="Profile" disabled hidden>
          Profile
        </option>
       { userId && <option value="Logout">Logout</option>}
        {userId && <option value="Favorites">Favorites</option>}
        {!userId && <option value="Login">Login</option>}
      </select>
    </div>
  );
}

export default ProfileDropdown;
