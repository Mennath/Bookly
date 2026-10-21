
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Hero from "./components/Hero";
import Features from "./components/Features";
import BestSellers from "./components/BestSellers";
import FlashSale from "./components/FlashSale";
import About from "./components/About";

function Home() {
  return (
    <>
      <Hero />
      <Features />
      <BestSellers />
      <FlashSale />
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
