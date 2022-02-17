import React from 'react';
import logo from '../../img/ToDoList.png'
import './Header.css';

function Header() {
  return (
    <div className='header'>
      <img src={ logo } alt='logotipo do site' />
    </div>
  )
}

export default Header;
