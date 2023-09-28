import React, { useState, useEffect } from 'react';

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  // Fetch cart data from localStorage
  const fetchCartData = () => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  };

  useEffect(() => {
    fetchCartData();
  }, []);

  const removeFromCart = (productId) => {
    let currentCart = localStorage.getItem('cart');
    currentCart = currentCart ? JSON.parse(currentCart) : [];

    // Filter out the product with the specified ID
    const updatedCart = currentCart.filter(item => item.id !== productId);

    localStorage.setItem('cart', JSON.stringify(updatedCart));

    // Update the state with the updated cart
    setCartItems(updatedCart);
  };

  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            <span>{item.name}</span>
            <span>{item.price}</span>
            <button>-</button>
            <span>{item.quantity}</span>
            <button>+</button>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Cart;
