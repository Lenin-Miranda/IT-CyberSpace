import { Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import ComputerRepair from "./pages/ComputerRepair";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import ItServices from "./pages/ItServices";

function App() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      delay: 600,
      offset: 120,
    });
  });

  return (
    <>
      <Header />
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{
            duration: 0.4,
            ease: "easeInOut",
            type: "tween",
          }}
        >
          <Routes location={location}>
            <Route path="/" element={<Main />} />
            <Route path="/computerRepair" element={<ComputerRepair />} />
            <Route path="/itServices" element={<ItServices />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default App;
