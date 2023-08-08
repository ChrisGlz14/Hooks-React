import { useEffect, useState } from "react";



export const useFetch = (url) => {

    const [state, setState] = useState({
        data : null,
        isLoading : true,
        errors : null
    })

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
        useEffect( ()=> {
            if(!url) return
            getFetch()
        }, [url])

  return {
    data,
    isLoading,
    errors
  }
};

export default useFetch