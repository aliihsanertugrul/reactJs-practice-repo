import React, { useEffect, useState } from 'react'
import data from "../../assets/data/data.json"
import "./tour.scss"
import Tour from './tour'

const Tours = () => {
    const[tours,setTours]=useState([])

    useEffect(() => {
      let timer=setTimeout(() => {
        setTours(data)
      }, 2000);
    
      return () => {
        clearTimeout(timer)
      }
    }, [])


    const removeById=(id)=>{
        let filteredTours=tours.filter((tour)=>tour.id !==id)
        setTours(filteredTours)
    }
    

  return (
    <div className='header'>
        <div className='nav'>OUR<em>TOURS</em></div>
        <div className="content">
            {
                tours.map((tour)=>(<Tour key={tour.id} {...tour} removeById={removeById} />))


            }
        </div>
    </div>
  )
}

export default Tours