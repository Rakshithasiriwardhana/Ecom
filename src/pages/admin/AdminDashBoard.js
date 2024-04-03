import React from "react";
import Products from "../../Products/Products";
import ProductPage from "../ProductPage";


const AdminDashBoard = ({handleInputChange, query, isShow, result} ) => {
  return (
    <div>
    
      <h1>Admin Dashboard</h1>
      <div className="flex">
        {/* <Products /> */}
        <ProductPage />

        
      </div>
    </div>
  );
};

export default AdminDashBoard;
