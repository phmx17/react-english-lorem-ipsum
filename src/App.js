import React, { useState } from 'react';
import data from './data';
function App() {

  const [count, setCount] = useState(0)
  const [text, setText] = useState([])  
  
  const handleSubmit = (e) => {
    e.preventDefault()
    // always copy state vars to local for processing
    let amount = parseInt(count)  // react auto converts to string; pain
    if (amount < 0) {
      amount = 1
    }
    if (amount > data.length) {
      amount = data.length  // limit to data length
    }    
    setText(data.slice(0, amount))  // returns new array from 0 to amount
  }
  return (
  <section className="section=center">
    <h3>Tired of boring Lorem Ipsum</h3>
    <form className="lorem-form" onSubmit={handleSubmit}>
      <label htmlFor="amount">
        paragraphs:
      </label>
      <input type="number" id="amount" value={count} onChange={(e)=> setCount(e.target.value)}  />
      <button type="submit" className="btn">Generate</button>
    </form>
    <article className="lorem-text">
      {text.map((item, index)=> {
        return <p key={index}>{item}</p>
      })}
    </article>
  </section>
    )
}

export default App;
