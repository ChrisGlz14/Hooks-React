import { useState } from "react";
import {useForm } from "../Hooks/useForm";

export const FormComponent = () => {
  const initialForm = {
    userName: "",
    email: "",
    password: "",
  };
  // luego de realizar la logica y vemos que funciona se comienza a migrar al custom Hook

  const { formState, onInputChange } = useForm(initialForm);

  const { userName, email, password } = formState

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(formState);
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="mb-3">
        <label htmlFor="userName" className="form-label">
          UserName
        </label>
        <input
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
