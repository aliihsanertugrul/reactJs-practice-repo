import React from "react";
import { LiaMap } from "react-icons/lia";

const DataRow = ({flag, name, population, capitals, currencies, map }) => {
	return (
		<tr>
			<td><img src={flag} alt={name} className="img-fluid"/></td>
			<td>{name}</td>
			<td>{population}</td>
			<td>{capitals}</td>
			<td>{currencies}</td>
			<td><a href={map} target="_blank" rel="nofollow noreferrer noopenner"><LiaMap/></a></td>
		</tr>
	);
};

export default DataRow;
