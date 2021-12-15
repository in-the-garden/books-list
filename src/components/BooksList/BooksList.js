import BookCard from '../BookCard/BookCard';

import './BooksList.css';

function BooksList({ books, onBookRemove, onOpen }) {
  return (
    <section className='books-list'>
      {books.map((book) =>
        <BookCard key={book.id} book={book} onBookRemove={onBookRemove} onOpen={onOpen} />)
      }
    </section>
  )
}

export default BooksList;