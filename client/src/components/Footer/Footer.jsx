import "./Footer.scss";
import Payment from "../../assets/payments.png";
import {
  FaEnvelope,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A sit
            consectetur quos, libero velit ut ipsam at possimus eaque eius?
          </div>
        </div>
        <div className="col">
          <div className="title">Contact</div>
          <div className="c-items">
            <FaLocationArrow />
            <div className="text">1234 Main St. Anytown, USA 12345</div>
          </div>
          <div className="c-items">
            <FaMobileAlt />
            <div className="text">Phone: 1234567890</div>
          </div>
          <div className="c-items">
            <FaEnvelope />
            <div className="text">
              Email:{" "}
              <a href="mailto:mrinal.webdev@gmail.com">
                mrinal.webdev@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="title">Categories</div>
          <span className="text">Headphones</span>
          <span className="text">Speakers</span>
          <span className="text">Bluetooth Speakers</span>
          <span className="text">Home Theatre</span>
          <span className="text">Projectors</span>
        </div>
        <div className="col">
          <div className="title">Pages</div>
          <span className="text">Home</span>
          <span className="text">About</span>
          <span className="text">Privacy Policy</span>
          <span className="text">Returns</span>
          <span className="text">Terms&Conditions</span>
          <span className="text">Contact Us</span>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
            <div className="text">
                Made with ♥ by Mrinal © 2022 All rights reserved
            </div>
            <img src={Payment} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
