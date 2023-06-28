import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = (props) => {
	// console.log("Hola")
	return (
		<div className="container">
			<div className="row bg-dark text-light">
				<div className="col-1">
					<i className="far fa-clock"></i>
				</div>
				<div className="col-1">
					<p>{props.centenas}</p>
				</div>
				<div className="col-1">
					<p>{props.decimal}</p>
				</div>
				<div className="col-1">
					<p>{props.unidad}</p>
				</div>
			</div>
		</div>
	);
};

export default Home;
