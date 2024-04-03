import React, { useContext } from "react";
import { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Products from "../Products/Products";
import Card from "../components/Card";
import data from "../db/data";
import Recommended from "../Recommended/Recommended/Recommended";
import { UserContext } from "../contex/UserContext";


function ProductPage() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const { user } = useContext(UserContext);
  let isShow = user.role === "admin" ? false : true;


  const [query, setQuery] = useState("");
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = data.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    if (query) {
      filteredProducts = filteredItems;
    }

    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
          isShow={isShow}
        />
      )
    );
  }

  const result = filteredData(data, selectedCategory, query);
  return (
    <>
    <div  style={{ display: isShow ? "flex" : "none" }}>
      <Sidebar handleChange={handleChange} />
      
      {/* <Navigation query={query} handleInputChange={handleInputChange} isShow={false} /> */}
      <Recommended handleClick={handleClick} display={isShow}/>
      </div>
      <Products result={result} />
    </>
  );
}



export default ProductPage

