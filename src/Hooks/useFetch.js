import { useEffect, useState } from "react";



export const useFetch = (url) => {
  //Custom hook
    const [state, setState] = useState({
        data : null,
        isLoading : true, //isLoading permite aguardar a hacer el fetch
        errors : null
    })

    //Aqui llamamos nuestro custom Hook, desestructurando lo que importaremos (data, isLoading,errors)
    const {data, isLoading, errors} = state 



    
    const getFetch = async() => {
        try {
            const res = await fetch(url)
            const data = await res.json();
            console.log("datos", data);
            setState({
                data,
                isLoading: false,
                errors : null
            })
          } catch (error) {
            setState({
                data:null,
                isLoading: false,
                errors : error
            })
          }
        
        }
        
        // Con useEffect se ejecutará la funcion callback que querenos que se ejecute una vez y luego vienen las dependencias y un array, si tuvieramos diferentes dependencias, cada vez que se modifique alguna se volverá a llamar el useEffect, lo que hace useEffect es el efecto secundario de la modificacion de alguna de las dependencias. es decir escucha los cambios y ante cada cambio se ejecuta la funcion de dentro.
        
        //En useEffect no se puede utilizar async y await, se pueden utilizar promesas o crear una constante fuera del scope del useEffect donde si puede ser asincrono con async y await.
        useEffect( ()=> {
          if(!url) return
          getFetch()
        }, [url])
        // Aqui se utiliza para que se cargue solamente al comiendo del conmponente. 

  return {
    data,
    isLoading,
    errors
  }
};

export default useFetch