import React from "react";
import { useParams } from "react-router-dom";

const Useparams = () => {
	const { id } = useParams();

	return (
		<div>
			<blockquote>
				Url den gelen parametreyi alabilmek için useParams hook u
				kullanılır
			</blockquote>
			<h3>id: {id}</h3>
		</div>
	);
};

export default Useparams;
