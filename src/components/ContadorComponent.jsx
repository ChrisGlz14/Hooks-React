import React from 'react'
import { useCounter } from '../Hooks/usecounter'

function ContadorComponent() {

  const {counter, increment,decrement,reset} =  useCounter(0)

  return (
    <>
    <h2 className="text-center">Aplicacion con Hooks</h2>
    
    <h1>Contador: {counter}</h1>
      <button className="btn btn-primary" onClick={()=> increment(1)}>sumar</button>
      <button className="btn btn-danger m-4" onClick={()=> reset()}>resetear</button>
      <button className="btn btn-primary" onClick={()=> decrement(4, false)}>Restar</button>
      
    </>
  )
}

export default ContadorComponent