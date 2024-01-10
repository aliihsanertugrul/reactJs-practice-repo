import React from "react";

const Style2 = () => {


    const titleStyle = {
        fontSize: "2.5rem",
        color: "orange",
       // fontWeight: "bolder",
        textAlign: "center"
    }


	return (
		<div>
			<h1 style={titleStyle}>Internal Styles</h1>
			<p>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit.
				Explicabo deleniti saepe, expedita nam nobis ab omnis assumenda,
				fuga enim hic eveniet ducimus eum soluta rerum, quibusdam
				voluptas in! Nesciunt, laudantium.
			</p>

			<h2 style={{...titleStyle, fontSize:"1.5rem"}}>Advantages of Internal Styles</h2>
			<p>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga,
				quae. Vel magnam cum debitis totam dignissimos culpa inventore,
				nam soluta neque veritatis fuga recusandae repellendus odit
				ducimus quos quisquam. Facilis.
			</p>

            <h2 style={{...titleStyle, fontSize:"1.5rem"}}>Disadvantages of Internal Styles</h2>
			<p>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga,
				quae. Vel magnam cum debitis totam dignissimos culpa inventore,
				nam soluta neque veritatis fuga recusandae repellendus odit
				ducimus quos quisquam. Facilis.
			</p>
		</div>
	);
};

export default Style2;
