import { useState } from "react";
import "./App.css";
import ContadorComponent from "./components/ContadorComponent";
import FormComponent from "./components/FormComponent";
import UserComponent from "./components/UserComponent";
import { Suma } from "./components/Suma";
import { Resta } from "./components/Resta";

function App() {
 
  return (
    <>
      <ContadorComponent />
      <hr />
      <FormComponent />
      <hr />
      <UserComponent />
      <hr />
      <Suma />
      <hr />
      <Resta></Resta>
    </>
  );
}

export default App;
