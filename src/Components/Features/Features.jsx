import React from "react";
import "./Features.css";
import { MdOutlineLocalOffer } from "react-icons/md";
export const Features = () => {
  return (
    <div className="features-main">
      <h3>MAIN FEATURES</h3>
      <h1>Our Benifits</h1>
      <div className="features-main-card">
        <div className="features-main-inner-card">
          <div className="feature-main-single-card">
            <span>
              <MdOutlineLocalOffer color="#fff" size={25} />
            </span>
            <div>
              <h3>Fixed Price</h3>
              <p>The fixed fare is setin every taximeter as the main tariff</p>
            </div>
          </div>
          <div className="feature-main-single-card">
            <span>
              <MdOutlineLocalOffer color="#fff" size={25} />
            </span>
            <div>
              <h3>No Fee</h3>
              <p>We guarantee fixed price and you should not pay tips.</p>
            </div>
          </div>
        </div>
        <img
          src="https://img.freepik.com/premium-vector/beautiful-girl-cool-motorcycle_250538-34.jpg"
          alt=""
        />
        {/*  right side */}
        <div className="features-main-inner-card">
          <div className="feature-main-single-card">
            <div>
              <h3 className="feature-left">100% Pleasure</h3>
              <p className="feature-left">
                We have a lot of standing customer and high ratings.
              </p>
            </div>
            <span>
              <MdOutlineLocalOffer color="#fff" size={25} />
            </span>
          </div>
          <div className="feature-main-single-card">
            <div>
              <h3 className="feature-left">Nationwide</h3>
              <p className="feature-left">
                Our application is the easiest way to book a bike
              </p>
            </div>
            <span>
              <MdOutlineLocalOffer color="#fff" size={25} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
