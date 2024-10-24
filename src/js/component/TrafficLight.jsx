import React from "react";
import TrafficLightButton from "./TrafficLightButton";

const TrafficLight = () => {

    return(
        <div className="traffic-light-box d-flex flex-column align-items-center">
            <TrafficLightButton color ="rojo" className="mt-3"/>
			<TrafficLightButton	color ="amarillo" className="mt-3"/>
			<TrafficLightButton	color ="verde" className="mt-3"/>
        </div>

    );
}
export default TrafficLight