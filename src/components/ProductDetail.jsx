import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';



function ProductDetail() {
  

  const { id } = useParams(); // Destructure the id from the params

  console.log('detail id = ', id)
  
  const [product, setProduct] = useState(null);


  useEffect(() => {
    // Fetch the products from the given URL
    let url = `https://fakestoreapi.com/products/${id}`;

    fetch(url)
      .then(response => {
        // Check if the response is OK and throw an error if not
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // Set the fetched products to state
        setProduct(data);
      })
      .catch(error => {
        // Handle errors, such as network issues or invalid JSON
        console.error('There was a problem with the fetch operation:', error.message);
      });
  }, [id]);  // The empty dependency array ensures this useEffect runs only once, similar to componentDidMount


  const addToCart = () => {
    let currentCart = localStorage.getItem('cart');
    currentCart = currentCart ? JSON.parse(currentCart) : [];

    // Check if the product already exists in the cart
    const existingProduct = currentCart.find(item => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      currentCart.push({
        id: product.id,
        name: product.title,
        price: product.price,
        quantity: 1
      });
    }

    localStorage.setItem('cart', JSON.stringify(currentCart));
    alert(`${product.title} added to cart!`);
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <img src={product.image} alt={product.title} />
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <span>Price: {product.price}</span>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}

export default ProductDetail;
