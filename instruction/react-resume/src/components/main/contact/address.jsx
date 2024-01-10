import React from "react";
import { TfiEmail, TfiHeadphone } from "react-icons/tfi";

const Address = () => {
	return (
		<>
			<address>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit.
				Expedita, ducimus.
			</address>
			<ul>
				<li>
					<a href="tel:060444434444">
						<TfiHeadphone /> (060) 444 434 444
					</a>
				</li>
				<li>
					<a href="tel:060444434445">
						<TfiHeadphone /> (060) 444 434 445
					</a>
				</li>
				<li>
					<a href="mailto:john@doe.com">
						<TfiEmail /> john@doe.com
					</a>
				</li>
			</ul>
		</>
	);
};

export default Address;
