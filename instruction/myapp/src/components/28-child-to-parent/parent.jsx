import React, { useState } from "react";
import ChildComp from "./child";

const ParentComp = () => {
	const [counter, setCounter] = useState(0);

	const handleCounter = (val) => {
		setCounter((prev) => prev + val);
	};

	return (
		<div>
			<div>Counter: {counter}</div>
			<ChildComp counter={counter} handleCounter={handleCounter} />
		</div>
	);
};

export default ParentComp;
