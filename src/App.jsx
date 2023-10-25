import { useState } from "react";
import "./App.css";
import ContadorComponent from "./components/ContadorComponent";
import FormComponent from "./components/FormComponent";
import UserComponent from "./components/UserComponent";
import { Suma } from "./components/Suma";
import { Resta } from "./components/Resta";
import { Multiplicacion } from "./components/Multiplicacion";

function App() {
 
  return (
    <>
      <ContadorComponent />
      <hr />
      <FormComponent />
      <hr />
      <UserComponent />
      <hr />
      <Suma className="operations"></Suma>
      <hr />
      <Resta className="operations"></Resta>
      <hr />
      <Multiplicacion className="operations"></Multiplicacion>
    </>
  );
}

export default App;
