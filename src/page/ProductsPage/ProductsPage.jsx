import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";



export function ProductsPage() {

  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts()
  }, [])

  const getProducts = () => {
    const data = await axios.get("https://dummyjson.com/products/ ")
  }

  return <div>ProductsPage</div>;
}