import { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';

import AddNewBook from '../AddNewBook/AddNewBook';
import BooksList from '../BooksList/BooksList';
import Header from '../Header/Header';
import './App.css';

import booksData from '../../assets/books-data.json';

function App() {
  const [books, setBooks] = useState(booksData);
  const [isOpened, setIsOpened] = useState(false);

  function handleOpenPopup() {
    setIsOpened(true);
  }

  function handleAddBookSubmit(book) {
    setBooks([book, ...books]);
    console.log('object was saved');
  }

  useEffect(() => {
    localStorage.setItem('savedBooks', JSON.stringify(books));
    const booksS = JSON.parse(localStorage.getItem('savedBooks'));
    console.log('storage', booksS);
  },[books])

  return (
    <div className="body">
      <Header onOpen={handleOpenPopup}/>
      <main>
        <BooksList books={books}/>
        <AddNewBook onAddNewBook={handleAddBookSubmit} isOpened={isOpened}/>
      </main>
    </div>
  );
}

export default App;
