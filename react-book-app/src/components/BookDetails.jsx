import React, { useEffect, useState } from 'react'
import { BOOK_DETAILS_URL } from '../Api'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const BookDetails = () => {
const [books, setBooks] = useState({})
const {id}=useParams()
console.log(id)

useEffect(() => {
  
const getBookDetails =async (id) => {

  try {
    const resp=await axios.get(`${BOOK_DETAILS_URL}/${id}`)
    const data=resp.data;
    setBooks(data)
    console.log(data)
  } catch (error) {
    console.log(error)
  }
  
}

getBookDetails(id)

}, [id])


  return (
    <div className='book-details'>
      <div className='book-image text-center'>
        <h2>{books.title}</h2>
        <img src={books?.image_url} alt={books.title} />
      </div>

      <div className="description">
        <h3>Description</h3>
        <p>{books.description}</p>
        <h3>Authors</h3>
        <p>{books.authors}</p>
        <h3>Genres</h3>
        <p>{books.genres}</p>
      </div>
    </div>
  )
}

export default BookDetails