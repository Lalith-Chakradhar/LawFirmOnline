import React from 'react';
import styles from "./WhyUs.module.css";
import GroupOfCards from "../GroupOfCards/GroupOfCards";

function WhyUs() {
  return (
    <div className={styles.wrapper}>
        <div className={styles.heading}>Why Choose us?</div>
        <GroupOfCards type="whyUs"/>
    </div>
  )
}

export default WhyUs;