import React, { useEffect, useState } from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
const Header = () => {
  const [backgroundColor, setBackgroundColor] = useState("inherit"); // default background color
  const [hamborIcons, setHamborIcons] = useState(false);
  const scrollThreshold = "80";
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition >= scrollThreshold) {
        setBackgroundColor("#fff"); // change to desired background color
      } else {
        setBackgroundColor("inherit"); // reset to default background color
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollThreshold]);
  return (
    <div
      className="header"
      style={{ backgroundColor, transition: "background-color 0.3s ease" }}
    >
      <Link to="/">
        <img
          className="header-nav-logo-image"
          src="/images/ngs-logo.png"
          alt="logo"
        />
      </Link>
      <div className="header-nav-links">
        <NavLink
          activeClassName="active"
          to="/detail-about"
          className="header-nav-links-span"
        >
          <span>ABOUT</span>
        </NavLink>
        <NavLink
          activeClassName="active"
          to="/safe"
          className="header-nav-links-span"
        >
          <span>SAFE</span>
        </NavLink>
        <NavLink
          activeClassName="active"
          to="/career"
          className="header-nav-links-span"
        >
          <span>CAREER</span>
        </NavLink>

        <NavLink
          activeClassName="active"
          to="/ANDRIOD"
          className="header-nav-links-span header-app"
        >
          <span>ANDRIOD</span>
        </NavLink>
        <NavLink
          activeClassName="active"
          to="/IOS"
          className="header-nav-links-span header-app"
        >
          <span>IOS</span>
        </NavLink>
      </div>
      {/* mobile */}
      <div className="mobile-ham-icons">
        {hamborIcons ? (
          <RxCross1
            onClick={() => setHamborIcons(!hamborIcons)}
            size={25}
            color="grey"
          />
        ) : (
          <RxHamburgerMenu
            onClick={() => setHamborIcons(!hamborIcons)}
            size={25}
            color="grey"
          />
        )}
      </div>
      {hamborIcons && (
        <div className="mobile-header-link">
          <NavLink
            activeClassName="active"
            onClick={() => setHamborIcons(!hamborIcons)}
            to="/detail-about"
            className="header-nav-links-span"
          >
            <span>ABOUT</span>
          </NavLink>
          <NavLink
            activeClassName="active"
            onClick={() => setHamborIcons(!hamborIcons)}
            to="/our-services"
            className="header-nav-links-span"
          >
            <span>SAFE</span>
          </NavLink>
          <NavLink
            activeClassName="active"
            onClick={() => setHamborIcons(!hamborIcons)}
            to="/career"
            className="header-nav-links-span"
          >
            <span>CAREER</span>
          </NavLink>

          <NavLink
            activeClassName="active"
            to="/ANDRIOD"
            className="header-nav-links-span"
          >
            <span>ANDRIOD APP</span>
          </NavLink>
          <NavLink
            activeClassName="active"
            to="/IOS"
            className="header-nav-links-span"
          >
            <span>IOS APP</span>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Header;
