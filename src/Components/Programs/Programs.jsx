import React from "react";
import "./Programs.css";
import program_1 from "../../assets/front-img.jpeg";
import program_2 from "../../assets/bac-img.jpeg";
import program_3 from "../../assets/full-stact-img.jpeg";

const Programs = () => {
  return (
    <div className="programs" id="program">
      <div className="program">
        <img src={program_1} alt="" />
        <div className="caption">
          <p>Front-End Developer</p>
        </div>
      </div>
      <div className="program">
        <img src={program_2} alt="" />
        <div className="caption">
          <p> BackEnd Developer</p>
        </div>
      </div>
      <div className="program">
        <img src={program_3} alt="" />
        <div className="caption">
          <p>Full Stack Web Developer</p>
        </div>
      </div>
    </div>
  );
};

export default Programs;
