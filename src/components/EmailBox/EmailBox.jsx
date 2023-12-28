import React from 'react';
import styles from "./EmailBox.module.css";
import mailIcon from "../../assets/mail-icon.svg";

function EmailBox() {
  return (
    <form>
    <div className={styles.emailBox}>
    <div className={styles.wrapper}>
        <div className={styles.mailIcon}><img src={mailIcon} alt='' style={{filter:"grayscale(100%)"}}/></div>
        <input placeholder="Enter your email address"/>
        <button className={styles.letsTalkButton} type="submit" onClick={(e) => {e.preventDefault()}}>Let's Talk</button>
    </div>
    </div>
    </form>
  )
}

export default EmailBox;