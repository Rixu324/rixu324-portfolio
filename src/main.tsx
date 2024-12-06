import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import React from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SpeedInsights />
    <App />
  </React.StrictMode>
);
