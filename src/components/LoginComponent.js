import React, { useContext, useState } from "react";
import {
  Button,
  InputAdornment,
  IconButton,
  OutlinedInput,
} from "@mui/material";
import axios from "axios";
import { ResourcePath } from "../contex/ResourcePath";
import { jwtDecode } from "jwt-decode";
import { UserContext } from "../contex/UserContext";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";

const LoginComponent = () => {
  const { setUserContext } = useContext(UserContext);
  const [showPassword, setShowPassword] = useState(false);
  const [loginUser, setLoginUser] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!loginUser.email) {
      setErrors({ ...errors, email: "Email is required" });
      return;
    }
    if (!loginUser.password) {
      setErrors({ ...errors, password: "Password is required" });
      return;
    }

    axios
      .post(ResourcePath.API + ResourcePath.AUTH, loginUser)
      .then((res) => {
        const user = jwtDecode(res.data.token);
        setUserContext(user);
        window.location.href = ResourcePath.HOME;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (e) => {
    setLoginUser({
      ...loginUser,
      [e.target.name]: e.target.value,
    });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="project-form">
      <div className="form-group">
        <OutlinedInput
          type="email"
          name="email"
          value={loginUser.email}
          onChange={handleChange}
          placeholder="Email"
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>
      <div className="form-group">
        <OutlinedInput
          type={showPassword ? "text" : "password"}
          name="password"
          value={loginUser.password}
          onChange={handleChange}
          placeholder="Password"
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={togglePasswordVisibility}
                edge="end"
              >
                {showPassword ? (
                  <VisibilityOffOutlinedIcon />
                ) : (
                  <RemoveRedEyeOutlinedIcon />
                )}
              </IconButton>
            </InputAdornment>
          }
        />
        {errors.password && <span className="error">{errors.password}</span>}
      </div>
      <div className="form-group">
        <Button variant="contained" type="submit" className="submit">
          Login
        </Button>
      </div>
    </form>
  );
};

export default LoginComponent;
