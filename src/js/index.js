//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Home } from "./component/home.js";

import { SimpleCounter } from "./component/home.js";

let counter = 0;

setInterval(function() {
	ReactDOM.render(
		<SimpleCounter seconds={counter} />,
		document.getElementById("app")
	);
	counter += 1;
}, 1000);
