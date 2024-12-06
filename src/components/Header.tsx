import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Добавим файл для стилей

const Header: React.FC = () => {
  return (
    <header className="header">
      <h1 className="logo">WildSport</h1>
      <nav className="nav">
        <Link to="/">Главная</Link>
        <Link to="/catalog">Каталог</Link>
        <Link to="/cart">Корзина</Link>
      </nav>
    </header>
  );
};

export default Header;
