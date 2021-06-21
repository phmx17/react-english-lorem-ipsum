import React, { useState } from 'react'
import data from './data'

function app() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault
    console.log(e)
  }


  return <section className="center-section">
    <h3>Title</h3>
    <form className="lorem-form" onSubmit={handleSubmit} >
      <label htmlFor="amount">
        paragraphs:
      </label>
      <input type="number" name="amount" id="amount" value={count} onChange={(e)=> setCount(e.target.value)} />
      <button type="submit" btn="btn" >Generate</button>
    </form>
  </section>



}