import React from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Grid,
  Paper,
  Divider,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";
import MessageIcon from "@mui/icons-material/Message";
import MapIcon from "@mui/icons-material/Map";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import "./contact.css";

const ContactUs = () => {
  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  //     alert("Message sent!");
  //   };

  return (
    <section classNameName="contact-page-sec">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="contact-info">
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  {/* <i className="fas fa-map-marked"></i> */}
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
                  {/* <i className="fas fa-envelope"></i> */}
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
                  {/* <i className="fas fa-clock"></i> */}
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
            <div className="contact-page-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109741.02912911311!2d76.69348873658222!3d30.73506264436677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed0be66ec96b%3A0xa5ff67f9527319fe!2sChandigarh!5e0!3m2!1sen!2sin!4v1553497921355"
                width="100%"
                height="450"
                frameborder="0"
                style={{ border: "0px" }}
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
