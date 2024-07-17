import React from "react";
import "./Safe.css";
const Safe = () => {
  return (
    <div className="safe">
      <div className="safe-left">
        <div className="about-first-right-first-card">
          <h4>SAFETY FEATURE</h4>
          <span></span>
        </div>
        <h1>Safe for all</h1>
        <p>
          The well-being of our customer is above everything else. We are
          constantly in pursuit of enhancing our safety measures to ensure every
          ride is a pleasant and comfortable experience.
        </p>
        <div className="about-para">
          <p>
            Highest quality security, Network uptime, fast output. Unlimited
            scale and customizing possibilities.
          </p>
          {/* <span>
            <span> Murad Hasan,</span>
            Head Of Idea
          </span> */}
        </div>
        <button>Read More</button>
      </div>
      <div className="safe-right">
        <img
          src="https://i.etsystatic.com/41972288/r/il/7ee96e/5801714013/il_794xN.5801714013_p5kp.jpg"
          alt="safe"
        />
      </div>
    </div>
  );
};

export default Safe;
