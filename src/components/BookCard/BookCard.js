import './BookCard.css';

function BookCard({ book, onBookRemove, onOpen }) {

  function handleEditBook() {
    onOpen(book)
  }

  function handleRemoveBook() {
    onBookRemove(book)
  }

  return (
    <article className='card'>
      {book.link !== '' ?
        <img className='card__cover' src={book.link} alt='Обложка книги'/>
        :
        <div className='card__cover card__cover_no-image'>Нет обложки</div>
      }
      <div className='card__info'>
        <h5 className='card__title'>{book.title}</h5>
        <h6 className='card__author'>{book.author}</h6>
      </div>
      <div className='card__button-container'>
        <button className='card__edit' onClick={handleEditBook}></button>
        <button className='card__remove' onClick={handleRemoveBook}></button>
      </div>
    </article>
  )
}

export default BookCard;