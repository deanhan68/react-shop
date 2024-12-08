import React, { useEffect, useState } from 'react';
import './CatalogPage.css'; // Подключите стили для страницы
import { json } from '../../api/data';

interface ICategories {
  id: string 
  name: string 
  urlImg: string
}

const CatalogPage: React.FC = () => {
  const [categories, setCategories] = useState<ICategories[]>([])

  useEffect(()=>{
    setCategories(json.categories)
  }, [])

  return (
    <div className="catalog-page">
      <header className="catalog-header">
        <h1>Каталог товаров</h1>
      </header>
      <main className="catalog">
        {
            categories.map(category => {
              return (
                <div className="product-card">
                  <div className="product-image">
                    <img src={category.urlImg} alt={category.name} />
                  </div>
                  <h2>{category.name}</h2>
                  {/* <p>Цена: {category.}</p> */}
                  {/* <button>Добавить в корзину</button> */}
                </div>
              )
            })
        }
        {/* <div className="product-card">
          <div className="product-image"></div>
          <h2>Название товара</h2>
          <p>Цена: -</p>
          <button>Добавить в корзину</button>
        </div>
        <div className="product-card">
          <div className="product-image"></div>
          <h2>Название товара</h2>
          <p>Цена: -</p>
          <button>Добавить в корзину</button>
        </div> */}
        {/* Добавьте больше карточек или рендеринг через map */}
      </main>
    </div>
  );
};

export default CatalogPage;
