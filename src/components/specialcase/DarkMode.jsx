import React, { useState, useEffect } from 'react';
import { MdDarkMode, MdLightMode } from "react-icons/md";

function DarkMode() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="fixed top-[60%] -translate-y-[60%] right-1 z-20 md:flex flex-col gap-2">
      <div
        onClick={toggleDarkMode}
        className="cartShadow w-12 h-[50px] border-[1px] sm:w-16 sm:h-[70px] rounded-md flex flex-col bg-white dark:bg-gray-900 gap-1 text-blue-900 dark:text-white justify-center items-center shadow-2xl overflow-x-hidden group cursor-pointer relative"
      >
         <div className="flex justify-center items-center">
          {darkMode ? (
            <MdLightMode className="text-2xl transition-transform duration-200" />
          ) : (
            <MdDarkMode className="text-2xl transition-transform duration-200" />
          )}
        </div>
      </div>
    </div>
  );
}

export default DarkMode;
