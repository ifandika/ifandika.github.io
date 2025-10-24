import React from "react";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/home/Home'
import Graphic from './pages/graphic/Graphic'
import Contact from './pages/contact/Contact'
import Project from './pages/project/Project'
import Library from './pages/library/Library'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Blog from './pages/blog/Blog'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/graphic" element={<Graphic/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/library" element={<Library/>}/>
        <Route path="/project" element={<Project/>}/>
      </Routes>
    </BrowserRouter>
  );
}