
import {useMemo, useState} from 'react'





export const CalculosPesados = () => {
    
    const [listaNumeros, setListaNumeros] = useState([1,2,3,4,5,6,7,8,9,3,4])
    


    //Aqui utilizamos useMemo, para evitar cargas innecesarias. todo lo que este en parentesis del useMemo se guarda en memoria.
    const getCalculo = (listaNumeros) => useMemo(() => {
    console.log("calculando")
    return listaNumeros.reduce((a, b) => a * b)
    },[listaNumeros]) //Aca como en useEffect le pasamos la dependencia que queremos que active el use memo si detecta un cambio.



    const [show, setShow] = useState(true)
    
    const agregarNumero = () => {
    
        setListaNumeros([...listaNumeros, listaNumeros[listaNumeros.length-1] + 1]) // cuando hagamos click en el boton "agregar numero" Con el spreed operator sumamos al resultado un nuevo resultado con un numero mas el ultimo indice del array de esta forma: Escribiendo length -1 nos indexa en el ultimo elemento y +1 para agregar un nuevo numero 
        console.log(listaNumeros)
    }


  return (
    <>
    <h1>Ejemplo practico de useMemo</h1>
    <h2>Calculo:</h2>
    <p>Resultado : {getCalculo(listaNumeros)} </p>

    <button onClick={() => setShow (!show)}>{ show ? 'Show' : 'Hide'}</button>
    <button onClick={()=> agregarNumero()}>Agregar Numeros</button>
    
    </>
  )
}
