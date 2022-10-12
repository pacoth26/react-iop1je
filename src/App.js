import React from "react";
import "./style.css";
import Moto from './Moto.js';
import Carro from './Carro.js';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <Carro
      Marca="Mustang Shelby Cobra"
      Descripcion="Auto deportivo"
      />
      <Moto 
      Marca="Susuki Hayabusa"
      Descripcion="Moto deportiva"
      />
      <p>:)</p>
    </div>
  );
}
