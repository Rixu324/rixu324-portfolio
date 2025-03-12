import React from "react";
import main from "../assets/umai.png";

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-[80vh] flex flex-col items-center justify-center">
      {/* 背景のイラスト */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
        <img
          src={main}
          alt="Background Illustration"
          width={600}
          height={600}
          className="w-auto h-auto"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </div>

      {/* メインコンテンツ */}
      <div className="relative z-10 text-center">
        <h1 className="text-5xl font-bold mb-6 tracking-wider">
          Rixu's PortFolio
        </h1>
        <p className="text-sm tracking-[0.5em] uppercase">
          kore jituha nihongo yanen.
        </p>
      </div>
    </div>
  );
};

export default Hero;
