import React, { useState, useEffect } from 'react';

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    
      const body = document.body;
      const containers = document.querySelectorAll('.container');
      const cards = document.querySelectorAll('.card');
  
      if (isDarkMode) {
        body.classList.add('dark-mode');
        containers.forEach(container => container.classList.add('dark-mode'));
        cards.forEach(card => card.classList.add('dark-mode'));
      } else {
        body.classList.remove('dark-mode');
        containers.forEach(container => container.classList.remove('dark-mode'));
        cards.forEach(card => card.classList.remove('dark-mode'));
      }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button className="btn btn-secondary" onClick={toggleDarkMode}>
      {isDarkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default DarkModeToggle;
