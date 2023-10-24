import React, { useState } from "react";

export const Suma = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [resultado, setResultado] = useState('');

  const onNum1Change = (e) => {
    setNum1(Number(e.target.value));
  };

  const onNum2Change = (e) => {
    setNum2(Number(e.target.value));
  };

  const sumar = () => {
    setResultado(num1 + num2);
  };

  return (
    <>
      <input
        type="number"
        value={num1}
        onChange={onNum1Change}
      />
      <input
        type="number"
        value={num2}
        onChange={onNum2Change}
      />
      <button onClick={sumar}>Sumar</button>
      <div>Resultado: {resultado}</div>
    </>
  );
};


