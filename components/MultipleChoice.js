import React, { useState, useEffect } from "react";
import ConfettiExplosion from "react-confetti-explosion";
import styles from "./MultipleChoice.module.css";

function MultipleChoice({ question, choices, answer }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isExploding, setIsExploding] = useState(false);
  const [shakeOption, setShakeOption] = useState(-1);

  const options = choices.split(",").map((choice) => choice.trim());

  answer = parseInt(answer) - 1;

  useEffect(() => {
    let storedAnswer = localStorage.getItem(question + choices);
    if (storedAnswer) {
      storedAnswer = parseInt(storedAnswer);
      setSelectedOption(storedAnswer);
      setIsCorrect(storedAnswer === answer);
    }
  }, []);

  const handleOptionClick = (index) => {
    if (isCorrect) return;

    setSelectedOption(index);
    const correct = index == answer;

    setIsCorrect(correct);
    if (correct) {
      localStorage.setItem(question + choices, index);
      setIsExploding(true);
    } else {
      setShakeOption(index);
      setTimeout(() => {
        setShakeOption(-1);
      }, 500);
      // const element = document.querySelector("#option" + index);
      // element.classList.add(styles.shake);
      // setTimeout(() => {
      //   element.classList.remove(styles.shake);
      // }, 500);
    }
  };

  return (
    <div className={styles.question}>
      <h2>{question}</h2>
      {isExploding && <ConfettiExplosion />}
      {options.map((option, index) => (
        <div
          className={`${styles.option} ${
            shakeOption === index ? styles.shake : ""
          }`}
          id={"option" + index}
          key={index}
          onClick={() => handleOptionClick(index)}
        >
          <p>
            {option}
            {selectedOption === index && isCorrect && " ✔"}
          </p>
        </div>
      ))}
    </div>
  );
}

export default MultipleChoice;
