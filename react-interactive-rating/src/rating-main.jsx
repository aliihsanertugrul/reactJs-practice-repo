import React, { useState } from 'react'
import ratings from "./btnRating.json"
import svgFav from "./images/icon-star.svg"
import { useNavigate } from 'react-router-dom'

const RatingMain = ({setGetrate}) => {
    const navigate=useNavigate();
    
    const ratingResult = () => {
        setGetrate(prev=>prev);
        navigate("/rating")
    }
  return (
    <div className='containerRating ratingMain p-3'>
        <img src={svgFav} alt="star" />
        <h2>  How did we do?</h2>
        <p>Please let us know how we did with your support request. All feedback is appreciated 
  to help us improve our offering!</p>
        <div>
            {
                ratings.map((item)=>(
                    <button className='btn rounded-5 text-bg-light m-2 fs-1 ' key={item.id} onClick={()=>setGetrate(item.rating)}>{item.rating}</button>
                ))
            }
        </div>
        <button className='btnRating  w-100 ' onClick={()=>ratingResult()}>SUBMIT</button>

    </div>
  )
}

export default RatingMain