import React from "react";

const Navigation: React.FC = () => {
  return (
    <nav className="flex justify-between items-center mb-20">
      <div className="w-12 h-12 relative">
        <a
          href="/"
          className="text-sky-400 hover:text-sky-600 transition-colors"
        >
          <img
            src="/src/assets/icon.png"
            alt="Logo"
            width={48}
            height={48}
            className="rounded-full"
            style={{ width: "48px", height: "48px" }}
          />
        </a>
      </div>
      <ul className="flex space-x-8">
        <li>
          <a
            href="/#projects"
            className="text-sky-400 hover:text-sky-600 transition-colors"
          >
            WORKS
          </a>
        </li>
        <li>
          <a
            href="/about"
            className="text-sky-400 hover:text-sky-600 transition-colors"
          >
            ABOUT
          </a>
        </li>
        {/* <li>
          <a
            href="#contact"
            className="text-sky-400 hover:text-sky-600 transition-colors"
          >
            CONTACT
          </a>
        </li> */}
      </ul>
    </nav>
  );
};

export default Navigation;
