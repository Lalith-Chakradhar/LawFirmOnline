import React from 'react';
import styles from "./Introduction.module.css";

function Introduction() {
  return (
    <div className={styles.wrapper}>
    <div className={styles.heading}>
    Let’s Introduce
    Ourself
    </div>
    <div className={styles.verticalLine}></div>
    <div className={styles.subText}>
        <h1>Criminal Lawyer</h1>
        <p style={{opacity:"30%"}}>Amet minim mollit non deserunt ullamco est
            sit aliqua dolor do amet sint. Velit officia consequatduis
            enim velit mollit Exercitation.</p>
    </div>
    </div>
  )
}

export default Introduction;