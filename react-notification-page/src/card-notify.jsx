import React from 'react'
import mark from "./assets/images/avatar-mark-webber.webp"
import angela from "./assets/images/avatar-angela-gray.webp"
import { FaRegThumbsUp } from "react-icons/fa";

const CardNotify = ({readed}) => {
    console.log(readed)
  return (
    <>
    <div className='container bg-body-secondary  d-flex align-items-center mt-5 '>
        <div className='m-3' style={{position:"relative"}}>
            <img src={mark} alt="mark-webber" />
            {readed == true && (
            <FaRegThumbsUp size={30} style={{ position: "absolute", bottom: 0, left: 0 }} />
          )}
        </div>
        <div className='p-3' >
            <h3><strong>Mark Webber </strong>reacted to your recent post <span className='text-primary'>My first tournament today!</span></h3>
            <p>1m ago</p>
        </div>      

    </div>

    <div className='container bg-body-secondary  d-flex align-items-center my-2'>
        <div className='m-3' style={{position:"relative"}}>
            <img src={angela} alt="angela" />
            {readed == true && (
            <FaRegThumbsUp size={30} style={{ position: "absolute", bottom: 0, left: 0 }} />
          )}
        </div>
        <div className='p-3'>
            <h3><strong>Angela Gray</strong> followed you</h3>
            <p>5m ago</p>
        </div>      

    </div>
    </>
  )
}

export default CardNotify