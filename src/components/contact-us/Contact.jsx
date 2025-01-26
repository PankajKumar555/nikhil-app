import React from "react";
import MapIcon from "@mui/icons-material/Map";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import "./contact.css";

const ContactUs = () => {
  return (
    <section className="contact-page-sec">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="contact-info">
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <MapIcon />
                </div>
                <div className="contact-info-text">
                  <h2>address</h2>
                  <span>1215 Lorem Ipsum, Ch 176080 </span>
                  <span>Chandigarh , INDIA</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="contact-info">
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <LocalPostOfficeIcon />
                </div>
                <div className="contact-info-text">
                  <h2>E-mail</h2>
                  <span>info@LoremIpsum.com</span>
                  <span>yourmail@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="contact-info">
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <WatchLaterIcon />
                </div>
                <div className="contact-info-text">
                  <h2>office time</h2>
                  <span>Mon - Thu 9:00 am - 4.00 pm</span>
                  <span>Thu - Mon 10.00 pm - 5.00 pm</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <div className="contact-page-form" method="post">
              <h2>Get in Touch</h2>
              <form action="contact-mail.php" method="post">
                <div className="row">
                  <div className="col-md-6 col-sm-6 col-xs-12">
                    <div className="single-input-field">
                      <input type="text" placeholder="Your Name" name="name" />
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6 col-xs-12">
                    <div className="single-input-field">
                      <input
                        type="email"
                        placeholder="E-mail"
                        name="email"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6 col-xs-12">
                    <div className="single-input-field">
                      <input
                        type="text"
                        placeholder="Phone Number"
                        name="phone"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6 col-xs-12">
                    <div className="single-input-field">
                      <input type="text" placeholder="Subject" name="subject" />
                    </div>
                  </div>
                  <div className="col-md-12 message-input">
                    <div className="single-input-field">
                      <textarea
                        placeholder="Write Your Message"
                        name="message"
                      ></textarea>
                    </div>
                  </div>
                  <div className="single-input-fieldsbtn">
                    <input type="submit" value="Send Now" />
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="contact-page-map"
              onTouchMove={(e) => e.stopPropagation()} // Prevent scroll-blocking issues
            >
              <iframe
                title="test"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17446.21974028572!2d77.0967352!3d28.7296738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0126f8b739a9%3A0x489e7d8c3cc7fadb!2sRohini%2C%20New%20Delhi%2C%20Delhi%20110085%2C%20India!5e0!3m2!1sen!2sin!4v1674974567890"
                width="100%"
                height="450"
                frameBorder="0"
                style={{ border: "0px" }}
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
