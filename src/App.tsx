import React from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f5f2ed]">
      <div className="container mx-auto px-4 py-8">
        <Navigation />
        <Hero />
        <Projects />
      </div>
    </div>
  );
};

export default App;
