import nextId from "react-id-generator";
import React, { useState, useCallback } from "react";
import Title from "../components/Title";
import OperatorBtn from "../components/OperatorBtn";
import CardGroup from "../components/CardGroup";

import "./Game.css";

const possibleOps = ["*", "/", "-", "+"];

const isNumeric = (str) => {
  if (typeof str != "string") return false;
  return !isNaN(str) && !isNaN(parseFloat(str));
};

const buttons = [
  { operation: "MULT", operator: "*" },
  { operation: "DIV", operator: "/" },
  { operation: "SUB", operator: "-" },
  { operation: "ADD", operator: "+" },
];

export default function Game() {
  const [numInput, setNumInput] = useState(0);
  const [activeOp, setActiveOp] = useState(
    possibleOps[Math.floor(Math.random() * possibleOps.length)]
  );
  const [result, setResult] = useState(10);
  const [cards, setCards] = useState([]);

  const newCard = (number, op) => {
    if (number < 0) return;
    const newCard = { number, op, id: nextId() };
    const newCards = [...cards, newCard];
    setCards(newCards);
  };

  const changeNumber = (event) => {
    const num = event.target.value;
    if (isNumeric(num)) {
      setNumInput(event.target.value);
    }
  };

  const changeOp = (op) => {
    setActiveOp(op);
  };

  const deleteCard = useCallback((index) => {
    const newCards = cards.filter((card) => card.id !== index);
    setCards(newCards);
  }, [cards]);

  const applyCard = useCallback((number, op) => {
    setResult(Math.round(eval(`${result} ${op} ${number}`)));
  }, [result]);

  return (
    <div className="game">
      <Title className="title" />
      <span className="opBtnHolder">
        {buttons.map((button, index) => {
          return (
            <OperatorBtn
              key={index}
              op={button.operator}
              handleOperation={() => changeOp(button.operator)}
              act={activeOp}
            />
          );
        })}
      </span>
      <div className="center">
        <div>
          <input
            type="number"
            min="0"
            className="numInput"
            onChange={changeNumber}
          />
          <button
            className="addBtn"
            onClick={() => newCard(numInput, activeOp)}
          >
            {activeOp}
          </button>
          <button className="addBtn" onClick={() => setResult(10)}>
            Reset Result
          </button>
        </div>
        <div className="result">{result}</div>
      </div>
      <div className="cardHolder">
        <CardGroup
          cards={cards}
          deleteCard={deleteCard}
          applyCard={applyCard}
        />
      </div>
    </div>
  );
}
