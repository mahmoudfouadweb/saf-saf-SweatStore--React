import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import "./App.scss";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ItemPage from "./pages/ItemPage";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import GalleryPage from "./pages/GalleryPage";

import { bakePhotos, drinkPhotos, sweetsPhotos } from "./utilities/photos";

function App() {
  return (
    <div className="app">
      <div className="container">
      <Navbar  />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/shop" element={<Shop photos={[...bakePhotos, ...sweetsPhotos, ...drinkPhotos]}/>} />
        <Route path="/item/:id" element={<ItemPage photos={[...bakePhotos, ...sweetsPhotos, ...drinkPhotos]}/>} />
        {/* <Route path="/blog" element={<BlogPage />} /> */}
      </Routes>
      <Footer />
      </div>
    </div>
  );
}

export default App;
