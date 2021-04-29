import React from "react";

import "./CardBtn.css";

export default function CardBtn(props) {
  const { op, number, handleDelete, handleApply } = props;

  return (
    <div className="card">
      <h5>{op}</h5>
      <h5>{number}</h5>
      <button onClick={handleApply}>Apply</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
