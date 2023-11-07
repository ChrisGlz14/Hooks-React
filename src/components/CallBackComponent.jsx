import React from 'react'
import { Incrementar } from './Incrementar'
import { useState } from 'react'
import { useCallback } from 'react'

export const CallBackComponent = () => {


  const [counter, setCounter] = useState(0)


  // el incrementarPadre esta recibiendo el parametro desde el hijo
  // const incrementarPadre = (val) => {
  //   setCounter(counter + val)
  // }




  // USO DE useCallBack en funciones

  const incrementarPadre = useCallback(
    (val) => {
      setCounter(contador => contador + val) // Primero pide la CallBack (funcion) y  no podemos pasar el counter + val debido a que memoriza ese resultado, utilizamos los valores internos
     },                                      //Segundo pide la Dependencia
    [],
  )
  

  return (
    <>
    <h1>Ejemplo practico de useCallBack</h1>
{/* Use callback se utiliza para memorizar metodos (una funcion) en vez de variables */}

{/* a incrementar se le pasara como argumento un metodo, una funcion que permitira re-renderizar el componente hijo, al cambiar constantemente la funcion con cada utilizacion, el useMemo no funciona, y debemos utilizar es useCallBack */}

    <h2>Contador: {counter}</h2>
    <Incrementar incrementar={incrementarPadre}></Incrementar>
    

    </>
  )
}
