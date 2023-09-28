import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

let url = 'https://fakestoreapi.com/products';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch the products from the given URL
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
        setProducts(data);
      })
      .catch(error => {
        // Handle errors, such as network issues or invalid JSON
        console.error('There was a problem with the fetch operation:', error.message);
      });
  }, []);  // The empty dependency array ensures this useEffect runs only once, similar to componentDidMount

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <img src={product.image} alt={product.title} width="50" height="50" />
            <span>{product.title}</span>
            <span>{product.price}</span>
            <Link to={`/product/${product.id}`}>View Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
