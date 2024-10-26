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

    const toggleCuartaLuz = () => {
        setCuartaLuz(prev => !prev) //cambia el valor opuesto de la variable
    }

    const toggleSecuencia = () => {
        if (!secuenciaActiva) {
            setSecuenciaActiva(true);
            intervalRef.current = setInterval(handleColor, 1000)
        } else {
            clearInterval(intervalRef.current);
            setSecuenciaActiva(false);
            intervalRef.current = null;
        }
    }

    useEffect(() => { return () => clearInterval(intervalRef.current); }, []);

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
                <button type="button" className="btn btn-secondary mt-3" onClick={handleColor}>Next Light</button>
                <button type="button" className={`btn mt-3 ${cuartaLuz ? 'btn-danger' : 'btn-success'}`} onClick={toggleCuartaLuz}>
                    {cuartaLuz ? 'Hide Btn #04' : 'Show Btn #04'}</button>
                <button type="button" className={`btn mt-3 ${secuenciaActiva ? 'btn-danger' : 'btn-success'}`} 
                onClick={toggleSecuencia}>{secuenciaActiva ? "Stop Auto" : "Run Auto"}</button>
            </div>

        </div>
    );
};

export default TrafficLight