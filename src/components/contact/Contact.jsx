import React, { useRef, useState } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsPatchCheckFill } from "react-icons/bs";
import emailjs from "emailjs-com";
import ContactOption from "./ContactOption";

const Contact = () => {
  const form = useRef();
  const [sentStatus, setSentStatus] = useState("Not Sent");

  const sendEmail = (e) => {
    setSentStatus("Loading");
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6etbxep",
        "template_xkb5rlh",
        form.current,
        "r5hgF99xhkRVesY_P"
      )
      .then(
        (result) => {
          setSentStatus("Message Sent Successfully");
        },
        (error) => {
          setSentStatus("Error");
        }
      );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <ContactOption
            link="https://wa.me/919520223341"
            icon={<BsWhatsapp className="contact__option-icon" />}
            method="Whatsapp"
            message="Message Me"
          />

          <ContactOption
            link="https://www.linkedin.com/in/bhupesh-pattanaik-719173111/"
            icon={<BsLinkedin className="contact__option-icon" />}
            method="LinkedIn"
            message="Follow Me"
          />

          <ContactOption
            link="mailto:bhupesh.recruite@gmail.com"
            icon={<MdOutlineEmail className="contact__option-icon" />}
            method="Email"
            message="Email Me"
          />
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          />
          {sentStatus === "Message Sent Successfully" ? (
            ""
          ) : (
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          )}

          <div className="confirmation">
            {sentStatus === "Message Sent Successfully" ? (
              <BsPatchCheckFill className="icon" />
            ) : (
              ""
            )}
            {sentStatus === "Not Sent" ? "" : sentStatus}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
