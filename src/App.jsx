import { useState, useEffect } from 'react'
import './App.css'
import db from './assets/db.json'


function App() {
  const [results, setResults] = useState ([]);
    
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
      setResults(db.categories)
    }, [])
  return (
    <>
    <header> My Store </header>

  <section>
    <nav>
      {
        results.map(d => (
          <div key={d.id}>{d.title}</div>
        ))
      }
        </nav>
      <article>
        main area
      </article>
      
      </section>
      
      
      <footer>
        footer
      </footer>

  </>
  );
}


export default App;



