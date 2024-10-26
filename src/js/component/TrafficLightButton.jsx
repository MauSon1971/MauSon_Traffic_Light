import React, {useState} from 'react';

const TrafficLightButton = ({ color, iluminado, cambiarEstado }) => {

  return (
    <button
      className={`btn traffic-light-button ${color} ${iluminado ? "ilumina" : ""}` } onClick={cambiarEstado}></button>
  );
}

export default TrafficLightButton;