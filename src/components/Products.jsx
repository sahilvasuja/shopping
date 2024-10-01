import  { useEffect, useState } from 'react';
 const Products = () => {
    const [products, setProducts] = useState([]);

    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('/products.json')
          .then((response) => response.json())
          .then((jsonData) => {
            setProducts(jsonData);
          })
          .catch((error) => {
            console.error('Error fetching dummy data:', error);
          });
      }, []);
      const handleAddToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
      };
    
  return (
    <div className="p-4 ">
      <h1 className="text-center text-3xl font-bold mb-6">Shopping Website</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border bg-white rounded-2xl p-4 shadow-md flex flex-col">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-72 rounded-xl object-cover mb-4"
            />
              <div className="flex-grow"> {/* Make the content above the button grow */}
              <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
              <p className="text-gray-900 text-lg mb-4">{product.description}</p>
            </div>
              <p className="text-2xl font-bold text-red-600 mb-4">{product.price}</p>
            {/* <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
            <p className="text-gray-900 text-lg mb-4">{product.description}</p>
            <p className="text-2xl font-bold text-red-600 mb-4">{product.price}</p> */}
            <button
              className="bg-black  text-white w-full py-3 font-bold text-lg rounded-xl px-4 mt-auto rounded-lg"
              onClick={() => handleAddToCart(product)}
            >
              {product.buttonText}
            </button>
          </div>
        ))}
      </div>

      {/* <div className="mt-8">
        <h2 className="text-2xl font-semibold">Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="border-b py-2">
                {item.title} - ${item.price}
              </li>
            ))}
          </ul>
        )}
      </div> */}
    </div>
  )
}
export default Products