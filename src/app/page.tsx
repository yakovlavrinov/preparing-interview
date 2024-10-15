"use client";
import QuestionsBlock from "src/components/QuestionsBlock/QuestionsBlock";
// import QuestionBlock from "src/components/QuestionBlock/QuestionBlock";
import styles from "./page.module.css";

type Answer = {
    answerText: string;
    answerCorrect: boolean;
};

export type DataQuestions = {
    question: string;
    answers: Answer[];
};

const dataQuestions: DataQuestions[] = [
    {
        question: "Что такое замыкание в JavaScript?",
        answers: [
            {
                answerText: "Функция, которая имеет доступ к переменным из области видимости, в которой была создана, даже после завершения этой области",
                answerCorrect: true,
            },
            {
                answerText: "Глобальная переменная, доступная везде в коде",
                answerCorrect: false,
            },
            {
                answerText: "Механизм для работы с промисами",
                answerCorrect: false,
            },
            {
                answerText: "Функция, которая выполняется асинхронно",
                answerCorrect: false,
            },
        ],
    },
    {
        question: "Что такое ‘this’ в JavaScript?",
        answers: [
            {
                answerText: "Указатель на функцию, в которой оно используется",
                answerCorrect: false,
            },
            {
                answerText: "Ссылка на глобальный объект всегда",
                answerCorrect: false,
            },
            {
                answerText: "Ссылка на объект, который вызвал текущую функцию",
                answerCorrect: true,
            },
            {
                answerText: "Это уникальный идентификатор функции",
                answerCorrect: false,
            },
        ],
    },
    {
        question: "В чем разница между var, let и const?",
        answers: [
            {
                answerText: "`var` и `let` имеют блочную область видимости, а `const` - нет",
                answerCorrect: false,
            },
            {
                answerText: "`var` - функциональная область видимости, а `let` и `const` - блочная",
                answerCorrect: true,
            },
            {
                answerText: "`let` можно переопределять, а `var` нельзя",
                answerCorrect: false,
            },
            {
                answerText: "`const` и `var` - одно и то же",
                answerCorrect: false,
            },
        ],
    },
    {
        question: "Что такое Virtual DOM?",
        answers: [
            {
                answerText: "Фактический DOM браузера",
                answerCorrect: false,
            },
            {
                answerText: "Объектная модель JavaScript",
                answerCorrect: false,
            },
            {
                answerText: "Легковесное представление реального DOM, используемое для минимизации манипуляций с DOM",
                answerCorrect: true,
            },
            {
                answerText: "Фреймворк для работы с DOM",
                answerCorrect: false,
            },
        ],
    },
    {
        question: "Как работает ‘event delegation’ в JavaScript?",
        answers: [
            {
                answerText: "Механизм для удаления событий",
                answerCorrect: false,
            },
            {
                answerText: "Метод для вызова функции асинхронно",
                answerCorrect: false,
            },
            {
                answerText: "Метод, при котором обработчик события добавляется к родителю, чтобы обрабатывать события на потомках",
                answerCorrect: true,
            },
            {
                answerText: "Функция, которая выполняет события в определенном порядке",
                answerCorrect: false,
            },
        ],
    },
];


export default function Home() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <QuestionsBlock dataQuestions={dataQuestions} />
            </main>
        </div>
    );
}
