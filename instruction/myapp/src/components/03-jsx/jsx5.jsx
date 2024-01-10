import React from "react";



const Jsx5 = () => {
	const age = 35;

	const users = ["Ali", "Ayşe"];

	if(age>50){

	}
	else{
		
	}


	// Bu kısımda if switch kullanılabilir
	// JSX içinde sadece ternary veya short circuit kullanılabilir


	return (
		<div>
			{age>=18 && <h2>Ehliyet alabilir</h2>}

			{users.length && <p>{users.join("-")}</p>}

			{users.length ? <p>{users.join(" * ")}</p> : null}
		</div>
	);
};

export default Jsx5;
