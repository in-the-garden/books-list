import React, { useState } from 'react';

import './AddNewBook.css';
import closeIcon from '../../images/close-icon.svg';

function AddNewBook({ onClose, onAddNewBook, isOpened }) {
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

  function handleSubmit(evt) {
    evt.preventDefault();
    onAddNewBook ({
      title,
      author,
      link
    })
  }

  return (
    <div className={`popup ${isOpened && 'popup_is-opened'}`}>
      <form className='popup__form' onSubmit={handleSubmit}>
          <button className='popup__close' type="button" onClick={onClose}><img className="popup__close-icon" src={closeIcon} alt="Кнопка закрыть"/></button>
          <h2 className="popup__title">Новая книга</h2>
          <input
            id="title"
            className="popup__input"
            type="text"
            name="title"
            placeholder="Название"
            value={title}
            onChange={handleChangeBookTitle}
            required/>
          <input
            id="author"
            className="popup__input"
            type="text"
            name="author"
            placeholder="Автор"
            value={author}
            onChange={handleChangeBookAuthor}
            required/>
          <input
            id="link"
            className="popup__input"
            type="url"
            name="link"
            placeholder="Ссылка на картинку"
            value={link}
            onChange={handleChangeBookLink}
          />
          <button className="popup__save" type="submit">Сохранить</button>
      </form>
    </div>
  )
}

export default AddNewBook;