import React from "react";
import "./Exprience.scss";
import { motion } from "framer-motion";
function Exprience() {
  const skills = [
    { years: "95%", title: "HTML" },
    { years: "90%", title: "CSS " },
    { years: "80%", title: "JavaScript" },
    { years: "75%", title: "React JS " },
    { years: "75%", title: "Firebase " },
    { years: "70%", title: "Node JS " },
  ];
  return (
    <div>
      <h1 className="my_skills" id="Skills">
        My Skills
      </h1>
      <div className="cr__exprience section__padding">
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
    </div>
  );
}

export default Exprience;
