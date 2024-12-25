import React from "react";
import { useNavigate } from "react-router";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "./Footer.css";
import { Divider } from "@mui/material";

export const Footer = () => {
  const navigate = useNavigate();

  const handleNavigate = (link) => {
    navigate(`${link}`);
  };

  return (
    <div>
      <div class="footer-container">
        <Divider />
        <div class="footer">
          <div class="footer-content">
            <div class="newsletter">
              <h2>Subscribe to Our Newsletter</h2>
              <div class="newsletter-form">
                <input class="newsletter-input" placeholder="Email here" />
                <button class="newsletter-btn">Submit</button>
              </div>
            </div>
            <div class="footer-row">
              <div class="footer-column">
                <div class="footer-links">
                  <h3>Useful Links</h3>
                  <p onClick={() => handleNavigate("/")}>Home</p>
                  <p onClick={() => handleNavigate("/about-us")}>About</p>

                  <p onClick={() => handleNavigate("/terms-and-condition")}>
                    Terms & Conditions
                  </p>
                  <p onClick={() => handleNavigate("/client-testimonials")}>
                    Client Testimonials
                  </p>
                  <p onClick={() => handleNavigate("/contact-us")}>
                    Contact Us
                  </p>
                </div>
              </div>
              <div class="footer-column">
                <div class="footer-links">
                  <h3>Service Area</h3>
                  <p onClick={() => handleNavigate("terms-of-use")}>
                    Rice Milling Technology Solutions
                  </p>
                  <p onClick={() => handleNavigate("about-us")}>
                    Industrial Power Solutions
                  </p>
                  <p onClick={() => handleNavigate("about-us")}>
                    Static Voltage Stabilizers
                  </p>
                </div>
              </div>
              <div class="footer-column">
                <div class="footer-contact">
                  <h3>Get In Touch</h3>
                  <p>
                    <i class="fa fa-map-marker" aria-hidden="true"></i> Delhi,
                    India
                  </p>
                  <p>
                    <i class="fa fa-phone" aria-hidden="true"></i> +91
                    8008146642
                  </p>
                  <p>
                    <i class="fa fa-envelope"></i> abcd@example.com
                  </p>
                  <div class="footer-social">
                    <a href="https://www.twitter.com/">
                      <XIcon />
                    </a>
                    <a href="https://www.facebook.com/">
                      <FacebookIcon />
                    </a>
                    <a href="https://www.youtube.com/">
                      <YouTubeIcon />
                    </a>
                    <a href="https://www.instagram.com/">
                      <InstagramIcon />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="footer-menu">
            <div class="f-menu">
              <p onClick={() => handleNavigate("terms-of-use")}>Terms of Use</p>
              <p onClick={() => handleNavigate("/privacy-policy")}>
                Privacy Policy
              </p>
              <p onClick={() => handleNavigate("refund-policy")}>
                Refund Policy
              </p>
              <p onClick={() => handleNavigate("shipping-policy")}>
                Shipping Policy
              </p>
              <p onClick={() => handleNavigate("help")}>Help</p>
              <p onClick={() => handleNavigate("faq")}>FAQs</p>
            </div>
          </div>
          <div class="footer-copyright">
            <p>&copy; Shubhilsha Trading, All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
