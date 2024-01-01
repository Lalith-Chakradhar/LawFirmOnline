import React, { useState, useContext } from "react";
import styles from "./Clients.module.css";
import GroupOfCards from "../GroupOfCards/GroupOfCards";
import leftButton from "../../assets/left_round_button.png";
import rightButton from "../../assets/right_round_button.png";
// import { setSelectedNext } from "../../signals/clients";
// import { useClient } from "../../hooks/useClient";
import { ClientsContext } from "../../context/ClientsContext";

function Clients() {
  const [currentColor, setCurrentColor] = useState("#2E2E2E");
  const { setSelectedNext } = useContext(ClientsContext);

  const handleSlideChange = (pl) => {
    // Get the current card color
    // console.log(pl);
    setSelectedNext(pl);
    const activeCard = document.querySelector(".swiper-slide-active");
    activeCard.setAttribute("data-color", currentColor);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.heading}>What says our happy Clients</div>
        <div className={styles.buttons}>
          <div
            style={{ cursor: "pointer" }}
            onClick={() => handleSlideChange("left")}
          >
            <img src={leftButton} alt="" />
          </div>
          <div
            style={{ cursor: "pointer" }}
            onClick={() => handleSlideChange("right")}
          >
            <img src={rightButton} alt="" />
          </div>
        </div>
      </div>
      <GroupOfCards type="clients" handleSlideChange={handleSlideChange} />{" "}
      {/*Should add swiper to the buttons*/}
    </div>
  );
}

export default Clients;
