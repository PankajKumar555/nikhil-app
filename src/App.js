import React from "react";
import NavBar from "./components/navbar/Navbar";
import "react-toastify/dist/ReactToastify.css";
import { Body } from "./components/body/Body";
import { Route, Routes } from "react-router-dom";
import { First } from "./components/categories/first";
import { Product } from "./components/product/Product";
import "./App.css";
import Login from "./components/login/Login";
import { Footer } from "./components/footer/Footer";
import AboutUs from "./components/about-us/About";
import PrivacyPolicy from "./components/privacy-policy/PrivacyPolicy";
import TermsAndConditions from "./components/terms&conditions/Terms&Condition";
import ContactUs from "./components/contact-us/Contact";
// import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/login" element={<Login />} />

        <Route path="/categories">
          <Route path="first" element={<First />} />
          <Route path="second" element={<First />} />
          <Route path="three" element={<First />} />
          <Route path="four" element={<First />} />
          <Route path="five" element={<First />} />
          <Route path="six" element={<First />} />
          <Route path="seven" element={<First />} />
          <Route path="eight" element={<First />} />
          <Route path="nine" element={<First />} />
          <Route path="ten" element={<First />} />
          <Route path="eleven" element={<First />} />
          <Route path="tweleve" element={<First />} />
        </Route>
        <Route path="/categories/first/products" element={<Product />} />
        <Route path="/all-collections" element={<First />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-condition" element={<TermsAndConditions />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
