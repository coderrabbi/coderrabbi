import React from "react";
import aboutMe from "../../img/coderrabbi.png";
import "./About.scss";
const About = () => {
  return (
    <div id="About">
      <div className="about__me">
        <h1>About Me</h1>
        <div className="about__wrap">
          <div className="about__me-left">
            <p>
              Hello, I am rabby. A web developer. I love programming and always
              love to learn new things. I always try to update myself by
              exploring newly upcoming technologies{" "}
            </p>
          </div>
          <div className="about__me-right">
            <img src={aboutMe} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
