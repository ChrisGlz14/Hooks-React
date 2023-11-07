import { useState } from "react";
import "./App.css";
import ContadorComponent from "./components/ContadorComponent";
import FormComponent from "./components/FormComponent";
import UserComponent from "./components/UserComponent";
import { Suma } from "./components/Suma";
import { Resta } from "./components/Resta";
import { Multiplicacion } from "./components/Multiplicacion";
import { CalculosPesados } from "./components/CalculosPesados";
import { CallBackComponent } from "./components/CallBackComponent";
import { ListaTareasReduce } from "./components/ListaTareasReduce";

function App() {
 
  return (
    <>
      <ContadorComponent />
      <hr />
      <FormComponent />
      <hr />
      <UserComponent />
      <hr />
      <CalculosPesados/>  
      <hr />
      <Suma className="operations"></Suma>
      <hr />
      <Resta className="operations"></Resta>
      <hr />
      <Multiplicacion className="operations"></Multiplicacion>
      <hr />
      <CallBackComponent/>
      <hr />
      <ListaTareasReduce/>
    </>
  );
}

export default App;
