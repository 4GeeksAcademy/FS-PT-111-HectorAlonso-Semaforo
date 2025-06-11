import React from "react";

//include images into your bundle
import { SelectorColores } from "./SelectorColores";
import { SemaforoTemporal } from "./SemaforoTemporal";
import { CambioTipo } from "./CambioTipo";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<br />
			<CambioTipo />
		</div>
	);
};

export default Home;