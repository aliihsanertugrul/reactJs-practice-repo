import React, { useState } from 'react'
import MainCard from './main-card'
import ThanksCard from './thanks-card'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  const [inputValue, setInputValue] = useState("")
  
    
  return (
    <div>
      
        <Routes>
            <Route path="/" element={<MainCard inputValue={inputValue} setInputValue={setInputValue}/>}/>
            <Route path="/subscribe" element={<ThanksCard inputValue={inputValue}/>}/>
        </Routes>
    
    </div>
  )
}

export default App