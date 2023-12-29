import React from 'react';
import styles from "./Clients.module.css";
import GroupOfCards from "../GroupOfCards/GroupOfCards";
import leftButton from "../../assets/left_round_button.png";
import rightButton from "../../assets/right_round_button.png";


function Clients() {
  return (
    <div className={styles.wrapper}>
        <div className={styles.header}>
            <div className={styles.heading}>
            What says our happy Clients
            </div>
            <div className={styles.buttons}>
                <div style={{cursor:"pointer"}}><img src={leftButton} alt=''/></div>
                <div style={{cursor:"pointer"}}><img src={rightButton} alt=''/></div>
            </div>
        </div>
        <GroupOfCards type="clients"/> {/*Should add swiper to the buttons*/}
    </div>
  )
}

export default Clients;