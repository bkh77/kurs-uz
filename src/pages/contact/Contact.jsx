import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TelegramIcon from "@material-ui/icons/Telegram";
import Facebook from "@material-ui/icons/Facebook";
import { FaPhone } from "react-icons/fa";
import { BsFillEnvelopeFill } from "react-icons/bs";

const styleLink = {
  textDecoration: "none",
  color: "inherit",
};

function Contact() {
  return (
    <div className="contact">
      <div>
        <a
          style={styleLink}
          rel="noreferrer"
          target="_blank"
          href="https://www.instagram.com/rootacademyuz/"
        >
          <InstagramIcon className="social" />
        </a>

        <a
          style={styleLink}
          rel="noreferrer"
          target="_blank"
          href="https://t.me/rootacademysupport"
        >
          <TelegramIcon className="social" />
        </a>

        <a
          style={styleLink}
          rel="noreferrer"
          target="_blank"
          href="https://www.facebook.com/rootacademy"
        >
          <Facebook className="social" />
        </a>
      </div>
      <p>
        <FaPhone /> +998 93 786 25 07
        <br /> <br />
        <BsFillEnvelopeFill /> rootacademyuz@gmail.com
      </p>
    </div>
  );
}

export default Contact;
