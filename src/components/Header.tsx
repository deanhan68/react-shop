// src/components/Header.tsx
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Главная</Link></li>
        <li><Link to="/catalog">Каталог</Link></li>
        <li><Link to="/cart">Корзина</Link></li>
      </ul>
    </nav>
  );
};

export default Header;
