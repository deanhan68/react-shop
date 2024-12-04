// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client'; // Импорт для нового способа создания корня в React 18
import App from './App'; // Импорт компонента App
import './index.css'; // Импорт стилей

const rootElement = document.getElementById('root') as HTMLElement; // Получаем элемент с id "root" из index.html
const root = ReactDOM.createRoot(rootElement); // Создаем корневой элемент с использованием нового API React 18

root.render(
  <React.StrictMode>
    <App /> {/* Монтируем компонент App в корень */}
  </React.StrictMode>
);
