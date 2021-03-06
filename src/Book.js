import React from 'react'

const Book = ({img, title, author}) => {  
const clickHandler = (e) => {
  console.log(e)
  console.log(e.target)
  alert('Hello World')
};
const complexExample = (author) => {  // when we need to pass as argument in
  console.log(author)
}
  return (
  <article className="book" onMouseOver={() => console.log(title)}>
    <img src={img} alt="" />
    <h1 onClick={() => console.log(title)}>{title}</h1> 
    <h4>{author}</h4>
    <button type='button' onClick={clickHandler}>Reference Example</button>
    <button type="button" onClick={() => complexExample(author)}>More Complex Example</button>
    </article>
    ) // in line 285 if we enterd complexExample as a function because if we entered as (complexExample(author)) it will execute immediately the code is ran, but we want it to execute on clicking
}


export default Book