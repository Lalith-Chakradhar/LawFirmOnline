import React from 'react';
import styles from "./GroupOfCards.module.css";
import giftIcon from "../../assets/gift-icon.svg";

function GroupOfCards({type}) {

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
        return null;
      }

      default: return (<></>);
    }
  }
  return getCards(type);
}

export default GroupOfCards;



// -----------------------------------Reference for switch below-----------------
// const getCard = (type) => {
//   switch (type) {
//       case "album": {
//           const {image,likes,title,follows, songs, slug} = data;
//           return (
//               <Tooltip title={`${songs.length} songs`} placement="top" arrow>
//                   <Link to="/album/${slug}">
//                       <div className={styles.cardWrapper}> {/*Card wrapper with Main Card and Title */}
//                           <div className={styles.card}> {/*Main Card Container*/}
//                               <img src={image} alt="Song" loading="lazy"/> {/*image div */}
//                               <div className={styles.banner}> {/*banner div*/}
//                               <Chip 
//                               label={`${follows} Follows`}
//                               size="small"
//                               className={styles.chip}/>
//                               </div>
//                           </div>
//                           <div className={styles.cardTitleWrapper}> {/*Title */}
//                               <p>{title}</p>
//                           </div>
//                       </div>
//                   </Link>
//               </Tooltip>
//           )
//       }

//       case "song": {
//           const {image,likes,title} = data;
//           return (
//               <div className={styles.cardWrapper}> {/*Card wrapper with Main Card and Title */}
//                   <div className={styles.card}> {/*Main Card Container*/}
//                       <img src={image} alt="Song" loading="lazy"/> {/*image div */}
//                       <div className={styles.banner}> {/*banner div*/}
//                           <div className={styles.pill}> {/*pill div */}
//                               <p>{likes} Likes</p>
//                           </div>
//                       </div>
//                   </div>
//                   <div className={styles.cardTitleWrapper}> {/*Title */}
//                       <p>{title}</p>
//                   </div>
//               </div>
//           )
//       }

//       default: return (<></>);
//   }
// }
// return getCard(type);