import React from "react";
import ProductCard from "./product-card";

const Products = () => {
	return (
		<div>
			<h1>Children prop</h1>

			<ProductCard id="15">
				<h2>Sony X5 Headset</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Cum, consequatur.
				</p>
			</ProductCard>


            <ProductCard id="17">
				<h2>Samsung HD12 Headset</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Cum, consequatur.
				</p>
			</ProductCard>



		</div>
	);
};

export default Products;
