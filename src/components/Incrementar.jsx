import React from "react";

// Utilizamos el react memo para hacer la memorizacion de lo que hay en incrementar tambien para que no se redibuje, se memorizan 2 coas: lo que ingresa y la funcion callbackm useCallBack va de la mano de React.memo()
export const Incrementar = React.memo(({incrementar}) => {

  // el incrementar es una funcion y la guardaremos utilizando useCallBack

  console.log(" soy un boton y me redibujo una y otra vez (sin sentido)")

return  (

// ademas podemos incrementar por parametros para poder incrementar en el valor que yo quiera.
    <button onClick={()=>incrementar(10)}>+1</button>
  )
} )
