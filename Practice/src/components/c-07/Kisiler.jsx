import React from 'react'
import students from "../../assets/data/students.json"
import "./kisi.scss"
import Kisi from './Kisi'


const Kisiler = () => {
  return (
    <div className='tbl-std'>

        {
            students.map((student,index)=>(<Kisi key={index} {...student}   />))
        }



    </div>
  )
}

export default Kisiler
