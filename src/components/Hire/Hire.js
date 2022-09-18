import React from "react";
import "./Hire.scss";
import fiverr from "../../img/fiverr.png";
import amazon from "../../img/amazon.png";
import facebook from "../../img/Facebook.png";
import upwork from "../../img/Upwork.png";
import shopify from "../../img/Shopify.png";
import { motion } from "framer-motion";
function Hire() {
  return (
    <div className="cr__hire section__padding">
      <div className="cr__hire-left-section">
        <h1>Work for All these</h1>
        <h1>Brands & Clients </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti in
          nesciunt consequuntur quam officiis, mollitia fuga excepturi ut
          ducimus qui repellendus.
        </p>
        <a href="#Contact">
          <button className="button cv__btn"> Hire me</button>
        </a>
        <div className="blur s-blur1">hlw</div>
      </div>
      <div className="cr__hire-right-section">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="cr__hire-maincircle"
        >
          <div className="cr__hire-seccircle">
            <img src={fiverr} alt="" />
          </div>
          <div className="cr__hire-seccircle">
            <img src={upwork} alt="" />
          </div>
          <div className="cr__hire-seccircle">
            <img src={amazon} alt="" />
          </div>
          <div className="cr__hire-seccircle">
            <img src={shopify} alt="" />
          </div>
          <div className="cr__hire-seccircle">
            <img src={facebook} alt="" />
          </div>
        </motion.div>
        <div className="cr__hire-backcircle blueCircle"></div>
        <div className="cr__hire-backcircle yollowCircle"></div>
      </div>
    </div>
  );
}

export default Hire;
