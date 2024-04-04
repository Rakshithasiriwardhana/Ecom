// import React, { useState, useEffect } from "react";
// import Carousel from "react-bootstrap/Carousel";
// import SearchBar from "../../components/Search";
// import ProductCard from "./ProductCard";
// import { getRecentProducts } from "./api";

// const LandingPage = () => {
//   const [recentProducts, setRecentProducts] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");

//   useEffect(() => {
//     fetchRecentProducts();
//   }, []);

//   const fetchRecentProducts = async () => {
//     try {
//       const data = await getRecentProducts();
//       setRecentProducts(data);
//     } catch (error) {
//       console.error("Error fetching recent products:", error);
//     }
//   };

//   const handleSearch = (query) => {
//     setSearchQuery(query);
//   };

//   return (
//     <div>
//       <Carousel>
//         {/* Carousel items */}
//         {recentProducts.map((data) => (
//           <Carousel.Item key={data.id}>
//             <img
//               className="d-block w-80"
//               src={data.image}
//               alt={data.name}
//             />
//             <Carousel.Caption>
//               <h3>{data.name}</h3>
//               <p>{data.description}</p>
//             </Carousel.Caption>
//           </Carousel.Item>
//         ))}
//       </Carousel>

//       <SearchBar onSearch={handleSearch} />

//       <div className="product-list">
//         {searchQuery
//           ? recentProducts
//               .filter((data) =>
//                 data.name.toLowerCase().includes(searchQuery.toLowerCase())
//               )
//               .map((data) => (
//                 <ProductCard key={data.id} data={data} />
//               ))
//           : recentProducts.map((data) => (
//               <ProductCard key={data.id} data={data} />
//             ))}
//       </div>
//     </div>
//   );
// };

// export default LandingPage;
