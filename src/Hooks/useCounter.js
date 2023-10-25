import { useState } from "react";


export const useCounter = (valorInicial = 0) => {
  const [counter, setCounter] = useState(valorInicial);

  const increment = (valor = 1) => {
    setCounter(counter + valor);
  };
  const reset = () => {
    setCounter(0);
  };
  const decrement = (valor = 1, negativo = true) => {
    if (!negativo && counter - valor < 0) {
      setCounter(0);
      return;
    }
    setCounter(counter - valor);
  };

  return {
    counter,
    increment,
    reset,
    decrement,
  };
};
