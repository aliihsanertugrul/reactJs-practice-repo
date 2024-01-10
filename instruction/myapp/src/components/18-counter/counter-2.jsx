import React, { useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { ImMinus, ImPlus } from "react-icons/im";
import { MdLockReset } from "react-icons/md";

const Counter2 = () => {
	const [counter, setCounter] = useState(0);

	return (
		<div className="text-center m-5">
			<ButtonGroup aria-label="Basic example">
				<Button
					variant="info"
					onClick={() => setCounter((prev) => prev - 1)}
				>
					<ImMinus />
				</Button>
				<Button variant="secondary" disabled>
					{counter}
				</Button>
				<Button
					variant="warning"
					onClick={() => setCounter((prev) => prev + 1)}
				>
					<ImPlus />
				</Button>
				<Button variant="danger" onClick={() => setCounter(0)}>
					<MdLockReset />
				</Button>
			</ButtonGroup>
		</div>
	);
};

export default Counter2;
