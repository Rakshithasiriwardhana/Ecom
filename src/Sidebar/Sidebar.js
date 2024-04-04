import { Search } from "../components/Search";
import Category from "./Category/Category";
import Price from "./Price/Price";
import "./Sidebar.css";

const Sidebar = ({ handleChange }) => {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <br></br>
          <br></br>
          {/* <h1>🛒</h1> */}
          <h1>Ecom</h1>
        </div>

        <br></br>

        <Search />
        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
      </section>
    </>
  );
};

export default Sidebar;
