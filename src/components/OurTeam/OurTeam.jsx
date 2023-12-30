import React from 'react';
import styles from "./OurTeam.module.css";
import DanielDef from "../../assets/team_members/Daniel-Def.png";
import Sanfole from "../../assets/team_members/Sanfole.png";
import Cesforila from "../../assets/team_members/Cesforila.png";
import Colleen from "../../assets/team_members/Colleen.png";
import Haldone from "../../assets/team_members/Haldone.png";
import NikJeo from "../../assets/team_members/Nik-Jeo.png";

function OurTeam() {
  return (
    <div className={styles.wrapper}>
        <div className={styles.heading}>Our Team</div>
        <div className={styles.teamContainer}>
            {/* Team Member - 1 */}
            <div className={styles.teamMember}>
                <div>
                    <img src={DanielDef} alt=''/>
                </div>
                <div className={styles.teamDetails}>
                    <div className={styles.name}>Daniel Def</div>
                    <div className={styles.cases}>301 Cases</div>
                </div>
            </div>

            {/* Team Member - 2 */}
            <div className={styles.sanfole} style={{paddingLeft:"25px"}}>
                <div>
                    <img src={Sanfole} alt=''/>
                </div>
                <div className={styles.teamDetails}>
                    <div className={styles.name}>Sanfole</div>
                    <div className={styles.cases} style={{opacity:"70%"}}>850 Cases</div>
                </div>
            </div>

            {/* Team Member - 3 */}
            <div className={styles.teamMember} style={{justifyContent:"flex-end"}}>
                <div>
                    <img src={Cesforila} alt=''/>
                </div>
                <div className={styles.teamDetails}>
                    <div className={styles.name}>Cesforila</div>
                    <div className={styles.cases}>470 Cases</div>
                </div>
            </div>

            {/* Team Member - 4 */}
            <div className={styles.teamMember}>
                <div>
                    <img src={Colleen} alt=''/>
                </div>
                <div className={styles.teamDetails}>
                    <div className={styles.name}>Colleen</div>
                    <div className={styles.cases}>180 Cases</div>
                </div>
            </div>

            {/* Team Member - 5 */}
            <div className={styles.teamMember} style={{paddingLeft:"25px"}}>
                <div>
                    <img src={Haldone} alt=''/>
                </div>
                <div className={styles.teamDetails}>
                    <div className={styles.name}>Haldone</div>
                    <div className={styles.cases}>212 Cases</div>
                </div>
            </div>

            {/* Team Member - 6 */}
            <div className={styles.teamMember} style={{justifyContent:"flex-end", paddingRight:"15px", width:"329px"}}>
                <div>
                    <img src={NikJeo} alt=''/>
                </div>
                <div className={styles.teamDetails}>
                    <div className={styles.name}>Nik Jeo</div>
                    <div className={styles.cases}>350 Cases</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurTeam;