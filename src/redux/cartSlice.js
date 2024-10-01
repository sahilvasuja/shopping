// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   cartItems: [],
// };

// export const cartSlice = createSlice({
//   name: 'cart',
//   initialState,
//   reducers: {
//     addToCart: (state, action) => {
//       state.cartItems.push(action.payload); // Add product to cart
//     },
//     clearCart: (state) => {
//       state.cartItems = []; // Clear all items from cart
//     },
//   },
// });

// export const { addToCart, clearCart } = cartSlice.actions;
// export default cartSlice.reducer;


import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
        const itemExists = state.cartItems.find(item => item.id === action.payload.id);
        if (itemExists) {
         
          itemExists.quantity += action.payload.quantity; 
        } else {
          
          state.cartItems.push({ ...action.payload, quantity: action.payload.quantity }); 
        }
      },
    removeFromCart(state, action) {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
    },
  },
});

// Export actions
export const { addToCart, removeFromCart } = cartSlice.actions;

// Export the reducer
export default cartSlice.reducer;
