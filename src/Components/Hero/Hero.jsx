import React from "react";
import "./Hero.css";
import { motion } from "framer-motion";
import NumberCounter from "number-counter";
export const Hero = () => {
  const transition = { type: "spring", duration: 2 };
  return (
    <div className="hero">
      <div className="hero-left">
        <h1>
          <span className="stroke-text">Welcome</span> to <br />{" "}
          Womens-Traveller
        </h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <div className="hero-number-card">
          <div>
            <span>
              <NumberCounter end={10} start={0} delay="2" preFix="+" />
            </span>
            <span>export Drivers</span>
          </div>
          <div>
            <span>
              <NumberCounter end={30} start={0} delay="2" preFix="+" />
            </span>
            <span>Customers</span>
          </div>
        </div>
        <div className="hero-btn-card">
          <button>Learn More</button>
          <button>Download Andriod App</button>
        </div>
      </div>
      <div className="hero-right">
        <motion.img
          initial={{ x: 300 }}
          whileInView={{ x: 0 }}
          transition={transition}
          src="/images/images-removebg-preview (1).png"
          alt="hero-bike"
        />
        <img
          className="hero-right-arrow-image"
          src="/images/hero_image_back.png"
          alt="hero-right"
        />
      </div>
    </div>
  );
};
