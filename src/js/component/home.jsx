import React from "react";
import TrafficLight from "./TrafficLight";

const Home = () => {
	return (
		<div className="container-home d-flex flex-column align-items-center justify-content-center">

			<div className="row container-ppal-semaforo">
				<TrafficLight />
			</div>

		</div>
	);
};

export default Home;
