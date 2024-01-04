import React from 'react';
import styles from './Subscribe.module.css';

function Subscribe() {

  const handleFormSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
  };

  return (
    <div className={styles.wrapper}>
    <div className={styles.content}>
    <div className={styles.heading}>
      Subscribe Our Newsletter
    </div>

    <form className={styles.details} onSubmit={handleFormSubmit}>
    <div className={styles.inputWrapper} style={{borderRadius: "8px 0px 0px 8px"}}>
    <input placeholder="Name:" type="text" required/>
    </div>
    <div className={styles.inputWrapper} style={{paddingLeft:"15px"}}>
    <input placeholder="Enter Your Email" type="email" required/>
    </div>
    <button className={styles.sendButton} type="submit">SEND</button>
    </form>
    </div>
    </div>
  )
}

export default Subscribe;