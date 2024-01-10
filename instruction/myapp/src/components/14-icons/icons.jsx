import React from "react";
import { MdOutlineFlightTakeoff } from "react-icons/md";
import { ImTicket } from "react-icons/im";

// https://react-icons.github.io/react-icons/

const Icons = () => {
	return (
		<div>
			<MdOutlineFlightTakeoff
				className="text-danger"
				style={{ fontSize: "1.5rem" }}
			/>
			<ImTicket color="blue" size="70px" />
		</div>
	);
};

export default Icons;
