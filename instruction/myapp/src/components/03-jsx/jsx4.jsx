import React from "react";

const Jsx4 = () => {
	const isAdmin = true;

	/*
		JSX içinde html blokları mutlaka bir parent içinde olmak zorundadır.
		Ternary içinde de her bir bölüm için parent gereklidir.
		Eğer HTML olarak bir parent eklemek istemiyorsak React.Fragment componnetini parent olarak kullanabiliriz

		<React.Fragment>
			....
		</React.Fragment>

		veya

		<>
			....
		</>
	
	*/

	return (
		<div id="jsx4">
			{isAdmin ? <span>Admin</span> : <span>User</span>}

			{isAdmin ? (
				<>
					<h2>Admin Menu</h2>
					<ul>
						<li>Create User</li>
						<li>Update User</li>
						<li>Delete User</li>
					</ul>
				</>
			) : (
				<>
					<h2>User Menu</h2>
					<ul>
						<li>Login</li>
						<li>Register</li>
					</ul>
				</>
			)}
		</div>
	);
};

export default Jsx4;
