import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { MainPage } from "./page/MainPage";
import { ErrorPage } from "./page/ErrorPage";
import { PublicLayout } from "./layouts/PublicLayout";
import { ProductsPage } from "./page/ProductsPage";
import { ProductPage } from "./page/ProductPage";





function App() {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/products" element={<ProductsPage/>} />
          <Route path="/products/:id" element={<ProductPage/>} />
          <Route path="/*" element={<ErrorPage />} />
        </Route>  
      </Routes>
    </React.Fragment>
  );
}

export default App;
