import React from 'react';

import './Header.css';

function Header({ onOpen }) {

  return (
    <header className='header'>
      <h2 className='header__title'>Books list</h2>
      <button className='header__add-btn' type='button' onClick={onOpen}>Добавить книгу</button>
    </header>
  )
}

export default Header;