import React, {useContext} from "react";
import "./pages.css";
import { UserContext } from "../contex/UserContext";
import LoginComponent from "../components/LoginComponent";
import RegisterComponent from "../components/RegisterComponent";


const LoginPage = () => {

    const {user} = useContext(UserContext);

    const isUserLoggedIn = () => {
        return user.id !== 0;
    }

    return (
        <div className="login-page container">
            <div className={`login-container ${isUserLoggedIn() ? "hidden-div" : null} `}>
                <div className="login-header">
                    <h1>Login</h1>
                </div>
                <LoginComponent />
            </div>
            <div className="register-container">
                <div className="login-header">
                    <h1>Register</h1>
                </div>
                <RegisterComponent />
            </div>
        </div>
    );
}

export default LoginPage;