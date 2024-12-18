import React, { useEffect, useState } from "react";
import NavBar from "./components/navbar/Navbar";
import "react-toastify/dist/ReactToastify.css";
import { Body } from "./components/body/Body";
import { Route, Routes, useLocation, useParams } from "react-router-dom";
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
import ViewCategories from "./components/admin/view-category/ViewCategories";
import ViewProducts from "./components/admin/view-products/ViewProducts";
import AllOrders from "./components/admin/pending-order/AllOrders";
import { fetchData } from "./api/apiMethod";
import { Identifier } from "./components/categories/Identifier";
import ProfilePage from "./components/generic-component/profile/Profile";
import ThankYouPage from "./components/cart/ThankYou";

// import Cart from "./components/cart/Cart";
// import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  const location = useLocation(); // Get the current location

  // Check if the current path is one of the admin paths
  const isAdminPage = location.pathname.startsWith("/admin");

  // Fetch data based on the slug when the component mounts

  return (
    <div className="App">
      <ScrollToTop />
      {!isAdminPage && <NavNotification />}
      {!isAdminPage && <NavBar />}
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/categories/:slug" element={<First />} />
        <Route path="/identifier/:slug" element={<Identifier />} />
        <Route path="/categories/:slug/products/:slug" element={<Product />} />
        <Route path="/all-products" element={<First />} />
        <Route path="/products/productName/:slug" element={<First />} />
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
        <Route path="/admin" element={<Admin />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
      </Routes>
      {!isAdminPage && <Footer />}
    </div>
  );
}

export default App;
