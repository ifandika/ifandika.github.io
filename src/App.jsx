import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./pages/Home";
import Graphic from "./pages/Graphic";
import Contact from "./pages/Contact";
import Project from "./pages/Project";
import Library from "./pages/Library";
import Blog from "./pages/Blog";
import Header from "./component/Header";
import { Link, Outlet } from "react-router-dom";

export default function App() {
  return (
    <>
      <Header/>
      <main>
        <Outlet />
      </main>
    </>
  );
}
