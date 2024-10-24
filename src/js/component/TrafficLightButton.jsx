import React, {useState} from 'react';

const TrafficLightButton = ({ color }) => {
    const [iluminado, setIluminado] = useState(false);
    const iluminaLuces = () => {
        setIluminado(!iluminado);
    }
  return (
    <button
      className={`btn traffic-light-button ${color} ${iluminado ? "ilumina" : ""}` } onClick={iluminaLuces}></button>
  );
}

export default TrafficLightButton;