import { useContext } from "react";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserContext } from "./contex/UserContext";
import AdminDashBoard from "./pages/admin/AdminDashBoard";
import WelcomePage from "./pages/admin/user/WelcomePage";
import { ResourcePath } from "./contex/ResourcePath";
import ProductPage from "./pages/ProductPage";
import LoginPage from "./pages/LoginPage";
import Nav from "./Navigation/Nav";

function App() {
  const { user } = useContext(UserContext);

  const getHomeElement = () => {
    switch (user.role) {
      case "admin":
        return <AdminDashBoard />;
      case "user":
        return <WelcomePage />;
      default:
        return <WelcomePage />;
    }
  };

  return (
    <BrowserRouter>
      <Nav />

      <Routes>
        <Route path={ResourcePath.HOME} element={getHomeElement()} />
        <Route path={ResourcePath.LOGIN} element={<LoginPage />} />
        <Route path={ResourcePath.CART} element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
