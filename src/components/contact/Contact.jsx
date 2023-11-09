import React, { useState } from "react";
import "./contact.scss";
import emailjs from "@emailjs/browser";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import WhatsappOutlinedIcon from "@mui/icons-material/WhatsappOutlined";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    // EmailJS service ID, template ID, and Public Key
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    // Create a new object that contains dynamic template params
    const templateParams = {
      from_name: name,
      from_email: email,
      subject: subject,
      message: message,
    };

    console.log("Sending email...", templateParams);

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully!", response);
        setName("");
        setEmail("");
        setMessage("");
        setSubject("");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };
  return (
    <div className="contact" id="contact">
      {/* <p>GET IN TOUCH</p> */}
      <h1 className="c-me">Contact me</h1>
      <div className="c-wrapper">
        <div className="c-left">
          <div className="c-title">
            <h2>Let's start working together!!</h2>
          </div>
          <div className="c-mail">
            <MailOutlineOutlinedIcon className="icon" />
            <h4>Mail</h4>

            <a
              style={{ color: "#264653" }}
              target="_blank"
              href="mailto:ekatherina.shilina@gmail.com"
              rel="noreferrer"
            >
              ekatherina.shilina@gmail.com
            </a>
          </div>
          <div className="c-whatsapp">
            <WhatsappOutlinedIcon className="icon" />
            <h4>tel.</h4>
            <a
              style={{ color: "#264653" }}
              target="_blank"
              href="tel:+16478711923"
              rel="noreferrer"
            >
              +1(647)-871-1923
            </a>
          </div>
        </div>
        <div className="c-right">
          <div className="c-desc">
            <b style={{ color: "#264653", fontWeight: "bold" }}>
              What's your story?
            </b>{" "}
            Get in touch, Available for freelancing if the right project comes
            along!
          </div>
          <form onSubmit={sendEmail}>
            <input type="text" name="from_name" placeholder="Name" required />
            <input
              type="hidden"
              name="to_name"
              value="Ekaterina Shilina"
              className="hiddenInput"
              placeholder="Ekaterina Shilina"
              hidden
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Email"
              required
            />
            <input
              type="text"
              name="user_subject"
              placeholder="Subject"
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              cols="30"
              rows="3"
              required
            ></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
