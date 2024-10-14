'use client'; // Указываем, что компонент должен быть рендерен на клиенте

import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Новый хук для определения пути
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import styles from './Header.module.css';

export const Header = () => {
  const pathname = usePathname(); // Получаем текущий путь

  const navLinks = [
    { href: '/', label: 'Тренировка' },
    { href: '/achievements', label: 'Достижения' },
    { href: '/profile', label: 'Профиль' },
    { href: '/top', label: 'Топ' },
    { href: '/settings', label: 'Настройки' },
  ];

  return (
    <nav className={styles.nav}>
      <ThemeSwitcher />
      <ul className={styles.ul}>
        {navLinks.map(({ href, label }) => (
          <li key={href} className={pathname === href ? styles.active : ''}>
            <Link href={href}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};



