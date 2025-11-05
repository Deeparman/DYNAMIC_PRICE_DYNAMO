import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../Context/ProductContext";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import "./CategoryPage.css";

export default function CategoryPage() {
  const { categoryName } = useParams();
  const { products } = useContext(ProductContext);

  const categoryProducts = products[categoryName] || [];

  return (
    <>
      <Navbar />
      <div className="category-page">
        <h2 className="category-title">
          {categoryName.replace("-", " ").toUpperCase()}
        </h2>
        <div className="product-grid">
          {categoryProducts.map((item) => (
            <div className="product-card" key={item.id}>
              <img src={item.image} alt={item.name} className="product-img" />
              <h3>{item.name}</h3>
              <p>₹{item.price}</p>
              <p>⭐ {item.rating}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
