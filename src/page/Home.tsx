import React from "react";
import Hero from "../components/Hero";
import Projects from "../components/Projects";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f5f2ed]">
      <div className="container mx-auto px-4 py-8">
        <Hero />
        <Projects />
      </div>
    </div>
  );
};

export default Home;
