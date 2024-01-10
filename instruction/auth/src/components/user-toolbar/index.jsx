import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useStore } from "../../store";
import { userLogout } from "../../store/user/actions";

const UserToolbar = () => {
	const { userState, dispatchUser } = useStore();
	const { isUserLogin } = userState;

    const handleLogout = () => { 
        const resp = window.confirm("Are you sure to logout?")
        if(!resp) return;

        dispatchUser(userLogout());

     }
	return (
		<div>
			{isUserLogin ? (
				<Button onClick={handleLogout}>Logout</Button>
			) : (
				<Button as={Link} to="/login">
					Login
				</Button>
			)}
		</div>
	);
};

export default UserToolbar;
