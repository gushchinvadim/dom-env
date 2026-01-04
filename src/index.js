// src/index.js
import './css/style.css'; // ✅
import { initGame } from './js/app';

// Запускаем только в браузере, после полной загрузки DOM
document.addEventListener('DOMContentLoaded', () => {
  initGame();
});