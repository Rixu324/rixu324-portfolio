import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Portfolio from "./portfolio/Portfolio";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/about" element={<Navigate to="/#about" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
