import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import { Routes, Route, HashRouter } from "react-router-dom";
import Header from "./component/Header";
import Home from "./pages/Home";
import Graphic from "./pages/Graphic";
import Contact from "./pages/Contact";
import Project from "./pages/Project";
import Library from "./pages/Library";
import Blog from "./pages/Blog";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path="graphic" element={<Graphic />} />
          <Route path="contact" element={<Contact />} />
          <Route path="library" element={<Library />} />
          <Route path="project" element={<Project />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
