import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <div>
      <div class="footer-container">
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
              {/* <div class="footer-column">
                <div class="footer-about">
                  <h3>About Us</h3>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus imperdiet, nulla a consectetur dictum, metus elit
                    hendrerit lectus, et venenatis elit dui nec lorem. Integer
                    vel urna euismod, ultrices tortor at, fringilla est. Donec
                    luctus massa a dolor maximus, nec pharetra felis gravida. Ut
                    at ex nec orci fringilla vehicula. Fusce sagittis enim nec
                    sapien cursus, nec consectetur arcu ultricies. Aliquam erat
                    volutpat. Sed nec orci vehicula, dignissim est a, cursus ex.
                    Suspendisse potenti. Integer lacinia urna eget libero
                    interdum, eu luctus ligula gravida.
                  </p>
                </div>
              </div> */}

              <div class="footer-column">
                <div class="footer-links">
                  <h3>Useful Links</h3>
                  <a href="/">Home</a>
                  <a href="/aboutus">About</a>
                  <a href="/services">Privacy Policy</a>
                  <a href="/services">Terms & Conditions</a>
                  <a href="#">Client Testimonials</a>
                  <a href="/contact">Contact Us</a>
                </div>
              </div>
              <div class="footer-column">
                <div class="footer-links">
                  <h3>Service Area</h3>
                  <a href="#">Rice Milling Technology Solutions</a>
                  <a href="#">Industrial Power Solutions</a>
                  <a href="#">Static Voltage Stabilizers</a>
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
                    {/* <!-- Uncomment and add links if needed */}
                    <a href="#">
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="#">
                      <i class="fab fa-youtube"></i>
                    </a>
                    <a href="#">
                      <i class="fab fa-instagram"></i>
                    </a>
                    <a href="#">
                      <i class="fab fa-linkedin-in"></i>
                    </a>
                    {/* --> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="footer-menu">
            <div class="f-menu">
              <a href="#">Terms of Use</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Cookies</a>
              <a href="#">Help</a>
              <a href="#">FAQs</a>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="footer-row">
              <div class="footer-column">
                <p>
                  &copy; <a href="#">Annapurna Trading Corporation</a>, All
                  Rights Reserved.
                </p>
              </div>
              <div class="footer-column">
                <p>
                  Developed & Maintained By
                  <a href="#">R.Tech Solutions</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
