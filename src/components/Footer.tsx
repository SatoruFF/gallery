import React from "react";
import "../style/footer.scss";
import telegram from "../assets/telegram.png";
import instagram from "../assets/inst.png";

const Footer = () => {
  return (
    <footer>
      <a href="" target='_blank'>
        <img src={telegram} alt="telegram" />
      </a>
      <a href="" target='_blank'>
        <img src={instagram} alt="instagram" />
      </a>
      <p>Made by SatoruF</p>
    </footer>
  );
};

export default Footer;
