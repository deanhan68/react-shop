import React from 'react';
import './CatalogPage.css'; // Подключите стили для страницы

const CatalogPage: React.FC = () => {
  return (
    <div className="catalog-page">
      <header className="catalog-header">
        <h1>Каталог товаров</h1>
      </header>
      <main className="catalog">
        <div className="product-card">
          <div className="product-image"></div>
          <h2>Название товара</h2>
          <p>Цена: $99.99</p>
          <button>Добавить в корзину</button>
        </div>
        <div className="product-card">
          <div className="product-image"></div>
          <h2>Название товара</h2>
          <p>Цена: $99.99</p>
          <button>Добавить в корзину</button>
        </div>
        {/* Добавьте больше карточек или рендеринг через map */}
      </main>
    </div>
  );
};

export default CatalogPage;
