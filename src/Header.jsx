import  { useState } from 'react';
import { FiShoppingCart } from 'react-icons/fi'; 
import { FaSun, FaMoon } from 'react-icons/fa'; 
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };
  const navigate = useNavigate(); 
  const handleCartClick = () => {
    navigate('/cart'); 
  };
  const handleHome = () => {
    navigate('/'); 
  };
  return (
    <header className="flex justify-between fixed w-full items-center p-4 shadow-md bg-white dark:bg-gray-800">
    
      <div className="text-2xl font-bold text-gray-800 dark:text-white cursor-pointer"  onClick={handleHome}>
        WebsiteName
      </div>

     
      <div className="flex items-center space-x-6">
       
       
        <div className="relative">
          <FiShoppingCart className="text-2xl text-gray-800 dark:text-white cursor-pointer"  onClick={handleCartClick}/>
          {cartItems.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full text-xs px-1">
              {cartItems.length}
            </span>
          )}
        </div>
       
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
