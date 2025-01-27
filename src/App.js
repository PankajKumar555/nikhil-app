import React from "react";
import NavBar from "./components/navbar/Navbar";
import { Body } from "./components/body/Body";
import { Route, Routes, useLocation } from "react-router-dom";
import { GenericProductPage } from "./components/categories/GenericProductPage";
import { Product } from "./components/product/Product";
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
import Admin from "./components/admin/Admin";
import ProfilePage from "./components/generic-component/profile/Profile";
import ThankYouPage from "./components/cart/ThankYou";
import ProtectedRoute from "./components/generic-component/404/protectedRoute";
import NotFoundPage from "./components/generic-component/404/404";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { Box } from "@mui/material";

function App() {
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = React.useState("");
  const isAdminPage = location.pathname.startsWith("/admin");
  const is404Page = location.pathname === "/404";
  const [reloadIsLoggedIn, setReloadIsLoggedIn] = React.useState(false);

  React.useEffect(() => {
    const isLoggedIn = localStorage.getItem("isAlreadyLogin");
    setIsLoggedIn(isLoggedIn);
    setReloadIsLoggedIn(false);
  }, [reloadIsLoggedIn]);

  return (
    <div className="App">
      <ScrollToTop />
      <Box
        sx={{
          position: "sticky",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: "1000",
        }}
      >
        {!isAdminPage && !is404Page && <NavNotification />}
        {!isAdminPage && !is404Page && (
          <NavBar setReloadIsLoggedIn={setReloadIsLoggedIn} />
        )}
      </Box>
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/categories/:slug" element={<GenericProductPage />} />
        <Route path="/identifier/:slug" element={<GenericProductPage />} />
        <Route path="/categories/:slug/products/:slug" element={<Product />} />
        <Route path="/all-products" element={<GenericProductPage />} />
        <Route
          path="/products/productName/:slug"
          element={<GenericProductPage />}
        />
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
        <Route
          path="/profile"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <ProfilePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Admin />
            </ProtectedRoute>
          }
        />
        <Route path="/thank-you" element={<ThankYouPage />} />
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      {!isAdminPage && !is404Page && <Footer />}
    </div>
  );
}

export default App;
