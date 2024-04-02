import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import "./Nav.css";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../contex/UserContext";
// import UserAction from "../components/Login/UserAction";
import LogoutIcon from "@mui/icons-material/Logout";

const Nav = ({ handleInputChange, query, isShow }) => {
  const { user, logout } = useContext(UserContext);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(user.id !== 1);

  const {navigate } = useContext(UserContext);
  const [isUserNavigate, setIsNavigate] = useState(user.id !== 1);

  useEffect(() => {
    setIsUserLoggedIn(user.id !== 0);
  }, [user]);

  const handleLogout = () => {
    if (isUserLoggedIn) {
      logout();
      setIsUserLoggedIn(false);
    } else {
      window.location.href = "/cart/login";
    }
  };
  const handleNavigate = () => {
    if (isUserNavigate) {
      navigate();
      setIsNavigate(false);
    } else {
      window.location.href = "/cart/cart";
    }
  };

  return (
    <nav>
      <div className="nav-container"  hidden={isShow}>
        <input
          className="search-input"
          type="text"
          onChange={handleInputChange || null}
          value={query || undefined}
          placeholder="Enter your search shoes."
        />
      </div>
      <div className="profile-container">
        <button>
          <FiHeart className="nav-icons" />
        </button>
        <button onClick={handleNavigate}>
          <AiOutlineShoppingCart className="nav-icons" />
        </button>
      
        <button hidden={isShow} >
          <AiOutlineUserAdd className="nav-icons" />
        </button>
        <button onClick={handleLogout}>
          <LogoutIcon className="nav-icons" />
        </button>

        {/* <button onClick={handleLogout}>
          <UserAction className="nav-icons" />
        </button> */}
      </div>
    </nav>
  );
};

export default Nav;
