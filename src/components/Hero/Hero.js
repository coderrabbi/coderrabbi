import React from "react";
import github from "../../img/github.png";
import linkedin from "../../img/linkedin.png";
import instagram from "../../img/instagram.png";
import crown from "../../img/crown.png";
import { motion } from "framer-motion";
import coderrabbi from "../../img/2nd-profile.png";
import glassesimoji from "../../img/glassesimoji.png";

import "./Hero.scss";
import Floatindiv from "../FloatinDiv/FloatinDiv";
const Hero = () => {
  const transition = { duration: 2, type: "spring" };
  return (
    <div>
      <div className="cr__hero section__padding" id="Home">
        <div className="cr__hero-left-content">
          <h1>Hy! I Am</h1>
          <h1>Golam Rabbi</h1>

          {/* for__work */}

          {/*  */}

          <p>
            Frontend Developer with high lavel of exporionce in web desiging and
            development, producting the Quality work
          </p>
          <a href="#Contact">
            <button className="cr__hire-btn button">Hire me</button>
          </a>
          <div className="cr__hero-social">
            <a href="https://github.com/coderrabbi">
              <img src={github} alt="github" />
            </a>
            <a href="https://www.linkedin.com/in/3dotit/">
              <img src={linkedin} alt="linkedin" />
            </a>
            <a href="https://github.com/coderrabbi">
              <img src={instagram} alt="instagram" />
            </a>
          </div>
        </div>
        <div className="cr__hero-right-content">
          <img className="profile__img" src={coderrabbi} alt="" />
          <motion.img
            initial={{ left: "-36%" }}
            whileInView={{ left: "-15%" }}
            transition={transition}
            src={glassesimoji}
            alt="glassesimoji"
            className="glassesimoji"
          />
          {/* <div className="cr__hero-shape"></div> */}

          {/* animation */}

          <motion.div
            initial={{ top: "-4%", left: "74%" }}
            whileInView={{ left: "68%" }}
            transition={transition}
            className="floating-div"
          >
            <Floatindiv img={crown} text1="Web" text2="Developer" />
          </motion.div>
          <div
            className="blur"
            style={{ background: "rgb(238 210 255)" }}
          ></div>
          <div
            className="blur"
            style={{
              background: "#C1F5FF",
              top: "17rem",
              width: "21rem",
              height: "11rem",
              left: "-9rem",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
