import { useState } from "react";
import emailjs from "@emailjs/browser";
import React, { useRef } from "react";

export const Contact = (props) => {
  const form = useRef();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleChange1 = (e) => {
    setName(e.target.value);
  };
  const handleChange2 = (e) => {
    setEmail(e.target.value);
  };
  const handleChange3 = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_08e7jzm",
        "template_caeak32",
        form.current,
        "6Xb7EdL19j4OwIvGb"
      )
      .then(
        (result) => {
          alert("mail send...");
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Get In Touch</h2>
                <p>
                  Please fill out the form below to send us an email and we will
                  get back to you as soon as possible.
                </p>
              </div>
              <form name="sentMessage" ref={form} onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="user_name"
                        value={name}
                        className="form-control"
                        placeholder="Name"
                        required
                        onChange={handleChange1}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        value={email}
                        name="user_email"
                        className="form-control"
                        placeholder="Email"
                        required
                        onChange={handleChange2}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    value={message}
                    className="form-control"
                    rows="4"
                    placeholder="Message"
                    required
                    onChange={handleChange3}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <input
                  type="submit"
                  className="btn btn-custom btn-lg"
                  value="Send Message"
                />
              </form>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Address
                </span>
                Office No. 4, 3rd Floor, A Wing, Laxmi Horizon, HDFC Bank
                Punawale, Pune-411033
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Phone
                </span>{" "}
                <a href="tel:+919156486909" style={{ color: "white" }}>
                  +91 9156486909
                </a>
                <br></br>
                <a href="tel:+918605386909" style={{ color: "white" }}>
                  +91 8605386909
                </a>
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                hr@polymorphisminfotech.com directors@polymorphisminfotech.com
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : "/"}>
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : "/"}>
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/company/config-server-llp/"
                      target="_blank"
                    >
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          © Copyright <strong>Config Server LLP</strong>. All Rights Reserved
          <p>Designed by Config Server</p>
        </div>
      </div>
    </div>
  );
};
