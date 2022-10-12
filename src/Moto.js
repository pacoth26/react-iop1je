import React from "react";
import "./style.css";

export default function Moto(props) {
  const estiloDiv={
    backgroundColor: 'black',
    fontFamily:"Sans-serif"
  };

  const estiloH1={
    color: 'orange'
  };

  const estilop={
    color: 'orange'
  };

  const estiloimg={
 border: "solid thick orange",
	borderRadius: "1em"
  };
  return (
    <div style={estiloDiv}>
      <h1 style={estiloH1}>Soy una Moto {props.Marca}</h1>
      <img style={estiloimg}
      src="https://suzuki-motos.s3.amazonaws.com/assets/prod-publish/8165/hayabusa.png"
      alt="Imagen de la moto"
      width="250px"/>
      <p style={estilop}>{props.Descripcion}</p>
    </div>
  );
}