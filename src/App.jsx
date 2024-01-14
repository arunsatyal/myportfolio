import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import Qualification from "./components/Qualification";
// import Works from "./components/Works";
// import Myself from "./components/Myself";
// import Connect from "./components/Connect";
import Footer from "./components/Footer";
import Home from "./pages/HomePage";
import SkillsPage from "./pages/SkillsPage";
import PortfolioPage from "./pages/PortfolioPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import "./App.css";

function App() {
  return (
    <>
      <input type="checkbox" id="darkMode" />
      <div className="wrapper">
        <label for="darkMode" className="dark-mode-toggler">
          <div className="fa-solid fa-circle-half-stroke fa-xl"></div>
        </label>

        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/connect" element={<ContactPage />} />
          </Routes>
        </BrowserRouter>
        <Footer />
        {/* <Hero />
        <Qualification />
        <Skills />
        <Works />
        <Myself />
        <Connect /> */}
        {/* add more compos */}
      </div>
    </>
  );
}

export default App;
