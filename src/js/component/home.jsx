import React from "react";
import TrafficLight from "./TrafficLight";

//create your first component
const Home = () => {
	return (
		<div className="container-principal d-flex justify-content-center align-items-center">
		<TrafficLight />
	  </div>
	);
};

export default Home;
