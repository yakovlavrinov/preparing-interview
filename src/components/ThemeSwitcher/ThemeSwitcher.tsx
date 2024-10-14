"use client";
import { useEffect, useState } from "react";

// Список тем
const themes = {
  light: "light_theme",
  dark: "dark_theme",
  custom: "custom_theme",
  highContrast: "high_contrast_theme",
};

// Получаем текущую тему из localStorage или выбираем по умолчанию
function getInitialTheme(): string {
  const savedTheme = localStorage.getItem("theme");
  const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return savedTheme || (systemPrefersDark ? themes.dark : themes.light);
}

export default function ThemeSwitcher() {
  const [currentTheme, setCurrentTheme] = useState<string>(getInitialTheme);

  // Устанавливаем класс для <body> при изменении темы
  useEffect(() => {
    document.body.className = currentTheme;
  }, [currentTheme]);

  // Обработчик выбора новой темы
  const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedTheme = event.target.value;
    setCurrentTheme(selectedTheme);
    localStorage.setItem("theme", selectedTheme);
  };

  return (
    <div>
      <label htmlFor="theme-select">Выберите тему:</label>
      <select
        id="theme-select"
        value={currentTheme}
        onChange={handleThemeChange}
        style={{ marginLeft: "10px" }}
      >
        {Object.entries(themes).map(([key, value]) => (
          <option key={key} value={value}>
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
}


