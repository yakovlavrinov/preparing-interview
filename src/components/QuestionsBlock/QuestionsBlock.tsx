import React, { FC, useState } from "react";
import styles from "./QuestionsBlock.module.css";
import stylesAnswers from "./Answers.module.css";
import { DataQuestions } from "src/app/page"; // Предположим, что тут твоя структура данных

interface QuestionBlockProps {
    dataQuestions: DataQuestions[];
}

const QuestionsBlock: FC<QuestionBlockProps> = ({ dataQuestions }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState<(number | null)[]>( // Храним индекс выбранного ответа
        Array(dataQuestions.length).fill(null)
    );
    const currentQuestion = dataQuestions[currentQuestionIndex];

    // Функция для перехода к следующему вопросу
    const handleNext = () => {
        if (currentQuestionIndex < dataQuestions.length - 1) {
            setCurrentQuestionIndex((prev) => prev + 1);
        }
    };

    // Функция для возврата к предыдущему вопросу
    const handlePrev = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex((prev) => prev - 1);
        }
    };

    // Обработка выбора ответа
    const handleAnswerSelect = (index: number) => {
        const updatedAnswers = [...userAnswers];
        updatedAnswers[currentQuestionIndex] = index; // Сохраняем индекс выбранного ответа
        setUserAnswers(updatedAnswers);
    };

    return (
        <div className={styles.container}>
            {/* Индикатор прогресса */}
            <div>
                <div className={styles.questionsScale}>
                    {dataQuestions.map((_, i) => (
                        <div
                            key={i}
                            className={`${styles.dash} ${
                                userAnswers[i] !== null
                                    ? dataQuestions[i].answers[userAnswers[i]!].answerCorrect
                                        ? styles.dash__true
                                        : styles.dash__false
                                    : ""
                            } ${i === currentQuestionIndex ? styles.dash__current : ""}`}
                        ></div>
                    ))}
                </div>

                {/* Вопрос и варианты ответов */}
                <div className={styles.questionBlock}>
                    <h2 className={styles.question}>{currentQuestion.question}</h2>
                    <ul className={stylesAnswers.answers}>
                        {currentQuestion.answers.map((answer, index) => {
                            const { answerText } = answer;
                            const isChecked = userAnswers[currentQuestionIndex] === index;

                            return (
                                <li
                                    key={index}
                                    className={`${stylesAnswers.answer} ${
                                        isChecked ? stylesAnswers.selected : ""
                                    }`}
                                >
                                    <label
                                        htmlFor={`answer-${index}`}
                                        className={stylesAnswers.customRadio}
                                    >
                                        <input
                                            type="radio"
                                            id={`answer-${index}`}
                                            name={`question-${currentQuestionIndex}`}
                                            value={answerText}
                                            checked={isChecked}
                                            onChange={() => handleAnswerSelect(index)}
                                            className={stylesAnswers.radioInput} // Привязка к локальному классу
                                        />
                                        <span className={stylesAnswers.radioCircle}></span>
                                        {answerText}
                                    </label>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                {/* Пагинация */}
                <div className={styles.pagination}>
                    <button
                        className={styles.button}
                        onClick={handlePrev}
                        disabled={currentQuestionIndex === 0}
                    >
                        Назад
                    </button>
                    <span>
                        Вопрос {currentQuestionIndex + 1} из {dataQuestions.length}
                    </span>
                    <button
                        className={styles.button}
                        onClick={handleNext}
                        disabled={currentQuestionIndex === dataQuestions.length - 1}
                    >
                        Вперед
                    </button>
                </div>
            </div>
        </div>
    );
};

export default QuestionsBlock;
