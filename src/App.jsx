import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import BestSellers from "./components/BestSellers";
import FlashSale from "./components/FlashSale";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section id="home">
        <Header />
        <Hero />
      </section>
      <Features />
      <BestSellers />
      <FlashSale />
      <Footer />
    </main>
  );
}

export default App;