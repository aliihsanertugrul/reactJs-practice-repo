import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import UseEffect2 from "./useeffect2";

const UseEffect1 = () => {
	const [message, setMessage] = useState("");
	const [error, setError] = useState("");
	const [showForm, setShowForm] = useState(false);

	//console.log("Render", message);

	//  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
	//  !!!! USEEFFECT ASENKRON ÇALIŞIR !!!!
	//  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
	// useEffect ler her zaman JSX den sonra çalışır

	useEffect(() => {
		console.log(
			"MOUNTING: Bu bölümdeki kodlar sadece render durumunda çalışır. Re-render larda çalışmaz"
		);

		return () => {
			// Bu bölümde abonelikler iptal edilebilir, çeşitli değerler sıfırlanabilir, bağlantılar kapatılabilir.
			console.log(
				"UNMOUNTING: Bu bölümdeki kodlar component hafızadan atılmadan hemen önce çalışır."
			);
		};
	}, []);

	useEffect(() => {
		console.log(
			"UPDATING: Bu bölümdeki kodlar render ve rerender durumlarında çalışır. Ancak JSX kısmı çalıştıktan sonra çalışır."
		);
	});

	useEffect(() => {
		console.log(
			"UPDATING-DA: Bu bölümdeki kodlar sadece dependecy array içindeki değerlerin değişmesi durumunda çalışır. useEffect bu değişkenleri takip eder."
		);
	}, [error]); // Dependency Array içinde birden fazla takip edilecek deişken olabilir.

	return (
		<div className="text-center mt-5">
			<Button onClick={() => setMessage(Math.random())}>
				Set Message
			</Button>
			<Button
				variant="danger"
				className="ms-3"
				onClick={() => setError(Math.random())}
			>
				Set Error
			</Button>
			<Button
				variant="warning"
				className="ms-3"
				onClick={() => setShowForm(prev=>!prev)}
			>
				Toggle Form
			</Button>
			
			{showForm ? <UseEffect2/> : "Lütfen giriş yapın"}
			

		</div>
	);
};

export default UseEffect1;
