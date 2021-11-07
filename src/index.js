import React from 'react'
import ReactDom from 'react-dom'
// CSS
import './index.css'

// stateless functional component
//always returns JSX
 
// function Greeting()
//  { 
//   return <h1>this is hmm and this is my first component</h1>;
// }
// const Greeting = () => {
//   return React.createElement('h1', {}, 'Hello World')
// };


// const Greeting = () => {
//   return React.createElement(
//     'div',
//      {},
//     React.createElement('h1', {}, 'hello world'))
// };

//the equivalent of the above in JSX

// function Greeting() {
//   return (
//     <div>
//       <h1>hello world</h1>
//       </div>
//   )
// }

// ReactDom.render(<Greeting />, document.getElementById('root'));

// JSX Rules
// return single element
//div / section / article / or Fragment
// use camelCase for html attribute
// className instead of class
// close every element 
// formatting

//Nested Components, React Tools
// function Greeting() {
//   return (
//     <div>
// <Person />
// <Message />
//     </div>
//   );
// }

// const Person = () => <h2>john doe</h2>;
// const Message = () => {
//   return <p>this is my message</p>
// };

// ReactDom.render(<Greeting />, document.getElementById('root'));

// Book List
// function Booklist() {
//   return <section className="bookList">
//     <Book/>
//     <Book/>
//     <Book/>
//     <Book/>
//     <Book/>
//     <Book/>
//     <Book/>
//     <Book/>
//     <Book/>
//   </section>
// }

// const Book = () => {
//   return <article className="book">
//     <Image></Image>
//     <Title></Title>
//     <Author></Author>
//     </article>
// }
// const Image = () => <img src="https://images-na.ssl-images-amazon.com/images/I/91DEviT3oUL._AC_UL200_SR200,200_.jpg" alt="" />

// const Title = () => <h1>How to catch a Turkey</h1>

// const Author = () => <h4 style={{ color: '#5555ff', fontSize:'0.75rem', marginTop:'0.25rem'}}>Adam Wallace</h4>
// ReactDom.render(<Booklist />, document.getElementById('root'));

// The props section of the lecture
//Setup vars
// const author = 'Adam Wallace'
// const title = 'How to catch a Turkey'
// const img = 'https://images-na.ssl-images-amazon.com/images/I/91DEviT3oUL._AC_UL200_SR200,200_.jpg'

// function Booklist() {
//   return <section className="bookList">
//     <Book job="developer" />
//     <Book title="random title" number={22}/>
//   </section>
// }

// const Book = (props) => {
//   return (
//   <article className="book">
//     <img src={img} alt="" />
//     <h1>{title}</h1>
//     <h4>{author.toUpperCase()}</h4>
//     <p>{props.job}</p>
//     <p>{props.title}</p>
//     <p>{props.number}</p>
//     </article>
//     )
// }

// ReactDom.render(<Booklist />, document.getElementById('root'));

// const firstBook = {img:"https://images-na.ssl-images-amazon.com/images/I/91DEviT3oUL._AC_UL200_SR200,200_.jpg",
//                   title:"How to catch a Turkey",
//                   author:"Adam Wallace" }

// const secondBook = {img:"https://images-na.ssl-images-amazon.com/images/I/91JLTg-0IdL._AC_UL200_SR200,200_.jpg",
//                   title:"The Cheese Board Deck: 50 Cards for Styling",
//                   author:"Meg Quinn" }

// function Booklist() {
//   return <section className="bookList">
//     <Book 
//     img={firstBook.img}
//     title={firstBook.title}
//     author={firstBook.author}
//     />
//     <Book 
//     img={secondBook.img}
//     title={secondBook.title}
//     author={secondBook.author}/>
//   </section>
// }

// const Book = (props) => {
//   return (
//   <article className="book">
//     <img src={props.img} alt="" />
//     <p>{props.title}</p>
//     <p>{props.author}</p>
//     </article>
//     )
// }

// ReactDom.render(<Booklist />, document.getElementById('root'));

// Props Destructuring

// const firstBook = {img:"https://images-na.ssl-images-amazon.com/images/I/91DEviT3oUL._AC_UL200_SR200,200_.jpg",
//                   title:"How to catch a Turkey",
//                   author:"Adam Wallace" }

// const secondBook = {img:"https://images-na.ssl-images-amazon.com/images/I/91JLTg-0IdL._AC_UL200_SR200,200_.jpg",
//                   title:"The Cheese Board Deck: 50 Cards for Styling",
//                   author:"Meg Quinn" }

// function Booklist() {
//   return <section className="bookList">
//     <Book 
//     img={firstBook.img}
//     title={firstBook.title}
//     author={firstBook.author}
//     ><p>Lorem ipsum dolor sit amet.</p></Book> 
//     <Book 
//     img={secondBook.img}
//     title={secondBook.title}
//     author={secondBook.author}/>
//   </section>
//   //this children in line 169 will only apply to the 1st book
// }

// const Book = (props) => {  // another way of destructuring const Book = ({img, title,author}) => {
//   const {img, title, author} = props;
//   console.log(props);
//   return (
//   <article className="book"> 
//     <img src={img} alt="" />
//     <h1>{title}</h1>
//     <h4>{author}</h4>
//     {props.children}  
//     </article>
//     )
// }

// ReactDom.render(<Booklist />, document.getElementById('root'));

// const books = [
//   {
//     id: 1,
//     img:"https://images-na.ssl-images-amazon.com/images/I/91DEviT3oUL._AC_UL200_SR200,200_.jpg",
//     title:"How to catch a Turkey",
//     author:"Adam Wallace" 
//   },
//   {
//     id:2,
//     img:"https://images-na.ssl-images-amazon.com/images/I/91JLTg-0IdL._AC_UL200_SR200,200_.jpg",
//     title:"The Cheese Board Deck: 50 Cards for Styling",
//     author:"Meg Quinn" 
//   },
//   {
//     id:3,
//     img:"https://images-na.ssl-images-amazon.com/images/I/51ABc0hukNL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
//     title:"My First Learn to Write Workbook: Practice for Kids with Pen Control, Line Tracing, Letters, and More!",
//     author:"Crystal Radke" 
//   }
// ]

// function Booklist() {
//   return <section className="bookList">
//     {books.map((book,index) => {
//       const {img, title, author} = book; // this line is not needed 
//       return (
//       <Book key={book.id} book={book}></Book>
//       )
//     })}
//   </section>
//   //this children in line 169 will only apply to the 1st book
// }

// const Book = (props) => {  // another way of destructuring const Book = ({img, title,author}) => {
//   const {img, title, author} = props.book; // we are not destructuring the props, we are destructuring the book properties(check 2:52:35))//props.book(check 2:50:55)
//   console.log(props); // just used this to check what is in props 
//   return (
//   <article className="book"> 
//     <img src={img} alt="" />
//     <h1>{title}</h1>
//     <h4>{author}</h4>
//     </article>
//     )
// }

// ReactDom.render(<Booklist />, document.getElementById('root'));

// // Spread Operator usage and events(button)
// const books = [
//   {
//     id: 1,
//     img:"https://images-na.ssl-images-amazon.com/images/I/91DEviT3oUL._AC_UL200_SR200,200_.jpg",
//     title:"How to catch a Turkey",
//     author:"Adam Wallace" 
//   },
//   {
//     id:2,
//     img:"https://images-na.ssl-images-amazon.com/images/I/91JLTg-0IdL._AC_UL200_SR200,200_.jpg",
//     title:"The Cheese Board Deck: 50 Cards for Styling",
//     author:"Meg Quinn" 
//   },
//   {
//     id:3,
//     img:"https://images-na.ssl-images-amazon.com/images/I/51ABc0hukNL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
//     title:"My First Learn to Write Workbook: Practice for Kids with Pen Control, Line Tracing, Letters, and More!",
//     author:"Crystal Radke" 
//   }
// ]

// function Booklist() {
//   return <section className="bookList">
//     {books.map((book) => {
//       return (
//       <Book key={book.id} {...book}></Book>
//       )
//     })}
//   </section>
// }

// const Book = ({img, title, author}) => {  
//   // attribute, eventHandler
//   // onClick, onMouseOver
// const clickHandler = (e) => {
//   console.log(e)
//   console.log(e.target)
//   alert('Hello World')
// };
// const complexExample = (author) => {  // when we need to pass as argument in
//   console.log(author)
// }
//   return (
//   <article className="book" onMouseOver={() => console.log(title)}>
//     <img src={img} alt="" />
//     <h1 onClick={() => console.log(title)}>{title}</h1> 
//     <h4>{author}</h4>
//     <button type='button' onClick={clickHandler}>Reference Example</button>
//     <button type="button" onClick={() => complexExample(author)}>More Complex Example</button>
//     </article>
//     ) // in line 285 if we enterd complexExample as a function because if we entered as (complexExample(author)) it will execute immediately the code is ran, but we want it to execute on clicking
// }
// // line 279 states that once you click on the title of the book, the title is printed in the console
// ReactDom.render(<Booklist />, document.getElementById('root'));

// Import and Export Statements
import {books} from './books' //**** */

import {greeting} from './Testing/testing'
import Book from './Book'
function Booklist() {
  console.log(greeting)
  return <section className="bookList">
    {books.map((book) => {
      return (
      <Book key={book.id} {...book}></Book>
      )
    })}
  </section>
}

// line 279 states that once you click on the title of the book, the title is printed in the console
ReactDom.render(<Booklist />, document.getElementById('root'));