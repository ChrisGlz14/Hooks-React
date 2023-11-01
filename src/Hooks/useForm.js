import { useState } from "react";




export const useForm = (initialForm = {}) => {
  const [formState, setFormState] = useState(initialForm);

  const onInputChange = ({ target }) => {
    // desestructuramos name y value para tenerlos por separado
    const { name, value } = target

    // Enviamos el formState con el spread operator para que se envie la informacion completa manteniendo los otros dos que no se modifican 
    setFormState({
      ...formState,  
      [name]: value, //Para que el name se modifique debe ponerse entre corchetes porque esta del lado de la key
    });
  };
  return {
    formState,
    onInputChange,
  };
}

export default useForm;
