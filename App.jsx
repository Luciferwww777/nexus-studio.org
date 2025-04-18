
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BuildsPage from "./pages/BuildsPage";
import PortfolioPage from "./pages/PortfolioPage";
import ContactPage from "./pages/ContactPage";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white font-sans">
        <header className="flex justify-between items-center p-4 bg-[#0a0f1a] shadow-md border-b border-blue-800">
          <div className="text-3xl font-bold text-blue-500">Nexus-Studio</div>
          <nav className="flex gap-6 text-blue-300">
            <Link to="/">Главная</Link>
            <Link to="/builds">Сборки</Link>
            <Link to="/portfolio">Портфолио</Link>
            <Link to="/contact">Связь</Link>
          </nav>
          <select className="bg-blue-900 text-white rounded px-2 py-1">
            <option>RU</option>
            <option>UA</option>
            <option>CZ</option>
            <option>ES</option>
            <option>EN</option>
          </select>
        </header>
        <main className="p-6">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/builds" element={<BuildsPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <footer className="bg-[#0a0f1a] p-4 text-center text-sm text-blue-600 border-t border-blue-800">
          © 2025 Nexus-Studio. Все права защищены.
        </footer>
      </div>
    </Router>
  );
}
