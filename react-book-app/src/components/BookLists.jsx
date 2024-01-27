import React, { useEffect, useState } from "react";
import "./book.scss";
import { API_URL } from "../Api.jsx";
import axios from "axios";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { UseStorageContext } from "./context/AppContext.jsx";
import { useNavigate } from "react-router-dom";
import "./book.scss";

const BookLists = () => {
  const [books, setBooks] = useState([]);
  // console.log(UseStorageContext())
  const navigate=useNavigate()

  const {addToFavorites,favorites, removeFromFavorites}=UseStorageContext()

  const favoriteChecker = (id) => {
    const control=favorites.some((book)=>book.id===id);
    return control;
  }

  useEffect(() => {
    const getBooksData = async () => {
      try {
        const resp = await axios.get(API_URL);
        const data = resp.data;
        setBooks(data);
        // console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    getBooksData();
  }, []);

  return (
    <Container>
			<Row className="g-5 m-4 book-list">
				{books.map((book) => (
					<Col key={book.id} sm={12} lg={4} xl={4}>
						<Card style={{ width: "25rem"}} className="cards book">
							<Card.Img
								variant="top"
								src={book.image_url}
								style={{
									height: "500px",
									width: "400px",
									objectFit: "cover",
								}}
          
								onClick={()=>navigate(`/books/${book.id}`)}
							/>
							<Card.Body >
								<Card.Title>{book.title}</Card.Title>

								<Card.Text className="">{book.authors}</Card.Text>
								{
									favoriteChecker(book.id) ? (<Button  className="btn w-100 mb-0" onClick={()=>removeFromFavorites(book.id)}>

										Remove From Favorites
									</Button>) : (<Button className="btn w-100 mb-2"  onClick={()=>addToFavorites(book)} >Add To Favorites</Button>)


								}
							</Card.Body>
						</Card>
					</Col>
				))}
			</Row>
		</Container>
  );
};

export default BookLists;
