import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import GalleryPage from "./pages/GalleryPage";

import "./App.scss";

function App() {
  return (
    <div className="app">
      <Navbar  />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="gallery" element={<GalleryPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
