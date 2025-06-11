import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      delay: 100,
      offset: 120,
    });
  });

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
