import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate(`/main`)}>Main</button>
      <button onClick={() => navigate(`/favorites`)}>Favorites</button>
    </div>
  );
};

export default Header;
