import React from "react";
import "./About.css";
// import about_img from "../../assets/photo.jpeg";
// import play_icon from "../../assets/play-icon.png";

const About = () => {
  return (
    <div className="about" id="about">
      {/* <div className="about-left">
        <img src="#" alt="" className="about-img" /> */}
      {/* <img src={play_icon} alt="" className="play-icon" />
      </div> */}
      <div className="about-right">
        <h3>About Me</h3>
        <h2>Full Stack Web Developer</h2>
        <p></p>
        <p>
          A passionate full-stack web developer with a keen interest in creating
          dynamic and user-friendly web applications.I hold a bachelor degree in
          computer Application and recently completed a professional course in
          full-stack web development using python. With a strong foundation in
          both front end and back-end technologies, I specialize in crafting
          engaging user interfaces using Html,Css and Javascript while
          leveraging framework React for enhanced interactivity. On the server
          side,I have extensive experience working with Python and
          Django,building robust and scalable web applications.
        </p>
        <p>
          My journey in web development has been fueled by a relentless pursuit
          of knowledge and a commitment to delivering high-quality solutions
          that meet the needs of users and clients alike.I thrive in
          collaborative environments and enjoy tackling complex challenges to
          bring innovative ideas to life.
        </p>
      </div>
    </div>
  );
};

export default About;
