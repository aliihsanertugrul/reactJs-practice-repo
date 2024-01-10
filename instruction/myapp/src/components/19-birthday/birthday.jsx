import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import data from "./people.json";
import Person from "./person";

const Birthday = () => {
    const [people, setPeople] = useState(data)

	const deletePerson = (id) => { 
		console.log(id)
		if(!window.confirm("Are you sure to delete?")) return;

		const arr = people.filter(item => item.id !== id )
		setPeople(arr);
	}


	return (
		<Container className="my-3 py-3">
			<h1>Bugün Doğanlar</h1>
			<p>Doğum günü bugün olan {people.length} kişi bulundu</p>

			{people.map((item) => (
				<Person key={item.id} {...item} deletePerson={deletePerson}/>
			))}

            <Button variant="danger" onClick={()=> setPeople([])}>Temizle</Button>
            <Button variant="info" className="ms-3" onClick={()=> setPeople(data)}>Yenile</Button>
		</Container>
	);
};

export default Birthday;
