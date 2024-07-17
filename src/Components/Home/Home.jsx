import React from "react";
import "./Home.css";
import { Hero } from "../Hero/Hero";
import { Features } from "../Features/Features";
import Benefits from "../Benefits/Benefits";
import { About } from "../About/About";
import Safe from "../Safe/Safe";
const Home = () => {
  return (
    <div className="home">
      <Hero />
      <About />
      <Features />
      <Safe />
      <Benefits />
    </div>
  );
};

export default Home;
