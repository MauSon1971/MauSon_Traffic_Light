import React, { useEffect, useState } from "react";
import TrafficLightButton from "./TrafficLightButton";

const TrafficLight = () => {

    const [botonIluminado, setBotonIluminado] = useState(null);
    const [cuartaLuz, setCuartaLuz] = useState(false);
    const [secuenciaActiva, setSecuenciaActiva] = useState(false);
    const intervalRef = React.useRef(null);

    const colores = cuartaLuz ? [null, "rojo", "amarillo", "verde", "purple"] : [null, "rojo", "amarillo", "verde"]

    const handleEstadoColorBtn = (color) => {
        if (botonIluminado === color) {
            setBotonIluminado(null);
        } else {
            setBotonIluminado(color);
        }
    };

    const handleColor = () => {
        setBotonIluminado((prevColor) => {
            const colorIndex = colores.indexOf(prevColor); // posición del botón iluminado
            const colorNextIndex = (colorIndex + 1) % colores.length; // siguiente color en secuencia
            return colores[colorNextIndex];
        });
    };


    const handleCuartaLuz = () => {
        setCuartaLuz(prev => !prev) //cambia el valor opuesto de la variable
    }

    const iniSeq = () => {
        if(!secuenciaActiva) {
            setSecuenciaActiva(true);
            intervalRef.current = setInterval(() => {
                handleColor();
            }, 1000);
        }
    }
    
    const stopSeq = () => {
        clearInterval(intervalRef.current);
        setSecuenciaActiva(false);
    }

    useEffect( () => {return () => clearInterval(intervalRef.current);},[]);


    return (
        <div className="d-flex flex-column align-items-center justify-content-center">
            <div className="traffic-light-container">
                <div className="traffic-light-soporte"></div>
                <div className="traffic-light-box d-flex flex-column align-items-center">
                    <TrafficLightButton color="rojo" iluminado={botonIluminado === "rojo"} cambiarEstado={() => handleEstadoColorBtn("rojo")}
                        className="mt-3" />
                    <TrafficLightButton color="amarillo" iluminado={botonIluminado === "amarillo"} cambiarEstado={() => handleEstadoColorBtn("amarillo")}
                        className="mt-3" />

                    <TrafficLightButton color="verde" iluminado={botonIluminado === "verde"} cambiarEstado={() => handleEstadoColorBtn("verde")}
                        className="mt-3" />
                    {cuartaLuz && <TrafficLightButton color="purple" iluminado={botonIluminado === "purple"} cambiarEstado={() => handleEstadoColorBtn("purple")}
                        className="mt-3" />} 
                </div>
            </div>
            <div className="row container-ppal-acciones">
                <button type="button" className="btn btn-secondary mt-3" onClick={handleColor}>Cambia Secuencia</button>
                <button type="button" className="btn btn-secondary mt-3" onClick={handleCuartaLuz}>Muestra 4to Btn</button>
                <button type="button" className="btn btn-primary mt-3" onClick={iniSeq}>Inicia Secuencia Auto</button>
                <button type="button" className="btn btn-danger mt-3" onClick={stopSeq}>Detiene Secuencia Auto</button>

            </div>

        </div>
    );
};

export default TrafficLight