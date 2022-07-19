import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";

const HatsPage = () => {
  return(
  <div>
    <h1>Hats page</h1>
  </div>
  );
};

function App() {
  return (
    <div className="App">
      <Routes>
        
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/hats" element={<HatsPage />} />
        
      </Routes>
    </div>
  );
}

export default App;
