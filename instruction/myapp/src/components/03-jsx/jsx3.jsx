import React from "react";

const Jsx3 = () => {
	const student = {
		name: "Ali",
		no: "547",
		city: "Istanbul",
	};

	//const {name, no, city} = student;

	return (
		<div>
			{/* Javascript ifadesi kullanılacağı zaman mutlaka süslü parantez içine yazılmalıdır. */}

			<table>
				<tbody>
					<tr>
						<td>Name</td>
						<td>{student.name}</td>
					</tr>
					<tr>
						<td>No</td>
						<td>{student.no}</td>
					</tr>
					<tr>
						<td>City</td>
						<td>{student.city}</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default Jsx3;
