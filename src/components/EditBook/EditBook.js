import { useState, useEffect } from 'react';

import './EditBook.css';
import closeIcon from '../../images/close-icon.svg';

function EditBook({ selectedBook, onClose, onEditBookInfo, isOpened }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [link, setLink] = useState('');

  function handleChangeBookTitle(evt) {
    setTitle(evt.target.value);
  }

  function handleChangeBookAuthor(evt) {
    setAuthor(evt.target.value);
  }

  function handleChangeBookLink(evt) {
    setLink(evt.target.value);
  }

  function handleSubmit (evt) {
    evt.preventDefault();
    onEditBookInfo ({
      id: selectedBook.id,
      title,
      author,
      link
    })
  }

  useEffect(() => {
    setTitle(selectedBook.title);
    setAuthor(selectedBook.author);
    setLink(selectedBook.link);
  }, [isOpened])

  return (
    <div className={`popup ${isOpened ? 'popup_is-opened' : ''}`}>
      <form className='popup__form' onSubmit={handleSubmit}>
        <button className='popup__close' type="button" onClick={onClose}><img className="popup__close-icon" src={closeIcon} alt="Кнопка закрыть"/></button>
            <h2 className="popup__title">Редактирование данных</h2>
            <input
              id="title"
              className="popup__input"
              type="text"
              name="title"
              placeholder='Название'
              value={title}
              onChange={handleChangeBookTitle}
              required
            />
            <input
              id="author"
              className="popup__input"
              type="text"
              name="author"
              placeholder="Автор"
              value={author}
              onChange={handleChangeBookAuthor}
              required
            />
            <input
              id="link"
              className="popup__input"
              type="url"
              name="link"
              placeholder="Ссылка на картинку"
              value={link}
              onChange={handleChangeBookLink}
            />
        <button className={`popup__save ${title === '' || author === '' ? 'popup__save_disabled' : ''}`} type="submit">Сохранить</button>
      </form>
    </div>
  )
}

export default EditBook;