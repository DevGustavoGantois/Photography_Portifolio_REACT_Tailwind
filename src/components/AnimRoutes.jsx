import React from "react";
//import pages
import Home from "../pages/Home";
import About from "../pages/About";
import Portifolio from "../pages/Portifolio";
import Contact from "../pages/Contact";
//import framer motion
import { motion } from "framer-motion";
//import routes route & useLocation hook
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const AnimRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence initial={true} mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portifolio" element={<Portifolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimRoutes;
