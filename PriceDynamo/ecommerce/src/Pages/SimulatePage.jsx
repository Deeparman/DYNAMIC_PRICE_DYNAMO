import React, { useState, useContext } from "react";
import { ProductContext } from "../Context/ProductContext";
import { useNavigate } from "react-router-dom";
import productsData from "../Data/product";
import AdminNav from "../Components/AdminNav";
import Footer from "../Components/Footer";
import "./SimulatePage.css";

const SimulatePage = () => {
  const { products, updateProductPrice } = useContext(ProductContext);

  const [category, setCategory] = useState("");
  const [productName, setProductName] = useState("");
  const [myPrice, setMyPrice] = useState("");
  const [competitorPrice, setCompetitorPrice] = useState("");
  const [inventory, setInventory] = useState("");

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setProductName("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!category) return alert("Please select a category");
    if (!productName) return alert("Please select a product");

    const selectedProduct = products[category]?.find(
      (p) => p.name === productName
    );

    if (!selectedProduct) return alert("Product not found!");

    let updatedPrice = Number(myPrice);

    if (competitorPrice) {
      const my = Number(myPrice);
      const comp = Number(competitorPrice);
      const inv = Number(inventory);

      let inventoryAdjustment = 0;
      if (inv < 20) {
        inventoryAdjustment = -0.05 * my;
      } else if (inv > 100) {
        inventoryAdjustment = 0.05 * my;
      }

      updatedPrice = my + (comp - my) * 0.3 - inventoryAdjustment;
    }

    updateProductPrice(category, productName, updatedPrice);
    alert(`✅ Updated ${productName} to ₹${updatedPrice.toFixed(2)}!`);
  };

  return (
    <>
      <AdminNav />
      <div className="simulation-page">
        <h2>🧮 Dynamic Pricing Simulation</h2>
        <form className="simulation-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Category</label>
            <select value={category} onChange={handleCategoryChange}>
              <option value="">Select Category</option>
              {Object.keys(products).map((cat) => (
                <option key={cat} value={cat}>
                  {cat.replace("-", " ").toUpperCase()}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Product</label>
            <select
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              disabled={!category}
            >
              <option value="">Select Product</option>
              {category &&
                products[category]?.map((p) => (
                  <option key={p.id} value={p.name}>
                    {p.name}
                  </option>
                ))}
            </select>
          </div>

          <div className="form-group">
            <label>Your Price (₹)</label>
            <input
              type="number"
              value={myPrice}
              onChange={(e) => setMyPrice(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Competitor Price (₹)</label>
            <input
              type="number"
              value={competitorPrice}
              onChange={(e) => setCompetitorPrice(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Inventory Count</label>
            <input
              type="number"
              value={inventory}
              onChange={(e) => setInventory(e.target.value)}
            />
          </div>

          <button type="submit" className="update-btn">
            Update Price
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default SimulatePage;
