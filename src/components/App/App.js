import { useEffect, useState } from 'react';

import AddNewBook from '../AddNewBook/AddNewBook';
import BooksList from '../BooksList/BooksList';
import Header from '../Header/Header';
import EditBook from '../EditBook/EditBook';
import './App.css';

import saved from '../../assets/books-data.json'

function App() {
  const [books, setBooks] = useState(JSON.parse(localStorage.getItem('savedBooks')));
  const [addPopupOpen, setAddPopupOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState({id: 0, title: '', author: '', link: '', isOpened: false});


  function handleOpenAddPopup() {
    setAddPopupOpen(true);
  }

  function handleOpenEditPopup(book) {
    setSelectedBook({...book, isOpened: true});
    console.log(book);
  }

  function handleClosePopup() {
    setAddPopupOpen(false);
    setSelectedBook({title: '', author: '', link: '', isOpen: false});
  }

  function handleAddBookSubmit(book) {
    setBooks([...books, book]);
    handleClosePopup();
  }

  function handleEditBookSubmit(book) {
    setBooks(books.map((item) => {
      if (item.id === book.id) {
        return book;
      } return item
    }))
    handleClosePopup();
  }

  function handleBookRemove(book) {
    setBooks((state) => state.filter((c) => c.id !== book.id));
  }

  useEffect(() => {
    localStorage.setItem('savedBooks', JSON.stringify(books));
    console.log(books);
  },[books])

  return (
    <div className="body">
      <Header onOpen={handleOpenAddPopup}/>
      <main>
        <BooksList books={books} onBookRemove={handleBookRemove} onOpen={handleOpenEditPopup} />
        <AddNewBook onAddNewBook={handleAddBookSubmit} onClose={handleClosePopup} isOpened={addPopupOpen}/>
        <EditBook selectedBook={selectedBook} onEditBookInfo={handleEditBookSubmit} onClose={handleClosePopup} isOpened={selectedBook.isOpened}/>
      </main>
    </div>
  );
}

export default App;
