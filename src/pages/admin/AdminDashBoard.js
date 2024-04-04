import React from "react";
import PieActiveArc from "../../components/widgets/BarChart";
import ArcDesign from "../../components/widgets/Gauge";
// import SwitchSeriesType from "../../components/widgets/BarChart";
import MarkOptimization from "../../components/widgets/LineChart";
import AdminProduct from "./AdminProduct";


const AdminDashBoard = ({handleInputChange, query, isShow, result} ) => {
  return (
    <div>
    
      <h1>Admin Dashboard</h1>
      <div style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "50vh",
        backgroundColor: "#f5f5f5",
      }}
    >
      <PieActiveArc />
      <ArcDesign />
      <MarkOptimization />
      {/* <SwitchSeriesType /> */}

      </div>

      <div className="flex">
          <AdminProduct />
              
      </div>
    </div>
  );
};

export default AdminDashBoard;
