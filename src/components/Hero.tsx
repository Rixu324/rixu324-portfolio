import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-[80vh] flex flex-col items-center justify-center">
      {/* 背景のイラスト */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
        {/* <Image
          src="/placeholder.svg?height=600&width=600"
          alt="Background Illustration"
          width={600}
          height={600}
          className="w-auto h-auto"
        /> */}
      </div>

      {/* メインコンテンツ */}
      <div className="relative z-10 text-center">
        <h1 className="text-5xl font-bold mb-6 tracking-wider">あなたの名前</h1>
        <p className="text-sm tracking-[0.5em] uppercase">
          IT IS A FREELANCE DEVELOPER&apos;S PORTFOLIO SITE.
        </p>
      </div>
    </div>
  );
};

export default Hero;
