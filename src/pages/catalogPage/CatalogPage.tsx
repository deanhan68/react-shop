import React, { useEffect, useState } from 'react';
import './CatalogPage.css'; // Подключите стили для страницы
import { categoriesStore } from '../../stores/categories/categoriesStore';
import { observer } from 'mobx-react';
import { ICategories } from '../../stores/categories/types';
import { useParams, useNavigate, useLocation } from 'react-router-dom';


const CatalogPage: React.FC = observer(() => {

  const [categories, setCategories] = useState<ICategories[]>([])

  useEffect(() => {
    fetch("https://6759b537099e3090dbe2a885.mockapi.io/data")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setCategories(data)
      })

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
            categories.map(category => {
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
