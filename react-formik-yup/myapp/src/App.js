import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from './components/Register'
import Login from './components/Login'
import Home from './components/Home'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      
        <Routes>
          
          <Route path='/'>
            <Route index element={<Home/>}/>        
            <Route path='login' element={<Login/>}/>
            <Route path='register' element={<Register/>}/>


          </Route>
          
        </Routes>
       
      </BrowserRouter>
    </div>
  )
}

export default App