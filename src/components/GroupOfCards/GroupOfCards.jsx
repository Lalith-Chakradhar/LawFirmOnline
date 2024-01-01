import React, { useContext } from "react";
import styles from "./GroupOfCards.module.css";
import giftIcon from "../../assets/gift-icon.svg";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import { ClientsContext } from "../../context/ClientsContext";

SwiperCore.use([Navigation]);

function GroupOfCards({ type, handleSlideChange }) {
  const { clients } = useContext(ClientsContext);

  const getCards = (type) => {
    switch (type) {
      case "whyUs": {
        return (
          <div className={styles.wrapper}>
            {/*Card - 1 */}
            <div className={styles.card}>
              <div>
                <img src={giftIcon} alt="" />
              </div>
              <div className={styles.heading}>98% Success Rate</div>
              <div className={styles.text}>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequatduis enim velit mollit Exer.
              </div>
              <div className={styles.readMore}>Read More</div>
            </div>

            {/*Card - 2 */}
            <div className={styles.card} style={{ backgroundColor: "#2E2E2E" }}>
              <div>
                <img src={giftIcon} alt="" />
              </div>
              <div className={styles.heading}>100% Success Rate</div>
              <div className={styles.text}>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequatduis enim velit mollit Exer.
              </div>
              <div className={styles.readMore}>Read More</div>
            </div>

            {/*Card - 3 */}
            <div className={styles.card}>
              <div>
                <img src={giftIcon} alt="" />
              </div>
              <div className={styles.heading}>100% Success Rate</div>
              <div className={styles.text}>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequatduis enim velit mollit Exer.
              </div>
              <div className={styles.readMore}>Read More</div>
            </div>
          </div>
        );
      }

      case "clients": {
        return (
          <div className={styles.wrapper}>
            <Swiper
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              onSlideChange={handleSlideChange}
              slidesPerView={3}
              spaceBetween={20} // Adjust the space between cards
              loop={true}
            >
              {clients.map((client) => (
                <SwiperSlide key={client.id}>
                  <div
                    className={styles.card}
                    style={{
                      backgroundColor: client.selected ? "#2E2E2E" : "initial",
                    }}
                  >
                    <div>
                      <img src={client.image} alt={client.name} />
                    </div>
                    <div className={styles.heading}>{client.name}</div>
                    <div className={styles.subHeading}>{client.title}</div>
                    <div className={styles.text}>{client.description}</div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        );
      }

      default:
        return <></>;
    }
  };
  return getCards(type);
}

export default GroupOfCards;
