
import "./App.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import BestSellers from "./components/BestSellers";
import Recommended from "./components/Recommended";
import FlashSale from "./components/FlashSale";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="page">
      <section className="hero-section" id="home">
        <Header />
        <Hero />
      </section>

      <Features />
      <BestSellers />
      <Recommended />
      <FlashSale />
      <Footer />
    </main>
  );
}

export default App;
