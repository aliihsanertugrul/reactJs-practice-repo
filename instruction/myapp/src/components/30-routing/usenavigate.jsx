import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Usenavigate = () => {
    const navigate = useNavigate();
    
    
    useEffect(() => {
		const timer = setTimeout(() => {
            navigate("/")
        }, 10000);

		return () => {
			clearTimeout(timer);
		};
	}, []);

	return (
		<div>
			<h3>Bu sayfa sizi 10 sn sonra ana sayfaya yönlendirecek</h3>
		</div>
	);
};

export default Usenavigate;
