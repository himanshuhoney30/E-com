import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import AOS from "aos";
import "aos/dist/aos.css";
import TopProducts from "./components/TopProducts/TopProducts";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CartPage from "./components/Cartpage/CartPage";

const App = () => {

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<><Hero  /> <Products /> <TopProducts /> <Banner /></> } />
        <Route path="/Cart" element={<CartPage />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
