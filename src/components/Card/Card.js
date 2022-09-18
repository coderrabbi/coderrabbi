import React from "react";
import "./Card.scss";
function Card({ emoji, heading, detail, color }) {
  return (
    <div className="cr__card" style={{ borderColor: { color } }}>
      <img src={emoji} alt="heart" />
      <span>{heading}</span>
      <span>{detail}</span>
      <button className="c-button">LEARN MORE</button>
    </div>
  );
}

export default Card;
