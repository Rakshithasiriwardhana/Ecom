import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import "./Nav.css";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../contex/UserContext";
// import UserAction from "../components/Login/UserAction";
import LogoutIcon from "@mui/icons-material/Logout";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { TbReportMoney } from "react-icons/tb";
// import Cart from "../pages/Cart/Cart";

const Nav = ({ handleInputChange, query }) => {
  const { user, logout } = useContext(UserContext);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(user.id !== 1);
  let isShow = user.role === "admin" ? false : true;



  // const {navigate } = useContext(UserContext);
  // const [isUserNavigate, setIsNavigate] = useState(user.id !== 1);

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
  // const handleNavigate = () => {
  //   if (isUserNavigate) {
  //     navigate();
  //     setIsNavigate(false);
  //   } else {
  //     window.location.href = "/cart/cart";
  //   }
  // };

  return (
    <nav>
      {/* <div className="nav-container"  style={{display: isShow ? 'flex' : 'none'}}>
        <input
          className="search-input"
          type="text"
          onChange={handleInputChange || null}
          value={query || undefined}
          placeholder="Enter your search shoes"
        />
      </div> */}
      <div className="profile-container mx-3">
        <button hidden={!isShow} onClick={() => window.location.href = "/cart/favorites"}>
          <FiHeart className="nav-icons" />
        </button>
        <button hidden={!isShow} onClick={() => window.location.href = "/cart/orders"} >
          <AiOutlineShoppingCart className="nav-icons"/>
         
        </button>
      
        <button hidden={isShow}  >
          <AiOutlineUserAdd className="nav-icons" onClick={() => window.location.href = "/user/profile"} />
        </button>
        <button>
          <HiOutlineShoppingBag className="nav-icons" onClick={() => window.location.href = "/user"} />
        </button>
        <button hidden={isShow}>
          <TbReportMoney className="nav-icons" onClick={() => window.location.href = "/user/orders"} />
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
