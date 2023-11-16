import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

export function ProductsPage() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    setLoading(true);
    try {
      const responce = await axios.get("https://dummyjson.com/products/");
      setProducts(responce.data.products);
    } catch (error) {
    } finally {
      setLoading(false);
    }

    if (loading) {
      return <h1>Loading...</h1>;
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      {products.map((product) => {
        return (
          <div>
            <h2>{product.title}</h2>
          </div>
        );
      })}
    </div>
  );
}
