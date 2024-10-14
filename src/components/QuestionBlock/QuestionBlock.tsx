// src/components/QuestionBlock/QuestionBlock.tsx

"use client"; // Указываем, что это клиентский компонент

import React, { useState } from "react";
import styles from "./QuestionBlock.module.css";

type QuestionBlockProps = {
  question: string;
  answers: string[];
  onAnswerSelect: (answer: string) => void;
};

const QuestionBlock: React.FC<QuestionBlockProps> = ({
  question,
  answers,
  onAnswerSelect,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const handleAnswerClick = (answer: string) => {
    setSelectedAnswer(answer);
    onAnswerSelect(answer);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.question}>{question}</h2>
      <ul className={styles.answers}>
        {answers.map((answer, index) => (
          <li
            key={index}
            className={`${styles.answer} ${
              selectedAnswer === answer ? styles.selected : ""
            }`}
            onClick={() => handleAnswerClick(answer)}
          >
            {answer}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionBlock;
