import React from 'react';

import './BookCard.css';

function BookCard({ title, author, link }) {
  return (
    <article className='card'>
      {link !== '' ?
        <img className='card__cover' src={link} alt='Обложка книги'/>
        :
        <div className='card__cover card__cover_no-image'></div>
      }
      <div className='card__info'>
        <h5 className='card__title'>{title}</h5>
        <h6 className='card__author'>{author}</h6>
      </div>
      <div className='card__button-container'>
        <button className='card__edit'></button>
        <button className='card__remove'></button>
      </div>
    </article>
  )
}

export default BookCard;