import { useState } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import "./App.scss";
import Footer from "./components/Footer";
import HomeContent from "./components/HomeContent";
import Navbar from "./components/Navbar";
import PageTitle from "./components/PageTitle";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import GalleryPage from "./pages/GalleryPage";

import Home from "./pages/Home";

function App() {
  
  
  const [param, setParam] = useState()
  
  console.log(param);
  return (
    <div className="app">
      <div className="container">
        
        <Navbar setParam={setParam} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="gallery" element={<GalleryPage />} />
        </Routes>
        
        
        
        <Footer />
      </div>
    </div>
  );
}

export default App;
