import React from "react";
import "../scss/components.scss";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="row">
        <div className="column">
          <div className="footer-icon">
            <img
              className="footer-logo"
              src={require("../assets/logo.png")}
              alt="Logo"
            />
            <div className="Social-icon">
              <ul>
                <li>
                  <a href="/">
                    <img
                      className="social-icon"
                      src={require("../assets/facebook.png")}
                      alt="facebook"
                    />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <img
                      className="social-icon"
                      src={require("../assets/instagram.png")}
                      alt="Instagram"
                    />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <img
                      className="social-icon"
                      src={require("../assets/github.png")}
                      alt="Github"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <p style={{ marginTop: "-10px", marginLeft: "5px" }}>
            &copy;{new Date().getFullYear()} Verified
          </p>
        </div>

        <div className="column">
          <h3>Resources</h3>
          <ul className="column-content">
            <li>
              <a href="/">Track my order</a>
            </li>
            <li>
              <a href="/refund_policy">Return policy</a>
            </li>
            <li>
              <a href="/payment_security">Payment Security</a>
            </li>
            <li>
              <a href="/customer_security">Coupon policy and price guarantee</a>
            </li>
            <li>
              <NavLink to="/term_of_use">Terms and conditions</NavLink>
            </li>
          </ul>
        </div>

        <div className="column">
          <h3>Contact Info</h3>
          <ul className="column-content">
            <li>Address:</li>
            <li>225 Nguyen Tri Phuong</li>
            <li>District 5</li>
            <li>Ho Chi Minh City</li>
            <li>Phone:(+84) 974 506 002</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
