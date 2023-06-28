import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = (props) => {
	// console.log("Hola")
	return (
		<div className="text-center">
			<p>{props.centenas}</p>
			<p>{props.decimal}</p>
			<p>{props.unidad}</p>
		</div>
	);
};

export default Home;
