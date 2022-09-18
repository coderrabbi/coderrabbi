import React from "react";
import "./Exprience.scss";
function Exprience() {
  const skills = [
    { years: "3+", title: "years", discription: "exprience" },
    { years: "50+", title: "completed ", discription: "projects" },
    { years: "20+", title: "clients ", discription: "exprience" },
  ];
  return (
    <div className="cr__exprience section__padding" id="Experience">
      {skills.map((skill, key) => {
        return (
          <div className="achivement">
            <div className="circle">{skill.years}</div>
            <span>{skill.title}</span>
            <span>{skill.discription}</span>
          </div>
        );
      })}
    </div>
  );
}

export default Exprience;
