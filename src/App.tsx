import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./page/Home";
import AboutPage from "./page/About";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f5f2ed]">
      <Router basename="https://www.rixu.info">
        <div className="container mx-auto px-4 py-8">
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
