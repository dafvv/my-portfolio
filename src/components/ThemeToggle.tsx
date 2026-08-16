import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const isDark = document.documentElement.classList.contains('dark') ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    
    if (isDark) {
      document.documentElement.classList.add('dark');
      setTheme('dark');
    } else {
      document.documentElement.classList.remove('dark');
      setTheme('light');
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    if (nextTheme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  if (!mounted) {
    return (
      <div 
        className="w-[128px] h-[48px] border border-[#191919] dark:border-[#f2f0ef] bg-[#d9d9d9] dark:bg-[#262626] flex items-center justify-center font-mono text-[12px] uppercase tracking-wider opacity-0"
        aria-hidden="true"
      />
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      className="group relative flex items-center justify-between px-4 w-[128px] h-[48px] border border-[#191919] dark:border-[#f2f0ef] bg-[#d9d9d9] dark:bg-[#262626] text-[#191919] dark:text-[#f2f0ef] transition-all hover:bg-opacity-80 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-current select-none cursor-pointer"
    >
      <span className="font-mono text-[12px] uppercase tracking-wider font-semibold">
        {theme === 'light' ? 'Light' : 'Dark'}
      </span>
      <div className="relative w-5 h-5 flex items-center justify-center">
        {theme === 'light' ? (
          <img src="/media/icons/sun.svg" alt="Sun" className="w-4 h-4 transition-transform group-hover:rotate-45" />
        ) : (
          <img src="/media/icons/moon.svg" alt="Moon" className="w-4 h-4 invert transition-transform group-hover:-rotate-12" />
        )}
      </div>
    </button>
  );
}
