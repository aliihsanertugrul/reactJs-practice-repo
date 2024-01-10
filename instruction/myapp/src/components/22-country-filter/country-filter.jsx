import React, { useEffect, useState } from "react";
import data from "./countries.json";
import { Container, Form, Table } from "react-bootstrap";

const CountryFilter = () => {
	const [countries, setCountries] = useState(data);
	const [searchText, setSearchText] = useState("");

	useEffect(() => {
		const arr = data.filter((item) =>
			item.name
				.toLocaleLowerCase()
				.includes(searchText.toLocaleLowerCase())
		);
		setCountries(arr);
	}, [searchText]);

	return (
		<Container className="mt-3">
			<Form.Control
				placeholder="Type something..."
				onChange={(e) => setSearchText(e.target.value)}
			/>

			<Table striped bordered hover className="mt-3">
				<thead>
					<tr>
						<th>#</th>
						<th>Country Name</th>
						<th>Country Code</th>
					</tr>
				</thead>
				<tbody>
					{countries.map((item, index) => (
						<tr key={item.code}>
							<td>{index + 1}</td>
							<td>{item.name}</td>
							<td>{item.code}</td>
						</tr>
					))}
				</tbody>
			</Table>
		</Container>
	);
};

export default CountryFilter;
