import React, { createContext, useState, useEffect } from "react";
import productsData from "../Data/product";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(productsData);

  useEffect(() => {
    const storedData = localStorage.getItem("productsData");

    if (storedData) {
      try {
        const parsed = JSON.parse(storedData);

        // Check if stored data matches current data structure (basic safety check)
        const currentCategories = Object.keys(productsData);
        const storedCategories = Object.keys(parsed);

        const isSameStructure =
          JSON.stringify(currentCategories.sort()) ===
          JSON.stringify(storedCategories.sort());

        if (isSameStructure) {
          setProducts(parsed); // load from storage only if structure matches
        } else {
          // otherwise reset to the latest products file
          localStorage.setItem("productsData", JSON.stringify(productsData));
        }
      } catch (error) {
        console.error("Error reading localStorage, resetting data", error);
        localStorage.setItem("productsData", JSON.stringify(productsData));
      }
    } else {
      localStorage.setItem("productsData", JSON.stringify(productsData));
    }
  }, []);

  // update product price everywhere
  const updateProductPrice = (category, productName, newPrice) => {
    setProducts((prevProducts) => {
      const updatedCategory = prevProducts[category].map((item) => {
        if (item.name === productName) {
          const oldPrice = item.price;
          const oldProfit = oldPrice * 0.25;
          const newProfit = newPrice * 0.25;
          const change = (((newProfit - oldProfit) / oldProfit) * 100).toFixed(
            2
          );

          // Store history in localStorage
          const history =
            JSON.parse(localStorage.getItem("profitHistory")) || [];
          history.push({ product: item.name, oldProfit, newProfit, change });
          localStorage.setItem("profitHistory", JSON.stringify(history));

          return { ...item, price: newPrice };
        }
        return item;
      });

      const updated = { ...prevProducts, [category]: updatedCategory };
      localStorage.setItem("productsData", JSON.stringify(updated));
      return updated;
    });
  };
  return (
    <ProductContext.Provider value={{ products, updateProductPrice }}>
      {children}
    </ProductContext.Provider>
  );
};
