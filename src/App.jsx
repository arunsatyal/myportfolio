import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Qualification from "./components/Qualification";
import Skills from "./components/Skills";
import Works from "./components/Works";
import Myself from "./components/Myself";
import Connect from "./components/Connect";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <input type="checkbox" id="darkMode" />
      <div className="wrapper">
        <label for="darkMode" className="dark-mode-toggler">
          <div className="fa-solid fa-circle-half-stroke fa-xl"></div>
        </label>

        <Navbar />
        <Hero />
        <Qualification />
        <Skills />
        <Works />
        <Myself />
        <Connect />
        <Footer />

        {/* add more compos */}
      </div>
    </>
  );
}

export default App;
