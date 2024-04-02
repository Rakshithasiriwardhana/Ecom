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
function App() {
  const { user } = useContext(UserContext);

  const getHomeElement = () => {
    switch (user.role) {
      case "admin":
        return <AdminDashBoard />;
      case "user":
        return <ProductPage />;
      default:
        return <LoginPage />;
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path={ResourcePath.HOME} element={getHomeElement()} />
        <Route path={ResourcePath.LOGIN} element={<LoginPage />} />
        <Route path={ResourcePath.CART} element={<ProductPage />} />
        <Route path={ResourcePath.ORDERS} element={<CartPage />} />
        <Route path={ResourcePath.FAVORITES} element={<FavoritesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
