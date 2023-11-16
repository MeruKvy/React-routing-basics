import React from "react";
import { useParams } from "react-router-dom";


export function ProductPage() {
  const { id } = useParams();
  
  return <div>produktis aidia { id }</div>;
}