import React, { Children } from 'react';
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
 
  return <section className='booklist'>
    <EventExample/>
  {books.map((book)=>{
    // const {img, title, author, id} = book
    // return < Book img={img} title={title} author={author} key={id}/>
    // return <Book book={book} key={book.id} />
    return <Book  {...book} key={book.id} />


  })};
  </section>
}

const EventExample = ()=> {
  const handleFormInput = (e) =>{
    console.log("Handle form Input");
    console.log(e);
    console.log(e.target.name);
    console.log(e.target.value);

  }
  const handleButtonClick = () =>{
    alert("Handle button Click");
  }
  const handleSubmitButton = (e) =>{
    e.preventDefault();
    console.log("Form Submitted");
  }
  return (
    <section>
      <form >
        <h2>Form</h2>
        <input type="text"
        name='example'
        style={{margin:'1rem 0'}} 
        onChange={handleFormInput}
        />
     
     <div><button type='submit' onClick={handleSubmitButton}>submit </button>
      <button onClick={handleButtonClick}>click me</button>
</div>
</form>
    </section>
  )

}

const Book = (props)=>{
  const {img, title, author, children} = props
  // console.log(props);
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


