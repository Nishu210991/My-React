import React from 'react';
import ReactDOM from 'react-dom/client';

import "./index.css";
const books = [
 {
  author: 'Nishu',
  title: 'Scorpio',
  img : './images/book.jpg',
  id: 1
},
{
  author: 'Jeet',
  title: 'Python',
  img : './images/python.jpg',
  id: 2
}
];

const BookList = () => {
  const someValue = "Tokyo"
  const displayValue = ()=>{
    console.log(someValue);
  }
 
  return <section className='booklist'>
  
  {books.map((book)=>{
    // const {img, title, author, id} = book
    // return < Book img={img} title={title} author={author} key={id}/>
    // return <Book book={book} key={book.id} />
    return <Book  {...book} key={book.id} displayValue={displayValue}/>


  })};
  </section>
}


const Book = (props)=>{
  const {img, title, author, displayValue} = props
  // console.log(props);
  
  return <article className='book'>
    <img src={img} alt={title} />
    <h2>{title}</h2>
    <button onClick={displayValue}>display Title</button>
    <h4>{author}</h4>
    
  </article>
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);


