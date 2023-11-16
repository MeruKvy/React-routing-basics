import React from "react";
import { useParams } from "react-router-dom";


export function ProductPage() {
  const { id } = useParams();
  const getChosenProduct = () => {
    axios.get(``)
  }
  return <div>produktis aidia { id }</div>;
}