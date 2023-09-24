import { useState, useEffect } from 'react';
import './App.css';
import db from './assets/db.json';
import Category from './components/Category';

function App() {
  const [categories, setCategories] = useState ([]);
  const [products, setProducts] = useState ([]);
  
  useEffect(() => {
    //fetch("/categories")
     // fetch("http://localhost:3001/categories")
      // fetch("data")
      // .then(response => response.json())
      // .then(data => {
      //   console.log(data);
      //   setResults(data);
      // })
      ///console.log(data)
      setCategories(db.categories)
      setProducts(db.products)
    }, [])

    const handleCategoryClick = id => { 
      alert('id:' +id);
    }

    const renderCategories = () => {
      return categories.map(c =>
        <Category key={c.id} id={c.id} title={c.title}  onCategoryClick={() => handleCategoryClick(c.id)}/>
      );
    }

    const renderProducts = () => {
      return products.map(p =>
        <div key={p.id}>{p.title}</div>
      )
    }

  return (
    <>
    <header> My Store </header>

  <section>
    <nav>
      
        { categories && renderCategories() }
      
        </nav>
      <article>
        <h1>Products</h1>
        { products && renderProducts() }
      </article>
      
      </section>
      
      
      <footer>
        footer
      </footer>

  </>
  );
}


export default App;



