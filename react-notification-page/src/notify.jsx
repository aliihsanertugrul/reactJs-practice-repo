import React, { useState } from "react";
import CardNotify from "./card-notify";
import { FaRegThumbsUp } from "react-icons/fa";

const Notify = () => {
    const [readed, setReaded] = useState(false)
    console.log(readed)
  return (
    <div className="container mt-4 p-5">
      <div className="d-flex justify-content-between ">
        <div className="fs-1">
          Notifications  <span className="bg-primary text-light px-2 rounded">3</span>
        </div>
        <div>
          <button className="btn btn-outline-primary " onClick={()=>setReaded(true)}>Mark all as read <FaRegThumbsUp size={25}/></button>
        </div>
      </div>

      <CardNotify readed={readed} onClick={()=>setReaded(true)} />
    </div>
  );
};

export default Notify;
