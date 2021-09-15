import React from "react";

function Contact() {
  return (
    <div className="contact">
      <div className="left">

        <div className="insta">
            
        </div>
        <div className="telegram">

        </div>
        <div className="fasebook">

        </div>

      </div>
      <div className="right">
        <p>Bizga xabar qoldiring </p>

        <form action="">
          <input type="text" placeholder="Ismingiz " />
          <input type="text" placeholder="Telefon raqamingiz  " />
          <textarea rows="6" type="text" placeholder="Xabar " />

          <button onClick={(e)=>e.preventDefault()}  className="contact-btn" type="submit">
            Yuborish
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
