import React from "react";
import "./style.css";

export default function Carro(props) {
  const estiloDiv={
    backgroundColor: 'black',
    fontFamily:"Sans-serif"
  };

  const estiloH1={
    color: 'blue'
  };

  const estilop={
    color: 'blue'
  };

  const estiloimg={
 border: "solid thick blue",
	borderRadius: "1em"
  };
  return (
    <div style={estiloDiv}>
      <h1 style={estiloH1}>Soy un Auto {props.Marca}</h1>
      <img style={estiloimg}
      src="https://www.ford.mx/content/dam/Ford/website-assets/latam/mx/nameplate/shelby-gt500/2022/colores/franjas-blancas/colorizer/azul-supernova/ford-mustang-shelby-gt500-2022-auto-franjas-blancas-azul-supernova.jpg.dam.full.high.jpg/1653917850706.jpg"
      alt="Imagen de la moto"
      width="250px"/>
      <p style={estilop}>{props.Descripcion}</p>
    </div>
  );
}