import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';

import "./index.css";

const firstBook = {
  author: 'Nishu',
  title: 'Scorpio',
  img : './images/book.jpg'
}
const secondBook = {
  author: 'Jeet',
  title: 'Python',
  img : './images/python.jpg'
}

const BookList = () => {
  return <section className='booklist'>
    <Book 
    author = {firstBook.author}
    title = {firstBook.title}
    img= {firstBook.img}
    >
      <p>Lorem ipsum dolor sit amet consectetur, 
        adipisicing elit. Quidem, labore fugit? 
        Optio laudantium sit error amet id quia?</p>
        <button>click me</button>
    </Book>
     <Book 
    author = {secondBook.author}
    title = {secondBook.title}
    img= {secondBook.img}
    />


  </section>
}

const Book = (props)=>{
  const {img, title, author, children} = props
  console.log(props);
  return <article className='book'>
    <img src={img} alt={title} />
    <h2>{title}</h2>
    <h4>{author}</h4>
    {children}
  </article>
}

// const Book = (props)=>{
//   console.log(props)
//   const {img, title, author} = props
//   return <article className='book'>
//     <img src={img} alt={props.title} />
//     <h2>{title}</h2>
//     <h4>{author}</h4>
//   </article>
// }



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);


