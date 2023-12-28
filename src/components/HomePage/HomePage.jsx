import React from 'react';
import styles from "./HomePage.module.css";
import HeroImage from "../../assets/hero-image.png";
import NavBar from "../NavBar/NavBar.jsx";
import EmailBox from "../EmailBox/EmailBox.jsx";

function HomePage() {
  return (
    <div className={styles.homepageContainer}>
    <div className={styles.wrapper}>
    <NavBar/>
    <div className={styles.mainView}>
        <div className={styles.titleWrapper}>
            <div className={styles.titleText}>You don’t have to 
            <div style={{fontWeight:"700"}}>Fight them Alone.</div>
            </div>
            <div className={styles.titleSubtext}>
            Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
            curabitur sodales conubia ut inceptos faucibus himenaeos tortor
            eget, hac massa gravida arcu interdum proin curae.
            </div>
            <EmailBox/>
        </div>
        <div className='hero'>
            <img src={HeroImage} alt=''/>
        </div>
    </div>
    </div>
    </div>
  )
}

export default HomePage;