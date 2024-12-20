import React, { useEffect } from 'react'
import './HomePage.css'; // Подключаем стили
import { productsStore } from '../stores/products/productsStore'
import { ProductItem } from './products/ProductItem';
import { DEFINE_SALE } from '../config/constants';
import { observer } from 'mobx-react';
import { useLocation } from 'react-router-dom';
import {CarouselSlider} from "../components/carouselSlider";
import { Footer } from '../components/footer/Footer';



const HomePage: React.FC = observer(() => {

  const {pathname} = useLocation()

  useEffect(() => {
    if(pathname === '/'){
      productsStore.GetProductsWithSale(DEFINE_SALE).then()
    }
  }, [pathname])

  console.log(productsStore.products);



  return (<>
      <CarouselSlider />
        <div className="homepage">
          {/* Секция популярных товаров */}
          <div className="popular-section">
            <h2>Популярные товары</h2>
            <div className="popular-items">
              {
                productsStore.products.map(product => {
                  return <ProductItem {...product} key={product.id}/>
              })
              }
            </div>
          </div>

         <Footer />
        </div>
      </>
  )
})

export default HomePage;
