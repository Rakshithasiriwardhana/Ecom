import { useContext } from "react";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserContext } from "./contex/UserContext";
import AdminDashBoard from "./pages/admin/AdminDashBoard";
import { ResourcePath } from "./contex/ResourcePath";
import ProductPage from "./pages/ProductPage";
import LoginPage from "./pages/LoginPage";
import { CartPage } from "./pages/Cart/CartPage";
import { FavoritesPage } from "./pages/FavoritesPage";
import AdminUser from "./pages/admin/AdminUser";
import AdminProduct from "./pages/admin/AdminProduct";
import WelcomePage from "./pages/user/WelcomePage";
import Nav from "./Navigation/Nav";
import LandingPage from "./pages/user/LandingPage";
import UserOders from "./pages/customer/UserOders";
function App() {
  const { user } = useContext(UserContext);

  const getHomeElement = () => {
    switch (user.role) {
      case "admin":
        return <AdminDashBoard />;
      case "user":
        return <ProductPage />;
      default:
        return <WelcomePage />;
    }
  };

  return (
    <BrowserRouter>
    <Nav/>
      <Routes>
        <Route path="/" element={getHomeElement() } />
        <Route path={ResourcePath.HOME} element={getHomeElement()} />
        <Route path={ResourcePath.LOGIN} element={<LoginPage />} />
        <Route path={ResourcePath.CART} element={<ProductPage />} />
        <Route path={ResourcePath.ORDERS} element={<CartPage />} />
        <Route path={ResourcePath.FAVORITES} element={<FavoritesPage />}/>
        <Route path={ResourcePath.USER} element={<AdminUser />} />
       
        <Route path={ResourcePath.USER_PROFILE} element={<AdminUser />} />
        <Route path={ResourcePath.USER_ORDERS} element={<UserOders />} />
        <Route path={ResourcePath.USER_DASHBOARD} element={<LandingPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
