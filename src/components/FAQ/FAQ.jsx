import React, {useState} from 'react';
import styles from "./FAQ.module.css";
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import FAQplus from "../../assets/faq-plus.png";

function AccordionItem({text}) {
    const [isAccordionOpen, setAccordionOpen] = useState(false);

    const toggleAccordion = () => {
        setAccordionOpen(!isAccordionOpen);
    };

    return (
        <Accordion onChange={toggleAccordion} className={styles.questionContainer}>
        <AccordionSummary>
        <div className={styles.question}>{text}</div>
        {!isAccordionOpen && (
            <div style={{marginLeft: "auto"}}>
            <img src={FAQplus} alt=''/>
            </div>
        )}
        </AccordionSummary>
        <AccordionDetails>
        <div className={styles.answer}>
        Amet minim mollit non deserunt ullamco est sit
        aliqua dolor do amet sint. Velit officia consequatduis
        enim velit mollit Exer. Amet minim mollit non deserunt
        ullamco est sit aliqua dolor do amet sint. 
        Velit officia consequatduis enim velit mollit Exer.
        </div>
        </AccordionDetails>
        </Accordion>
    );
}

function FAQ() {

  return (
    <div className={styles.wrapper}>
        <div className={styles.headingContainer}>
        <div className={styles.heading}>FAQ</div>
        <div className={styles.headingText}>
            Amet minim mollit non deserunt ullamco est sit
            aliqua dolor do amet sint.
        </div>
        </div>
        <div className={styles.faqsBox}>
        <AccordionItem text="Do I need a personal injury report?"/>
        <AccordionItem text="How much is my case worth?"/>
        <AccordionItem text="What should I do right after car accident?"/>
        <AccordionItem text="How much is my case worth?"/>
        </div>
    </div>
  );
}

export default FAQ;