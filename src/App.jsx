import axios from "axios";
import React, { useEffect, useState } from "react";

const App = () => {
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
      <h1>This is the product list</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "0.5rem",
        }}
      >
        {products.map((product) => (
          <div key={product.id}>
            <div>
              <img style={{ width: "300px" }} src={product.images[0]} alt="" />
            </div>
            <div>
              <p>{product.name}</p>
              <p>{product.title}</p>
              <p>&#8377;{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
