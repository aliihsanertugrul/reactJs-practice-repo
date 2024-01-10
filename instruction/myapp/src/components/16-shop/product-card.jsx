import React from "react";
import { Button, Card } from "react-bootstrap";

const ProductCard = ({ id, image, title, desc, price }) => {
	const addToCart = () => {
		// Burada API çağrısı yapılıp, ürün ID bilgisi ve sepet bilgisi gönderilir.
		// await updateCart(id, 1);

		alert(`${title} isimli ürün sepete eklendi`);
	};

	return (
		<Card>
			<Card.Body className="text-center">
				<Card.Img src={`img/${image}`} />
				<Card.Title className="mt-5 mt-sm-3">{title}</Card.Title>
				<Card.Text>{desc}</Card.Text>
				<Card.Subtitle>${price}</Card.Subtitle>
				<Button
					variant="outline-warning"
					className="mt-3"
					onClick={addToCart}
				>
					AddToCart
				</Button>
			</Card.Body>
		</Card>
	);
};

export default ProductCard;
