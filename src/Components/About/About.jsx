import React from "react";
import "./About.css";
export const About = () => {
  return (
    <div className="about">
      <div className="about-first-card">
        <div className="about-first-left-card">
          <img
            src="https://i.etsystatic.com/41972288/r/il/70b411/5801714085/il_600x600.5801714085_fdew.jpg"
            alt=""
          />
        </div>
        <div className="about-first-right-card">
          <div className="about-first-right-first-card">
            <h4>ABOUT COMPANY</h4>
            <span></span>
          </div>
          <h1>
            The Best Of Product <br /> Your Business
          </h1>
          <p>
            There are many variations of passages of lorem Ipsum available but
            the majority have suffered alteration in some form by inject rated
            humour or randomised this like.
          </p>
          <div className="about-para">
            <p>
              Highest quality security, Network uptime, fast output. Unlimited
              scale and customizing possibilities.
            </p>
            <span>
              <span> Murad Hasan,</span>
              Head Of Idea
            </span>
          </div>
          <button>Read More</button>
        </div>
      </div>
    </div>
  );
};
