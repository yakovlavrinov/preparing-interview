"use client"
import QuestionBlock from "src/components/QuestionBlock/QuestionBlock";
import styles from "./page.module.css";


export default function Home() {
  const handleAnswerSelect = (answer: string) => {
    console.log(`Выбранный ответ: ${answer}`);
    // Здесь можно добавить логику для проверки ответа
  };
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        
      <QuestionBlock
      question="Что такое замыкание в JavaScript и как оно работает?"
      answers={[" Замыкание — это функция, которая имеет доступ к своей собственной области видимости, области видимости родительской функции и глобальной области видимости даже после того, как родительская функция завершила выполнение.", "Замыкание — это механизм, который позволяет функции запоминать свои аргументы и переменные, даже когда функция вызвана в другой области видимости.", "Замыкание — это функция, которая возвращает другую функцию и создает новую область видимости для этой функции.", "Замыкание — это просто термин, используемый для описания функций, которые имеют доступ к переменным глобальной области видимости."]}
      onAnswerSelect={handleAnswerSelect}/>
      </main>
      <footer className={styles.footer}>
        
      </footer>
    </div>
  );
}
