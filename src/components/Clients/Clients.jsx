import React, {useState} from 'react';
import styles from "./Clients.module.css";
import GroupOfCards from "../GroupOfCards/GroupOfCards";
import leftButton from "../../assets/left_round_button.png";
import rightButton from "../../assets/right_round_button.png";


function Clients() {

  const [currentColor, setCurrentColor] = useState('#2E2E2E');

  const handleSlideChange = () => {
    // Get the current card color
    const activeCard = document.querySelector('.swiper-slide-active');
    activeCard.setAttribute('data-color', currentColor);
  };

  return (
    <div className={styles.wrapper}>
        <div className={styles.header}>
            <div className={styles.heading}>
            What says our happy Clients
            </div>
            <div className={styles.buttons}>
                <div style={{cursor:"pointer"}} onClick={() => handleSlideChange()}><img src={leftButton} alt=''/></div>
                <div style={{cursor:"pointer"}} onClick={() => handleSlideChange()}><img src={rightButton} alt=''/></div>
            </div>
        </div>
        <GroupOfCards type="clients" handleSlideChange={handleSlideChange}/> {/*Should add swiper to the buttons*/}
    </div>
  )
}

export default Clients;