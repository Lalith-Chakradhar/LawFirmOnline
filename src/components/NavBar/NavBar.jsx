import React from 'react';
import logo from "../../assets/logo.svg";
import styles from "./NavBar.module.css"

function NavBar() {
  return (
    <div className={styles.NavBar}>
    <img src={logo} alt="logo" style={{cursor:"pointer"}}/>
    <div className={styles.tabs}>
    <div>
        <p>Home</p>
    </div>
    <div>
        <p>Attorneys</p>
    </div>
    <div>
        <p>Practices</p>
    </div>
    <div>
        <p>About Us</p>
    </div>
    </div>
    <div className={styles.ContactNow}>
        Contact Now
    </div>
    </div>
  );
}

export default NavBar;