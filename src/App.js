import React from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";


import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component.jsx";
import Header from "./components/header/header.component.jsx";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/shop" element={<ShopPage />} />
        
      </Routes>
    </div>
  );
}

export default App;
