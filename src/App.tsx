// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import CatalogPage from './pages/CatalogPage';
import Header from './components/Header';

const App: React.FC = () => {
  return (
    <Router>
      <Header /> {/* Это шапка с навигацией */}
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* Главная страница */}
          <Route path="/catalog" element={<CatalogPage />} /> {/* Страница каталога */}
          <Route path="/cart" element={<CartPage />} /> {/* Страница корзины */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
