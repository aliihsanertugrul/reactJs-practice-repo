import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { UseStorageContext } from "./context/AppContext";

const Favorites = () => {

  const{addToFavorites,favorites,removeFromFavorites}=UseStorageContext();

  const favoriteChecker = (id) => {
    const control=favorites.some((book)=>book.id===id);
    return control;
  }
  return (
    <Container className="text-center">
			<Row className="g-5 m-4 favorites">
				{favorites.map((book) => (
					<Col key={book.id} sm={12} lg={6} xl={4}>
						<Card style={{ width: "25rem" }} className="h-100 favorite-list">
							<Card.Img
								variant="top"
								src={book.image_url}
								style={{
									height: "500px",
									width: "400px",
									objectFit: "cover",
								}}
							/>
							<Card.Body>
								<Card.Title>{book.title}</Card.Title>

								<Card.Text>{book.authors}</Card.Text>
								{favoriteChecker(book.id) ? (
									<Button
										className="btn"
										onClick={() =>
											removeFromFavorites(book.id)
										}
									>
										Remove From Favorites
									</Button>
								) : (
									<Button
										className="btn"
										onClick={() => addToFavorites(book)}
									>
										Add To Favorites
									</Button>
								)}
							</Card.Body>
						</Card>
					</Col>
				))  } 
			</Row>
		</Container>
  );
};

export default Favorites;
