"use client"
import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from './not-found.module.css';

const NotFoundPage = () => {
  const router = useRouter();

  // Автоматическое перенаправление через 5 секунд
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/');
    }, 7000);

    return () => clearTimeout(timer); // Очистка таймера при размонтировании компонента
  }, [router]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404 - Страница не найдена</h1>
      <p className={styles.description}>
        Упс! Похоже, вы перешли по несуществующей ссылке.
      </p>
      <Link href="/" className={styles.link}>
        Вернуться на главную
      </Link>
    </div>
  );
};

export default NotFoundPage;
