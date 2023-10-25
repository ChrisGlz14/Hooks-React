import React from 'react';
import '/src/styles/operaciones.css'
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
    <h2 className="subtitulo-op">Multiplicacion</h2>
    <input className="input-num" type="number" onChange={num1OnChange} value={num1}/>
    <input className="input-num" type="number" onChange={num2OnChange} value={num2}/>  
    <button className='button-operations' onClick={producto}>Multiplicar</button>
    <div className="resultado">Resultado de la multiplicacion: {resultado} </div>
    
    </>
  )
}
