import React from "react";
import { useState } from "react";

export const Resta = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [resultado, setResultado] = useState("");


  const onNum1Change = (e) => {
    setNum1(Number(e.target.value))
  }

  const onNum2Change = (e) => {
    setNum2(Number(e.target.value))
  }

  const resta = () => {
    setResultado(num1 - num2);
  };

  return (
    <>
      <h2>Resta</h2>
      <input type="text" onChange={onNum1Change} value={num1} />
      <input type="text" onChange={onNum2Change} value={num2} />
      <button onClick={resta}>Restar</button>
      <div>Resultado:{resultado} </div>
    </>
  );
};
