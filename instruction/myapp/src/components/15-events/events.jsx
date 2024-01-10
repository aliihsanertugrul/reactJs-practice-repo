import React from "react";

const Events = () => {
	const sayHello = () => {
		alert("Hello");
	};

	const sayGoodbye = (name) => {
		alert(`Goodbye ${name}`);
	};

	return (
		<div>
			{/* Event listener a (onClick) handler (sayHello) ataması yapılırken parantez () kullanılmaz. Kullnaıldığında bu bir fonksiyon çağrısı olarak algılanır ve fonksiyon hemen çağrılır.*/}
			<div onClick={sayHello}>Say Hello</div>

			{/* handler a (sayGoodbye) parametre gönderilecekse aşağıdaki gibi bir fonksiyon aracılığı ile gönderilmelidir. */}
			<div onClick={() => sayGoodbye("John")}>Say Goodbye</div>
		</div>
	);
};

export default Events;
