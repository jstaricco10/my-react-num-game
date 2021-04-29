import React, { useRef } from "react";

import "./OperatorBtn.css";

export default function OperatorBtn(props) {
  const { op, handleOperation, act } = props;

  const cl = act === op ? "opBtnActive" : "opBtn";

  return (
    <button className={cl} onClick={handleOperation}>
      {op}
    </button>
  );
}
