
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/cartSlice'; 
import { useNavigate } from 'react-router-dom';
const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch(); 
  const navigate = useNavigate(); 
  const handleRemove = (item) => {
    dispatch(removeFromCart(item.id)); 
  };
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg mt-24 py-6 w-11/12 md:w-3/4 lg:w-1/2">
      <div className="flex items-center flex justify-between items-start text-start px-6 mb-4">
          <button onClick={() =>  navigate('/') } className="text-3xl text-gray-600 hover:text-red-500 mr-2">
            &times; 
          </button>
        </div>
          <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-600">Your cart is empty.</p>
        ) : (
          <div>
            <ul className="space-y-4 px-6">
              {cartItems.map((item, index) => (
                <li key={index} className="flex items-end justify-between border-b pb-4">
                 <div className='flex gap-2'>

                  <img src={item.image} alt={item.title} className="w-24 h-24 object-cover rounded-lg" />
                  
                  
                  <div className="flex flex-col items-start flex-grow mx-4">
                    <span className="text-lg font-semibold">{item.title}</span>
                    <span className="text-gray-600 border mt-1  px-6 py-1 border-gray-300 rounded-lg">{item.quantity}</span>
                    <button 
                      onClick={() => handleRemove(item)} 
                      className="mt-2 text-red-600 hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                 </div>
               
                  <span className="text-lg font-normal items-end flex ">${item.price}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex py-5 px-6 bg-gray-200 w-full justify-between font-bold text-lg">
              <span>Total Price:</span>
              <span>${totalPrice}</span>
            </div>
            <div className='px-6'>

            <button className="bg-red-500 w-full text-white py-2 px-4 mt-4 rounded-xl hover:bg-gray-800 transition duration-200">
              Continue to Payment
            </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
