import React, { useEffect, useState } from 'react';
import './CatalogPage.css'; // Подключите стили для страницы
import { categoriesStore } from '../../stores/categories/categoriesStore';
import { observer } from 'mobx-react';
import { getCategories } from '../../api/data';
import { ICategories } from '../../stores/categories/types';
import { useParams, useNavigate, useLocation } from 'react-router-dom';


const CatalogPage: React.FC = observer(() => {

  useEffect(()=>{
    categoriesStore.GetCategories()
  }, [])

 
  const history = useNavigate()
  const location = useLocation()



  console.log(categoriesStore.categories);

  const goToByCategory = (cat: ICategories) => {
    history(`/products/${cat.id}`)
  }
  

  return (
    <div className="catalog-page">
      <header className="catalog-header">
        <h1>Каталог товаров</h1>
      </header>
      <main className="catalog">
        {
            getCategories().map(category => {
              return (
                <div className="product-card">
                  <div className="product-image">
                    <img src={category.urlImg} alt={category.name} />
                  </div>
                  <h2>{category.name}</h2>
                  <button onClick={() => goToByCategory(category)}>Перейти</button>
                </div>
              )
            })
        }
      </main>
    </div>
  );
})

export default CatalogPage;
