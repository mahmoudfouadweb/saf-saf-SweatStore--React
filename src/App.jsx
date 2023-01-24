import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import GalleryPage from "./pages/GalleryPage";

import "./App.scss";
import Shop from "./pages/Shop";
import MenuPage from "./pages/MenuPage";
import BlogPage from "./pages/BlogPage";
import ItemPage from "./pages/ItemPage";

function App() {
  return (
    <div className="app">
      <div className="container">
      <Navbar  />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="gallery" element={<GalleryPage />} />
        <Route path="shop" element={<Shop />} />
        <Route path="menu" element={<MenuPage />} />
        <Route path="item" element={<ItemPage />} />
        <Route path="blog" element={<BlogPage />} />
      </Routes>
      <Footer />
      </div>
    </div>
  );
}

export default App;
