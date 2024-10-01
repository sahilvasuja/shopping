import  { useState } from 'react';
import { FiShoppingCart } from 'react-icons/fi'; 
import { FaSun, FaMoon } from 'react-icons/fa'; 

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header className="flex justify-between fixed w-full items-center p-4 shadow-md bg-white dark:bg-gray-800">
    
      <div className="text-2xl font-bold text-gray-800 dark:text-white">
        WebsiteName
      </div>

     
      <div className="flex items-center space-x-6">
       
        <FiShoppingCart className="text-2xl text-gray-800 dark:text-white cursor-pointer" />

       
        <button onClick={toggleDarkMode} className="focus:outline-none">
          {darkMode ? (
            <FaSun className="text-2xl text-yellow-400" />
          ) : (
            <FaMoon className="text-2xl text-gray-800 dark:text-white" />
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
