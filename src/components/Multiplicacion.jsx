import React from 'react';

import {useState} from 'react'



export const Multiplicacion = () => {
  
    const [num1, setNum1] = useState('')
    const [num2, setNum2] = useState('')
    const [resultado, setResultado] = useState('')


    const num1OnChange = (e) => {
        setNum1(e.target.value)
    }

    const num2OnChange = (e) => {
        setNum2(e.target.value)
    }

    const producto = () => {
        setResultado (num1 * num2)
    }
  
    return (
    <>
    <input type="number" onChange={num1OnChange} value={num1}/>
    <input type="number" onChange={num2OnChange} value={num2}/>  
    <button onClick={producto}>Multiplicar </button>
    <div>Resultado : {resultado} </div>
    
    </>
  )
}
