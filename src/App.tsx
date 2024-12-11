// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CartPage from './pages/cartPage/CartPage';
import CatalogPage from './pages/catalogPage/CatalogPage';
import Header from './components/header/Header';
import { Products } from './pages/products/Products';

const App: React.FC = () => {
  return (
    <>
      <Header /> {/* Это шапка с навигацией */}
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* Главная страница */}
          <Route path="/catalog" element={<CatalogPage />} /> {/* Страница каталога */}
          <Route path="/cart" element={<CartPage />} /> {/* Страница корзины */}
          <Route path="/products" element={<Products />} /> {/* Страница продуктов */}
          <Route path="/products/:cat" element={<Products />} /> {/* Страница продуктов */}
        </Routes>
      </div>
    </>
  );
};

export default App;
