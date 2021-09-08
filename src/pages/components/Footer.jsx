import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TelegramIcon from "@material-ui/icons/Telegram";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import TimelineIcon from "@material-ui/icons/Timeline";
import AttachMoneyRoundedIcon from "@material-ui/icons/AttachMoneyRounded";
import { Link } from "react-router-dom";

function Footer() {
  const styleLink = {
    textDecoration: "none",
    color: "inherit",
  };
  return (
    <div className="footer">
      <div className="social">
        <p>Biz bilan bo'lanish</p>

        <ul>
          <li>
            <Link style={styleLink} to="/#">
              <InstagramIcon /> Instagram
            </Link>
          </li>
          <li>
            <Link style={styleLink} to="/#">
              <TelegramIcon /> Telegram
            </Link>
          </li>
          <li>
            <Link style={styleLink} to="/#">
              <MailOutlineIcon /> Email
            </Link>
          </li>
        </ul>
      </div>
      <div className="desc">
        <h4>kurs.uz</h4>
        <p>
          O'zbekistondagi barcha banklarning <br /> valyuta kurslari
        </p>
      </div>

      <div className="links">
        <Link style={styleLink} to="/history">
          <TimelineIcon /> Kurslar tarixi
        </Link>
        <Link style={styleLink} to="/calc">
          <AttachMoneyRoundedIcon /> Kalkulyator
        </Link>
      </div>
    </div>
  );
}

export default Footer;
