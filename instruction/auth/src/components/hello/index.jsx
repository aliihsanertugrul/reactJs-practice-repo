import React from "react";
import { useStore } from "../../store";

const Hello = () => {
	const { userState } = useStore();
	const { user } = userState;

	return (
		<div className="mb-3 fs-1 fw-bold">
			Hello <em>{user.firstName} {user.lastName}</em>
		</div>
	);
};

export default Hello;
