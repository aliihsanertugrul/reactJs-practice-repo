import React from "react";

const Jsx1 = () => {

    const message = "Bu kısım özgürce javascript kullanacağımız bölüm";

    // Allttaki yöntem doğrudan Real DOM u manipule edeceği için React felsefesine aykırı bir durumdur.
    // Zorunda kalmadıkca bu yöntem kullanılmamalıdır.
    //document.getElementById("lblMessage").innerHTML = message;

    // return içinde JSX var ve buranın kendine göre kuralları var.
	return (
		<div>
			<div>Tüm elementler tek bir root element içinde olmalıdır</div>

			<div><b>{message}</b></div>
		</div>
	);
};

export default Jsx1;
