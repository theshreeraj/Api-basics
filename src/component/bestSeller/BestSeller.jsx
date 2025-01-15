import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "../productCard/ProductCard";

const BestSeller = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://api.escuelajs.co/api/v1/products"
        );
        console.log(response);
        setProducts(response.data);
      } catch (err) {
        setError("Failed to get the product");
      } finally {
        console.log("api call done");
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Bestsellers</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "0.5rem",
        }}
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.images[0]}
            title={product.title}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
