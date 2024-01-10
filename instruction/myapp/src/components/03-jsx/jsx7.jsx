import React from "react";

const Jsx7 = () => {
	return (
		<div>
            {/* Buraad Map iteration methodu for loop gibi kullanıldı */}
			{[...new Array(10)].map((_, index) => (
				<p key={index}>Hello For Loop with Map</p>
			))}
		</div>
	);
};

export default Jsx7;
