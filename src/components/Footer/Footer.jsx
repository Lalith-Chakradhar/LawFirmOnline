import React from 'react';
import styles from './Footer.module.css';
import logo from "../../assets/logo.svg";
import instagram from "../../assets/instagram_icon.png";
import facebook from "../../assets/facebook_icon.png";
import twitter from "../../assets/twitter_icon.png";
import pintrest from "../../assets/pintrest_icon.png";

function Footer() {
  return (
    <div className={styles.footer}>
        <div className={styles.wrapper}>
            <div className={styles.footerLine1}>
                <img src={logo} alt='' style={{cursor:"pointer"}}/>
                <div className={styles.tabs}>
                    <div style={{cursor:"pointer"}}>Home</div>
                    <div style={{cursor:"pointer"}}>Attorneys</div>
                    <div style={{cursor:"pointer"}}>Practice Areas</div>
                    <div style={{cursor:"pointer"}}>About Us</div> 
                </div>
                <div className={styles.icons}>
                    <img src={instagram} alt=''/>
                    <img src={facebook} alt=''/>
                    <img src={twitter} alt=''/>
                    <img src={pintrest} alt=''/>
                </div>
            </div>
            <div className={styles.footerLine2}>
                <div>© 2020 Acme. All right reserved.</div>
                <div>Privacy Policy</div>
                <div>Terms of Service</div>
            </div>
        </div>
    </div>
  );
}

export default Footer;