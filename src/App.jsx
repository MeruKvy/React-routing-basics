import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { MainPage } from "./page/MainPage";
import { AboutPage } from "./page/AboutPage";
import { ContactPage } from "./page/ContactPage";
import { NewsPage } from "./page/NewsPage";
import { ErrorPage } from "./page/ErrorPage";
import { PublicLayout } from "./layouts/PublicLayout";
import { ProductPage } from "./page/ProductPage/ProductPage";





function App() {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </React.Fragment>
  );
}

export default App;
