import { useEffect } from 'react'
import { observer } from 'mobx-react'
import { useNavigate } from 'react-router-dom'

import { categoriesStore } from '../../stores/categories/categoriesStore'
import { ICategories } from '../../stores/categories/types'

import './CatalogPage.css' // Подключите стили для страницы


const CatalogPage = observer(() => {
  useEffect(() => {
   categoriesStore.GetCategories().then()
  }, [])

  const history = useNavigate()

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
            categoriesStore.categories.map(category => {
              return (
                <div className="product-card" key={category.id}>
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
  )
})

export default CatalogPage
