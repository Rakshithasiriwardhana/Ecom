import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import "./Nav.css";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../contex/UserContext";

const Nav = ({ handleInputChange, query }) => {
  const { user, logout } = useContext(UserContext);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(user.id !== 1);

  useEffect(() => {
    setIsUserLoggedIn(user.id !== 0);
  }, [user]);

  const handleLogout = () => {
    if (isUserLoggedIn) {
      logout();
      setIsUserLoggedIn(false);
    } else {
      window.location.href = "/login";
    }
  };

  return (
    <nav>
      <div className="nav-container">
        <input
          className="search-input"
          type="text"
          onChange={handleInputChange}
          value={query}
          placeholder="Enter your search shoes."
        />
      </div>
      <div className="profile-container">
        <button>
          <FiHeart className="nav-icons" />
        </button>
        <button>
          <AiOutlineShoppingCart className="nav-icons" />
        </button>
        <button onClick={handleLogout}>
          <AiOutlineUserAdd className="nav-icons" />
        </button>
      </div>
    </nav>
  );
};

export default Nav;
