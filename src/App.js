import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./Pages/Contact";
import Header from "./components/Header";
import Skills from "./Pages/Projects";
import Projects from "./Pages/Projects";
import AboutMe from "./Pages/AboutMe";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about-me" element={<AboutMe />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
