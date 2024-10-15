import React from "react";
import NavBar from "./components/navbar/Navbar";
import "react-toastify/dist/ReactToastify.css";
import { Body } from "./components/body/Body";
import { Route, Routes, useLocation } from "react-router-dom";
import { First } from "./components/categories/first";
import { Product } from "./components/product/Product";
import "./App.css";
import Login from "./components/login/Login";
import { Footer } from "./components/footer/Footer";
import AboutUs from "./components/about-us/About";
import PrivacyPolicy from "./components/privacy-policy/PrivacyPolicy";
import TermsAndConditions from "./components/terms&conditions/Terms&Condition";
import ContactUs from "./components/contact-us/Contact";
import Review from "./components/review/Review";
import ScrollToTop from "./components/generic-component/scroll/Scroll";
import TermsOfUse from "./components/terms-and-use/TermsAndUse";
import RefundPolicy from "./components/refund-policy/RefundPolicy";
import FAQ from "./components/faq/Faq";
import ShippingPolicy from "./components/shipping-policy/ShippingPolicy";
import Help from "./components/help/Help";
import Cart from "./components/cart/Cart";
import { NavNotification } from "./components/generic-component/nav-notification/NavNotification";
import AddCategory from "./components/admin/add-category/AddCategory";
import Admin from "./components/admin/Admin";

// import Cart from "./components/cart/Cart";
// import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  const location = useLocation(); // Get the current location

  // Check if the current path is one of the admin paths
  const isAdminPage = location.pathname.startsWith("/admin");
  return (
    <div className="App">
      <ScrollToTop />
      {!isAdminPage && <NavNotification />}
      {!isAdminPage && <NavBar />}
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
        <Route path="/terms-of-use" element={<TermsOfUse />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/client-testimonials" element={<Review />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/shipping-policy" element={<ShippingPolicy />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/help" element={<Help />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      {!isAdminPage && <Footer />}
      <Routes>
        <Route path="/admin" element={<Admin />} />
        {/* <Route path="/admin/category" element={<AddCategory />} /> */}
      </Routes>
    </div>
  );
}

export default App;
