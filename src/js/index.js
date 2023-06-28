//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application
// ReactDOM.render(<Home />, document.querySelector("#app"));

let decimal = 0
let unidad = 0
let centenas = 0

setInterval(() => {
 unidad ++
 if(unidad >= 9) {
    unidad = 0
    decimal ++
 }
 if(decimal >= 9) {
    decimal = 0
    centenas ++
 }
    ReactDOM.render(<Home unidad={unidad} decimal={decimal} centenas={centenas} />, document.querySelector("#app"));} , 1000)
