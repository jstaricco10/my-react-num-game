import React, { useState } from "react";

import "./Title.css";

const initialColor = "#0000FF";

const isColor = (strColor) => {
  var s = new Option().style;
  s.color = strColor;
  var test1 = s.color == strColor;
  var test2 = /^#[0-9A-F]{6}$/i.test(strColor);
  return test1 == true || test2 == true;
};

export default function Title() {
  const [colorInput, setColorInput] = useState(initialColor);

  const changeColor = (event) => {
    const color = event.target.value;
    if (color === "") {
      setColorInput(initialColor);
    } else if (isColor(color)) {
      setColorInput(color);
    }
    return;
  };

  return (
    <div className="titleHolder">
      <input
        placeholder="introduce a color..."
        className="titleColor"
        onChange={changeColor}
      />
      <h2 className="title" style={{ color: `${colorInput}` }}>
        El juego de Juanma
      </h2>
    </div>
  );
}
