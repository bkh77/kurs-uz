import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TelegramIcon from "@material-ui/icons/Telegram";
import Facebook from "@material-ui/icons/Facebook";
import TimelineIcon from "@material-ui/icons/Timeline";
import { Link } from "react-router-dom";

function Footer() {
  const styleLink = {
    textDecoration: "none",
    color: "inherit",
  };

  return (
    <div className="footer">
      <div className="social">
        <p>Biz bilan bog'lanish</p>

        <ul>
          <li>
            <a
              style={styleLink}
              href="https://www.instagram.com/rootacademyuz/"
            >
              <InstagramIcon /> Instagram
            </a>
          </li>
          <li>
            <a
              style={styleLink}
              rel="noreferrer"
              target="_blank"
              href="https://t.me/rootacademysupport"
            >
              <TelegramIcon /> Telegram
            </a>
          </li>
          <li>
            <a
              style={styleLink}
              rel="noreferrer"
              target="_blank"
              href="https://www.facebook.com/rootacademy"
            >
              <Facebook /> Facebook
            </a>
          </li>
        </ul>
      </div>
      <div className="desc">
        <p>
          O'zbekistondagi barcha banklarning <br /> valyuta kurslari <br />{" "}
          <br />
          <span>© valyuta-kurslari.uz - 2021</span>
        </p>
      </div>

      <div className="links">
        <Link style={styleLink} to="/history">
          <TimelineIcon /> Kurslar tarixi
        </Link>
      </div>
    </div>
  );
}

export default Footer;
