import React from "react";
import "./FloatinDiv.scss";
const Floatindiv = ({ img, text1, text2 }) => {
  return (
    <div className="floatingDiv">
      <img src={img} alt="" />
      <span>
        {text1}
        <br />
        {text2}
      </span>
    </div>
  );
};

export default Floatindiv;
