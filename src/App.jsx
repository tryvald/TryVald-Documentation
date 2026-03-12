import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Changelog from "./pages/Changelog.jsx";
import Terms from "./pages/Terms.jsx";
import Privacy from "./pages/Privacy.jsx";
import NotFound from "./pages/NotFound.jsx";
import Navbar from "./components/Navbar.jsx";
import { Analytics } from "@vercel/analytics/react"; 

export default function App() {
  return (
    <BrowserRouter>
      {/* Accessibility: skip link */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 bg-[#ffdb89] text-[#030303] px-3 py-2 rounded shadow"
      >
        Skip to content
      </a>

      <Navbar />

      <main id="main" className="pt-20 min-h-screen bg-[#1c4332] text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/changelog" element={<Changelog />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Analytics /> {/* Add Analytics here, properly closed */}
    </BrowserRouter>
  );
}