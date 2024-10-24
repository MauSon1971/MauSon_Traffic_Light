import React, { useState } from "react";
import TrafficLightButton from "./TrafficLightButton";

const TrafficLight = () => {

    const [botonIluminado, setBotonIluminado] = useState(null);

    const estadoColorBtn = (color) => {
        if (botonIluminado === color){
            setBotonIluminado(null);
        }else{
            setBotonIluminado(color);
        }
    };

    return(
        <div className="traffic-light-container">
            <div className="traffic-light-soporte"></div>
            <div className="traffic-light-box d-flex flex-column align-items-center">
                <TrafficLightButton color="rojo" iluminado={botonIluminado === "rojo"} onClick={() => estadoColorBtn("rojo")}
                    className="mt-3" />;
                <TrafficLightButton color="amarillo" iluminado={botonIluminado === "amarillo"} onClick={() => estadoColorBtn("amarillo")}
                    className="mt-3" />;
                <TrafficLightButton color="verde" iluminado={botonIluminado === "verde"} onClick={() => estadoColorBtn("verde")}
                    className="mt-3" />;
            </div>
        </div>

    );
}
export default TrafficLight