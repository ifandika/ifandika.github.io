import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
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
