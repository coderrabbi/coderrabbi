import React from "react";
import "./Exprience.scss";
import { motion } from "framer-motion";
function Exprience() {
  const skills = [
    { years: "3+", title: "years", discription: "exprience" },
    { years: "50+", title: "completed ", discription: "projects" },
    { years: "20+", title: "clients ", discription: "exprience" },
  ];
  return (
    <div className="cr__exprience section__padding" id="Experience">
      {skills.map((skill, index) => {
        return (
          <motion.div
            key={index}
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, delayChildren: 0.5, type: "tween" }}
            className="achivement"
          >
            <div className="circle">{skill.years}</div>
            <span>{skill.title}</span>
            <span>{skill.discription}</span>
          </motion.div>
        );
      })}
    </div>
  );
}

export default Exprience;
