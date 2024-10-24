import React, {useState} from 'react';

const TrafficLightButton = ({ color, iluminado, onClick }) => {
    // const [iluminado, setIluminado] = useState(false);
    // const iluminaLuces = () => {
    //     setIluminado(!iluminado);
    // }
  return (
    <button
      className={`btn traffic-light-button ${color} ${iluminado ? "ilumina" : ""}` } onClick={onClick}></button>
  );
}

export default TrafficLightButton;