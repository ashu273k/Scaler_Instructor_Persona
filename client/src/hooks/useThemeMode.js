import { useEffect, useState } from 'react';

const THEME_KEY = 'persona-theme';

const getInitialTheme = () => {
  if (typeof window === 'undefined') return true;
  const stored = window.localStorage.getItem(THEME_KEY);
  if (stored === 'light') return false;
  if (stored === 'dark') return true;
  return true;
};

function useThemeMode() {
  const [isDark, setIsDark] = useState(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      window.localStorage.setItem(THEME_KEY, 'dark');
    } else {
      root.classList.remove('dark');
      window.localStorage.setItem(THEME_KEY, 'light');
    }
  }, [isDark]);

  return {
    isDark,
    toggleTheme: () => setIsDark((prev) => !prev),
  };
}

export default useThemeMode;
