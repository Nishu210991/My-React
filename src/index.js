import React from 'react';
import ReactDOM from 'react-dom/client';

import "./index.css";


const BookList = () => {
  return <section className='booklist'>
    <Book />
    <Book />
    <Book />
    <Book />

  </section>
}

const Book = ()=>{
  return <article className='book'>
    <Image />
    <Title />
    <Author />
  </article>
}

const Image = () => (
  <img src='./images/book.jpg' 
  alt='Python All-in-One for Dummies'
  />
);
const Title = () => <h2>Python</h2>
const Author = () => {
  return <h4 style={{
    color: '#617d98',
    fontSize: '0.75rem',
    marginTop: '1 rem'
  }}>John Shovic </h4>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);


