import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import HeaderRow from "./header-row";
import DataRow from "./data-row";
const API_BASE_URL = "https://restcountries.com/v3.1";

const Countries = () => {
	const [countries, setCountries] = useState([]);

	const loadData = async () => {
		const resp = await axios(`${API_BASE_URL}/all`);
		const data = resp.data;

		const arr = data.map((item) => ({
			id: item.cca2,
			flag: item.flags.png,
			name: item.name.common,
			population: item.population,
			capitals: item.capital?.join("-"),
			currencies: item.currencies ? Object.values(item.currencies).map(c=>c.name).join("-") : "-",
			map: item.maps.googleMaps,
		}));

		setCountries(arr);
	};

	useEffect(() => {
		loadData();
	}, []);

	return (
		<div>
			<Table striped bordered hover>
				<thead>
					<HeaderRow />
				</thead>
				<tbody>
					{countries.map((item) => (
						<DataRow key={item.id} {...item} />
					))}
				</tbody>
			</Table>
		</div>
	);
};

export default Countries;
