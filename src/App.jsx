import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Mandai from "./pages/Mandai";
import Products from "./pages/Products";
import Events from "./pages/Events";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Navbar />
      <main className="container my-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/mandai" element={<Mandai />} />
          <Route path="/products" element={<Products />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
