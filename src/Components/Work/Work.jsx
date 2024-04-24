import React from "react";
import "./Work.css";
import portfolio_img from "../../assets/portfolio.png";
import helio_img from "../../assets/helio-pro-img.png";
import white_arrow from "../../assets/white-arrow.png";

const Work = () => {
  return (
    <div className="work" id="work">
      <div className="gallery">
        <a href="https://p-lakshmipriya.github.io/Heliography-Studio/">
          <img src={helio_img} alt="" />
        </a>
        <a href="#">
          <img src={portfolio_img} alt="" />
        </a>
        {/* <a href="#">
          <img src={gallery_2} alt="" />
        </a> */}
        {/* <img src={gallery_4} alt="" /> */}
      </div>
      <button className="btn dark-btn">
        See more here <img src={white_arrow} alt="" />
      </button>
    </div>
  );
};

export default Work;
