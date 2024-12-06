import React from 'react';
import './HomePage.css'; // Подключаем стили

const HomePage: React.FC = () => {
  return (
    <div className="homepage">
      {/* Слайдер */}
      <div className="slider">
        <div className="slider-item">Картинка главна</div>
        <div className="slider-item">Скидки</div>
        <div className="slider-item">Новогоднее предложение</div>
      </div>

      {/* Секция популярных товаров */}
      <div className="popular-section">
        <h2>Популярные товары</h2>
        <div className="popular-items">
          <div className="item-card">
            <div className="item-image">Заглушка</div>
            <h3>Спортивный костюм</h3>
            <p>Цена: 5000 руб.</p>
            <button>Заказать</button>
          </div>
          <div className="item-card">
            <div className="item-image">Заглушка</div>
            <h3>Спортивные штаны</h3>
            <p>Цена: 3000 руб.</p>
            <button>Заказать</button>
          </div>
          <div className="item-card">
            <div className="item-image">Заглушка</div>
            <h3>Толстовка</h3>
            <p>Цена: 2500 руб.</p>
            <button>Заказать</button>
          </div>
          <div className="item-card">
            <div className="item-image">Заглушка</div>
            <h3>Кроссовки</h3>
            <p>Цена: 7000 руб.</p>
            <button>Заказать</button>
          </div>
          <div className="item-card">
            <div className="item-image">Заглушка</div>
            <h3>Кроссовки</h3>
            <p>Цена: 7000 руб.</p>
            <button>Заказать</button>
          </div>
          <div className="item-card">
            <div className="item-image">Заглушка</div>
            <h3>Кроссовки</h3>
            <p>Цена: 7000 руб.</p>
            <button>Заказать</button>
          </div>
        </div>
      </div>

      {/* Футер */}
      <footer className="footer">
        <p>© 2024 Наш интернет-магазин. Все права защищены.</p>
        <p>Контакты: info@shop.com | +7 (999) 123-45-67</p>
      </footer>
    </div>
  );
};

export default HomePage;
