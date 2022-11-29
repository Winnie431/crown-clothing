import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/homepage/shop/shop.component"

function App() {
  return (
    <div className="App">
      <Routes>
        
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/shop" element={<ShopPage />} />
        
      </Routes>
    </div>
  );
}

export default App;
