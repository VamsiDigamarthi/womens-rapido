import React from "react";
import "./Footer.css";
import { Link, NavLink } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-images-card">
        <h2>Download App</h2>
        <div className="benefits-store-card">
          <img
            src="/images/images-removebg-preview (2).png"
            alt="google-play-store"
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvzJASvP_DUtrXr3e-pFLajZYQ8NUOP-g46g&s"
            alt=""
          />
        </div>
      </div>
      <div className="footer-main-link-card">
        <div className="footer-links-card">
          <NavLink
            activeClassName="active"
            to="/detail-about"
            className="header-nav-links-span footer-links-card-span"
          >
            <span>About</span>
          </NavLink>
          <Link
            to="/our-services"
            className="header-nav-links-span footer-links-card-span"
          >
            <span>Services</span>
          </Link>
          <Link
            to="/career"
            className="header-nav-links-span footer-links-card-span"
          >
            <span>career</span>
          </Link>
          <Link
            to="/contact"
            className="header-nav-links-span footer-links-card-span"
          >
            <span>Privacy Policy</span>
          </Link>
        </div>
        <div className="footer-links-card">
          <NavLink
            activeClassName="active"
            to="/detail-about"
            className="header-nav-links-span footer-links-card-span"
          >
            <span>Customer Term-Conditions</span>
          </NavLink>
          <Link
            to="/our-services"
            className="header-nav-links-span footer-links-card-span"
          >
            <span>Captain Term-Conditions</span>
          </Link>
        </div>
      </div>
      <div className="footer-follow-card">
        <h3>Follow Us</h3>
        <div className="footer-follow-icons-card">
          <FaFacebookSquare size={25} color="#fff" />
          <FaSquareInstagram size={25} color="#fff" />

          <FaTwitter size={25} color="#fff" />

          <FaLinkedinIn size={25} color="#fff" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
