import React from 'react';
import styles from './AreaOfPractices.module.css';
import Grid from '@mui/material';

function AreaOfPractices() {
  return (
    <div className={styles.wrapper}>
        <div className={styles.heading}>Area of Practices</div>
        <Grid container spacing={2}>
            <Grid item xs={8}>
                <img/>
                <div></div>
            </Grid>
            <Grid item xs={4}>
                <img/>
                <div></div>
            </Grid>
            <Grid item xs={4}>
                <img/>
                <div></div>
            </Grid>
            <Grid item xs={8}>
                <img/>
                <div></div>
            </Grid>
            <Grid item xs={8}>
                <img/>
                <div></div>
            </Grid>
            <Grid item xs={4}>
                <img/>
                <div></div>
            </Grid>
        </Grid>
    </div>
  )
}

export default AreaOfPractices;