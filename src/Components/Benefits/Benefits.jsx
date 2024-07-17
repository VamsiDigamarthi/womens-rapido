import React from "react";
import "./Benefits.css";
import { RiCornerDownRightFill } from "react-icons/ri";
const Benefits = () => {
  return (
    <div className="benefits">
      <div className="benefits-left">
        <img
          src="https://static.vecteezy.com/system/resources/previews/004/980/266/original/route-searching-app-interface-template-mobile-application-page-black-design-layout-gps-navigation-screen-flat-ui-application-choosing-destination-phone-display-with-digital-map-pinpoints-vector.jpg"
          alt="mobile"
        />
      </div>
      <div className="benefits-right">
        <h1>Get More benefit,</h1>
        <h1>Download App</h1>
        <div>
          <RiCornerDownRightFill size={45} color="#f79aaa" />
          <span className="benefits-span-of-span">
            <span>Fast booking</span> driver be awaiting your arrival and will
            transport you directly to your accommodation
          </span>
        </div>
        <div>
          <RiCornerDownRightFill size={25} color="#f79aaa" />
          <span className="benefits-span-of-span">
            <span>Easy to use</span> you just have to learn back and enjoy the
            ride
          </span>
        </div>
        <div>
          <RiCornerDownRightFill size={45} color="#f79aaa" />
          <span className="benefits-span-of-span">
            <span>Bonuses for ride</span> discounted rates, so you can be sure
            that you will be getting the best value transfers
          </span>
        </div>
        <div className="benefits-store-card">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBZYi41UyOsUQPRwhhUlzf_N-JbWAfTpIibg&s"
            alt="google-play-store"
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvzJASvP_DUtrXr3e-pFLajZYQ8NUOP-g46g&s"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Benefits;
