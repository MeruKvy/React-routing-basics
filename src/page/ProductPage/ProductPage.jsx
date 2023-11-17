import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState("");

  const getChosenProduct = async (identifier) => {
    const responce = await axios.get(`https://dummyjson.com/products/${identifier}`);
    setProduct(responce.data);
  };

  useEffect(() => {
    getChosenProduct(id);
  }, [id]);

  return (
    <div>
      <div style={{ margin: "34px" }}>
        <img src={product.thumbnail} />
        <h1>{product?.title}</h1>
        <p>{product?.description}</p>
      </div>
    </div>
  );
}
