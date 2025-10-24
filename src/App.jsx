import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./pages/Home";
import Graphic from "./pages/Graphic";
import Contact from "./pages/Contact";
import Project from "./pages/Project";
import Library from "./pages/Library";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from "./pages/Blog";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/graphic" element={<Graphic />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/library" element={<Library />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </BrowserRouter>
  );
}
