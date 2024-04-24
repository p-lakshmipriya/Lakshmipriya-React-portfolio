import React from "react";
import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";

const Hero = () => {
  return (
    <div className="hero container" id="hero">
      <div className="hero-text">
        <h1>Hi, Im Lakshmi Priya</h1>
        <p>
          A passionate Full Stck Web Developer with a keen interest in crafting
          beautiful and functional web experiences. With a strong foundation in
          both Front-end and Back-end technologies, I enjoy bringing creative
          ideas to life and solving complex challenges in the digital realm.
        </p>
        <button className="btn">
          Explore <img src={dark_arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
