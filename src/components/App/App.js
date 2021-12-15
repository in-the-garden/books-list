import { useEffect, useState } from 'react';

import AddNewBook from '../AddNewBook/AddNewBook';
import BooksList from '../BooksList/BooksList';
import Header from '../Header/Header';
import EditBook from '../EditBook/EditBook';
import Footer from '../Footer/Footer';
import './App.css';

function App() {
  const [books, setBooks] = useState(JSON.parse(localStorage.getItem('savedBooks')));
  const [addPopupOpen, setAddPopupOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState({id: 0, title: '', author: '', link: '', isOpened: false});


  function handleOpenAddPopup() {
    setAddPopupOpen(true);
  }

  function handleOpenEditPopup(book) {
    setSelectedBook({...book, isOpened: true});
  }

  function handleCloseAllPopup() {
    setAddPopupOpen(false);
    setSelectedBook({id: 0, title: '', author: '', link: '', isOpen: false});
  }

  function handleAddBookSubmit(book) {
    setBooks([...books, book]);
    handleCloseAllPopup();
  }

  const handleEscClose = (evt) => {
    if (evt.key === 'Escape') {
      handleCloseAllPopup();
    };
  }

  const handleOverlayClose = (evt)  => {
    if (evt.target.classList.contains('popup')) {
      handleCloseAllPopup();
    };
  }

  function handleEditBookSubmit(book) {
    setBooks(books.map((item) => {
      if (item.id === book.id) {
        return book;
      } return item
    }))
    handleCloseAllPopup();
  }

  function handleBookRemove(book) {
    setBooks((state) => state.filter((c) => c.id !== book.id));
  }

  useEffect(() => {
    localStorage.setItem('savedBooks', JSON.stringify(books));
    console.log(books);
  },[books])

  useEffect(() => {
    document.addEventListener('keydown', handleEscClose);
    document.addEventListener('mousedown', handleOverlayClose);
    return() =>{
        document.removeEventListener('keydown', handleEscClose);
        document.removeEventListener('mousedown', handleOverlayClose);
    }
}, [])

  return (
    <div className="body">
      <Header onOpen={handleOpenAddPopup}/>
      <main>
        <BooksList books={books} onBookRemove={handleBookRemove} onOpen={handleOpenEditPopup} />
        <AddNewBook onAddNewBook={handleAddBookSubmit} onClose={handleCloseAllPopup} isOpened={addPopupOpen}/>
        <EditBook selectedBook={selectedBook} onEditBookInfo={handleEditBookSubmit} onClose={handleCloseAllPopup} isOpened={selectedBook.isOpened}/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
