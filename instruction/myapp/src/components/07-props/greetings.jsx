

import React from 'react'
import Welcome from './welcome'

const Greetings = () => {
  return (
    <div>
        <h1>Props</h1>

        <Welcome firstName="John" lastName="Doe"/>    
        <Welcome firstName="Ali" lastName="Gel"/>    
        <Welcome firstName="Veli" lastName="Koş"/>    


    </div>
  )
}

export default Greetings