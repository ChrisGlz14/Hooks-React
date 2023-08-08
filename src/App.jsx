import { useState } from "react";
import "./App.css";
import ContadorComponent from "./components/ContadorComponent";
import FormComponent from "./components/FormComponent";
import UserComponent from "./components/UserComponent";

function App() {
 
  return (
    <>
      <ContadorComponent />
      <hr />
      <FormComponent />
      <hr />
      <UserComponent />
    </>
  );
}

export default App;
