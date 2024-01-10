import React from "react";
import products from "./products.json";
import { Col, Container, Row } from "react-bootstrap";
import ProductCard from "./product-card";

const ProductList = () => {
	return (
		<Container className="flex-grow-1 my-5">
			<Row xs={1} sm={2} md={3} lg={4} className="g-3">
				{products.map((item) => (
					<Col key={item.id}>
						<ProductCard {...item} />
					</Col>
				))}
			</Row>
		</Container>
	);
};

export default ProductList;
