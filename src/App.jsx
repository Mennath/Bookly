import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Books from "./pages/Books";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/books" element={<Books />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
