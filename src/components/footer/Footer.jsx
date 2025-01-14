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
      <div className="footer-container">
        <Divider />
        <div className="footer">
          <div className="footer-content">
            <div className="newsletter">
              <h2>Subscribe to Our Newsletter</h2>
              <div className="newsletter-form">
                <input className="newsletter-input" placeholder="Email here" />
                <button className="newsletter-btn">Submit</button>
              </div>
            </div>
            <div className="footer-row">
              <div className="footer-column">
                <div className="footer-links">
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
              <div className="footer-column">
                <div className="footer-links">
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
              <div className="footer-column">
                <div className="footer-contact">
                  <h3>Get In Touch</h3>
                  <p>
                    <i className="fa fa-map-marker" aria-hidden="true"></i>{" "}
                    Delhi, India
                  </p>
                  <p>
                    <i className="fa fa-phone" aria-hidden="true"></i> +91
                    8008146642
                  </p>
                  <p>
                    <i className="fa fa-envelope"></i> abcd@example.com
                  </p>
                  <div className="footer-social">
                    <a
                      href="https://www.twitter.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <XIcon />
                    </a>
                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FacebookIcon />
                    </a>
                    <a
                      href="https://www.youtube.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <YouTubeIcon />
                    </a>
                    <a
                      href="https://www.instagram.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <InstagramIcon />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Divider />
          <div className="footer-menu">
            <div className="f-menu">
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
          <Divider />
          <div className="footer-copyright">
            <p>&copy; Shubhilsha Trading, All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
