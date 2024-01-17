import React, { useState } from 'react'
// import "./text.css"
import data from "./data"

const Paragraphs = () => {
    const [count,setCount]=useState(0)
    const [text, setText] = useState([])
    // console.log(count)

    const handleGenerate = (e) => {
        e.preventDefault();
        
        let amount=count;
        if(count<0){
            amount=1;
        }

        if(count>data.length){
            amount=data.length;
        }

        setText(data.slice(0,amount))
    }

    const clear = () => {
        setText([])
        setCount(0)
    }




  return (
    <section className='section-center'>
        <h3>How Many Paragraphs</h3>
        <form>
            <label htmlFor="amount">Paragraphs</label>
            <input type="number" id='amount' value={count} onChange={(e)=>setCount(e.target.value)}  />
            <button className='btn' onClick={handleGenerate}>Genereta</button>
            <button className='btn' onClick={clear}>Clear</button>
        </form>

        <div className='lorem-text'>
            {
                text.map((item,index)=>(<p key={index}>{item}</p>))

            }
           
        </div>
    </section>
  )
}

export default Paragraphs