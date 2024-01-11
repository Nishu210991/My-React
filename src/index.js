import React from 'react';
import ReactDOM from 'react-dom/client';

import {books}  from './books';

import "./index.css";
import Book from './Book';

const BookList = () => {
  return (
    <>
    <h1>Scorpio Best Seller</h1>
  <section className='booklist'>
 
  {books.map((book, index)=>{
    return <Book {...book} key={book.id} number={index} />

  })};
  </section>
  </>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);


