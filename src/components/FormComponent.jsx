import { useState, useRef, useEffect } from "react";
import {useForm } from "../Hooks/useForm";

export const FormComponent = () => {

  const focusRef = useRef() //Con useRef Podemos guardar un elemento del DOM y utilizarlo para algo, es decir utilizarlo como referencia para utilizarlo de alguna forma.

  const initialForm = {
    userName: "",
    email: "",
    password: "",
  };
  // Luego de realizar la lógica y vemos que funciona se comienza a migrar al custom Hook

  //Traemos el useForm (Hook) que nos devolverá el formState y el onInputChange, al useForm le pasamos initialForm ya que puede ser cambiante.
  const { formState, onInputChange } = useForm(initialForm);


  // Desestructuramos el initialForm para poder utilizar las constantes por separado
  const { userName, email, password } = formState //De este formState que recibimos tenemos userName, email y password que nos ayudaran a rellenar los datos.

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(formState);
  };

  useEffect(() => {
    focusRef.current.focus()
  }, [])
  

  return (
    
  
    <form onSubmit={onSubmit}>
      <h1>Ejemplo de useRef, useEffect y useState</h1>
      <div className="mb-3">
        <label htmlFor="userName" className="form-label">
          UserName
        </label>
        <input
          ref= {focusRef} //Para utilizar useRef igualamos a una referencia puntual
          type="userName"
          className="form-control"
          name="userName"
          placeholder="UserName"
          value={userName} 
          onChange={onInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          name="email"
          placeholder="email"
          value={email}
          onChange={onInputChange}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          name="password"
          placeholder="Password"
          value={password}
          onChange={onInputChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  ); 
};

export default FormComponent;
