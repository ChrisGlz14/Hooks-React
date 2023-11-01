import React, { useState } from "react";
import '/src/styles/operaciones.css'

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
    <h2 className="subtitulo-op">Suma</h2>
      <input
        className="input-num"
        type="number"
        value={num1}
        onChange={onNum1Change}
      />
      <input
        className="input-num"
        type="number"
        value={num2}
        onChange={onNum2Change}
      />
      <button className="button-operations" onClick={sumar}>Sumar</button>
      <div className="resultado">Resultado de la suma: {resultado}</div>
    </>
  );
};

export default Suma


