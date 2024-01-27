import React from "react";
import thanksImg from "./assets/images/icon-success.svg";
import { useNavigate } from "react-router-dom";
import styles from "./thanks-card.module.css";

const ThanksCard = ({ inputValue }) => {
  const navigate=useNavigate();
  return (
    <div className={styles.containerThanks}>
      <div className={styles.row}>
        <div className={styles.col}>
          <div>
           <img src={thanksImg} alt="success" /> 
          </div>
          
          <h1 className={styles.title}>Thanks for subscribing!</h1>
          <p>
            A confirmation email has been sent to <span className={styles.emailSpan}>{inputValue}</span>
            Please open it and click the button inside to confirm your
            subscription.
          </p>
        </div>

        <button className={styles.buttonSuccess} onClick={()=>navigate("/")}>Dismiss message</button>
      </div>
    </div>
  );
};

export default ThanksCard;
