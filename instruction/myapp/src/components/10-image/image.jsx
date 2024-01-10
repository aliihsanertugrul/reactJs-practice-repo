import React from "react";
import frontendImage from "./frontend.jpg";
import homeIcon from "./home.svg";
import salesForce from "./salesforce.png";

const Image = () => {
	return (
		<div>
			<h2>Static image import</h2>
			<p>
				Eğer image ler public içindeyse ve herhangi bir optimizasyon
				gerekli değilse bu yöntem kullanılır
			</p>
			<img src="logo192.png" alt="logo" />

			<h2>Dynamic image import</h2>
			<p>
				Image nerede olursa olsun import edilebilir. Eğer image boyutu
				10Kb ve altındaysa ve dosya formatı jpg veya png ise image base64 olarak kodlanıp bundle içine
				alınır. Diğer durumda image public içine kaydedilir.
			</p>
			<img src={frontendImage} alt="logo" width="200" />
			<img src={homeIcon} alt="logo" width="70" />
			<img src={salesForce} alt="logo" width="70" />
		</div>
	);
};

export default Image;
