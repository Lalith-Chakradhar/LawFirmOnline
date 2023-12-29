import React from 'react';
import styles from './AreaOfPractices.module.css';
import {Grid} from '@mui/material';
import BusinessLaw from "../../assets/aop_pictures/Business-Law.png";
import BusinessLaw2 from "../../assets/aop_pictures/Business-Law-2.png";
import PartnershipLaw from "../../assets/aop_pictures/Partnership-Law.png";
import RealEstateLaw from "../../assets/aop_pictures/RealEstate-Law.png";
import LandlordDisputes from "../../assets/aop_pictures/Landlord-Disputes.png";
import ElderAbuse from "../../assets/aop_pictures/Elder-Abuse.png";

function AreaOfPractices() {
  return (
    <div className={styles.wrapper}>
        <div className={styles.heading}>Area of Practices</div>
        <Grid container spacing={3}>
            <Grid item xs={8} className={styles.card}>
                <img src={BusinessLaw} alt=''/>
                <div className={styles.cardTitle}>BUSINESS LAW</div>
            </Grid>
            <Grid item xs={4} className={styles.card}>
                <img src={PartnershipLaw} alt=''/>
                <div className={styles.cardTitle}>Partnership LAW</div>
            </Grid>
            <Grid item xs={4} className={styles.card}>
                <img src={RealEstateLaw} alt=''/>
                <div className={styles.cardTitle}>REAL ESTATE LAW</div>
            </Grid>
            <Grid item xs={8} className={styles.card}>
                <img src={BusinessLaw2} alt=''/>
                <div className={styles.cardTitle}>BUSINESS LAW</div>
            </Grid>
            <Grid item xs={8} className={styles.card}>
                <img src={LandlordDisputes} alt=''/>
                <div className={styles.cardTitle}>LANDLORD DISPUTES</div>
            </Grid>
            <Grid item xs={4} className={styles.card}>
                <img src={ElderAbuse} alt=''/>
                <div className={styles.cardTitle}>ELDER ABUSE</div>
            </Grid>
        </Grid>
    </div>
  )
}

export default AreaOfPractices;