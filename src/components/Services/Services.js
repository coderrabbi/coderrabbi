import React from "react";
import "./Services.scss";
import heart from "../../img/heartemoji.png";
import glasses from "../../img/glasses.png";
import humble from "../../img/humble.png";
import Card from "../Card/Card";
import resume from "../../img/Rabby-resume.pdf";
import { motion } from "framer-motion";

function Services() {
  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };
  return (
    <div className="cr__services section__padding" id="Services">
      {/* left side */}
      <div className="cr__services-left-container">
        <h1>My Awesome </h1>
        <h1>Services </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti in
          nesciunt consequuntur quam officiis, mollitia fuga excepturi ut
          ducimus qui repellendus.
        </p>
        <a href={resume} download>
          <button className="button cv__btn"> Get Resume</button>
        </a>
        <div className="blur s-blur1">hlw</div>
      </div>
      {/* right side */}
      <div className="cr__services-right-container">
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={heart}
            heading={"Design"}
            detail={"Figma, Sketch, Photoshop, Adobe Illustrator, Adobe xd"}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={glasses}
            heading={"Developer"}
            detail={"Html, Css, JavaScript, React, Nodejs, Express"}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={humble}
            heading={"Problem Solving"}
            detail={"Solve coding problem using chrome devtools"}
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
}

export default Services;
