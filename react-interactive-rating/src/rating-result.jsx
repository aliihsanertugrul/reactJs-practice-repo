import React from 'react'
import ratingImg from "./images/illustration-thank-you.svg"
const RatingResult = ({getrate}) => {
  return (
    <div className='containerRating ratingMain p-3 text-center'>
        <img src={ratingImg} alt="" />
        <h4>You selected <span>{getrate}</span> out of 5</h4>
        <h1>Thank you!</h1>
        <p>We appreciate you taking the time to give a rating. If you ever need more support, 
  don’t hesitate to get in touch!</p>
    </div>
  )
}

export default RatingResult