import React from 'react';
import styles from "./GroupOfCards.module.css";
import giftIcon from "../../assets/gift-icon.svg";
import Client1 from "../../assets/clients_pictures/Jane Cooper.png";
import Client2 from "../../assets/clients_pictures/Devon Lane.png";
import Client3 from "../../assets/clients_pictures/Robert Fox.png";
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';

SwiperCore.use([Navigation]);

function GroupOfCards({type, handleSlideChange}) {

  const getCards = (type) => {
    switch(type) {
      case 'whyUs': {
        return (
           <div className={styles.wrapper}>

            {/*Card - 1 */}
            <div className={styles.card}> 
            <div>
              <img src={giftIcon} alt=''/>
            </div>
            <div className={styles.heading}>
            98% Success Rate
            </div>
            <div className={styles.text}>
            Amet minim mollit non deserunt ullamco est
            sit aliqua dolor do amet sint. Velit officia
            consequatduis enim velit mollit Exer.
            </div>
            <div className={styles.readMore}>
              Read More
            </div>
            </div>

            {/*Card - 2 */}
            <div className={styles.card} style={{backgroundColor:"#2E2E2E"}}> 
            <div>
              <img src={giftIcon} alt=''/>
            </div>
            <div className={styles.heading}>
            100% Success Rate
            </div>
            <div className={styles.text}>
            Amet minim mollit non deserunt ullamco est
            sit aliqua dolor do amet sint. Velit officia
            consequatduis enim velit mollit Exer.
            </div>
            <div className={styles.readMore}>
              Read More
            </div>
            </div>
            
            {/*Card - 3 */}
            <div className={styles.card}> 
            <div>
              <img src={giftIcon} alt=''/>
            </div>
            <div className={styles.heading}>
            100% Success Rate
            </div>
            <div className={styles.text}>
            Amet minim mollit non deserunt ullamco est
            sit aliqua dolor do amet sint. Velit officia
            consequatduis enim velit mollit Exer.
            </div>
            <div className={styles.readMore}>
              Read More
            </div>
            </div>
           </div>
          );
      }

      case 'clients': {
        return (
          <div className={styles.wrapper}>
            <Swiper navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }} 
            onSlideChange={handleSlideChange}
            slidesPerView={3}
            spaceBetween={20} // Adjust the space between cards
            loop={true}
            >
            
            {/*Card - 1 */}
            <SwiperSlide>
            <div className={styles.card}>
            <div>
              <img src={Client1} alt=''/>
            </div>
            <div className={styles.heading}>
            Jane Cooper
            </div>
            <div className={styles.subHeading}>
              Ceo of Hunt
            </div>
            <div className={styles.text}>
            Amet minim mollit non deserunt ullamco est
            sit aliqua dolor do amet sint. Velit officia
            consequatduis enim velit mollit Exer. sit
            aliqua dolor do amet sint. Velit officia
            </div>
            </div>
            </SwiperSlide>

            {/*Card - 2 */}
            <SwiperSlide>
            <div className={styles.card} style={{backgroundColor:"#2E2E2E"}}> 
            <div>
              <img src={Client2} alt=''/>
            </div>
            <div className={styles.heading}>
            Devon Lane
            </div>
            <div className={styles.subHeading}>
              Ceo of Hunt
            </div>
            <div className={styles.text}>
            Amet minim mollit non deserunt ullamco est
            sit aliqua dolor do amet sint. Velit officia
            consequatduis enim velit mollit Exer. sit
            aliqua dolor do amet sint. Velit officia
            </div>
            </div>
            </SwiperSlide>
            
            {/*Card - 3 */}
            <SwiperSlide>
            <div className={styles.card}> 
            <div>
              <img src={Client3} alt=''/>
            </div>
            <div className={styles.heading}>
            Robert Fox
            </div>
            <div className={styles.subHeading}>
              Ceo of Hunt
            </div>
            <div className={styles.text}>
            Amet minim mollit non deserunt ullamco est
            sit aliqua dolor do amet sint. Velit officia
            consequatduis enim velit mollit Exer. sit
            aliqua dolor do amet sint. Velit officia
            </div>
            </div>
            </SwiperSlide>
            </Swiper>
           </div>
          );
      }
      
      default: return (<></>);
    }
  }
  return getCards(type);
}

export default GroupOfCards;