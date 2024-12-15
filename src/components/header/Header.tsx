import { Link } from 'react-router-dom'

import './Header.css' // Добавим файл для стилей


const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">Спорт магазин</h1>
      <nav className="nav">
        <Link to="/">Главная</Link>
        <Link to="/products">Товары</Link>
        <Link to="/catalog">Каталог</Link>
        <Link to="/cart">Корзина</Link>
      </nav>
    </header>
  )
}

export default Header
