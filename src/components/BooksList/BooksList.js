import React from 'react';
import BookCard from '../BookCard/BookCard';

import './BooksList.css';

function BooksList({ books }) {
  return (
    <section className='books-list'>
      {books.map(({ id, title, author, link }) =>
        <BookCard key={id} title={title} author={author} link={link}/>)
      }
    </section>
  )
}

export default BooksList;