import React from 'react'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import BookLists from './components/BookLists'
import BookDetails from './components/BookDetails'
import Favorites from './components/Favorites'
import Footer from './components/Footer'
import "./components/book.scss";

const App = () => {
  return (
    <div className='App'>
      <Header/>
      <Routes>
        <Route path='/' element={<BookLists/>}/>
        <Route path='/books/:id' element={<BookDetails/>}/>
        <Route path='/favorites' element={<Favorites/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App